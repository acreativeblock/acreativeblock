#!/usr/bin/env python3
"""Submit newly added, updated, or removed site URLs to IndexNow."""
from __future__ import annotations

import json
import os
import subprocess
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HOST = "acreativeblock.com"
ORIGIN = f"https://{HOST}"
KEY = os.environ["INDEXNOW_KEY"]
KEY_LOCATION = f"{ORIGIN}/{KEY}.txt"
SHARED_SUFFIXES = {".css", ".js"}
SHARED_FILES = {"sitemap.xml", "robots.txt", "llms.txt"}


def sitemap_urls() -> set[str]:
    tree = ET.parse(ROOT / "sitemap.xml")
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    return {node.text.strip() for node in tree.findall(".//sm:loc", ns) if node.text}


def changed_files() -> list[tuple[str, str]]:
    before = os.environ.get("INDEXNOW_BEFORE", "")
    after = os.environ.get("INDEXNOW_AFTER", "HEAD") or "HEAD"
    if before and set(before) != {"0"}:
        command = ["git", "diff", "--name-status", before, after]
    else:
        command = ["git", "diff", "--name-status", "HEAD^", "HEAD"]
    output = subprocess.check_output(command, cwd=ROOT, text=True)
    changes: list[tuple[str, str]] = []
    for line in output.splitlines():
        parts = line.split("\t")
        status = parts[0]
        # For renames, submit both the removed and new route.
        for path in parts[1:]:
            changes.append((status, path))
    return changes


def route_for(path: str) -> str | None:
    p = Path(path)
    if any(part.startswith(".") or part in {"_archive", "node_modules"} for part in p.parts):
        return None
    if p.name == "index.html":
        parent = p.parent.as_posix()
        return ORIGIN + ("/" if parent == "." else f"/{parent}/")
    if p.suffix == ".html":
        return f"{ORIGIN}/{p.as_posix()}"
    return None


def wait_for_key() -> None:
    for attempt in range(30):
        try:
            with urllib.request.urlopen(KEY_LOCATION, timeout=15) as response:
                if response.read().decode("utf-8").strip() == KEY:
                    return
        except Exception:
            pass
        if attempt < 29:
            time.sleep(10)
    raise RuntimeError(f"IndexNow key was not available at {KEY_LOCATION}")


def main() -> None:
    all_urls = sitemap_urls()
    submit_all = os.environ.get("INDEXNOW_ALL", "").lower() == "true"
    changes = changed_files()
    if any(Path(path).suffix in SHARED_SUFFIXES or path in SHARED_FILES for _, path in changes):
        submit_all = True
    urls = all_urls if submit_all else {route for _, path in changes if (route := route_for(path))}
    urls = {url for url in urls if url.startswith(ORIGIN + "/")}
    if not urls:
        print("No public page URLs changed; nothing to submit.")
        return

    wait_for_key()
    payload = json.dumps({
        "host": HOST,
        "key": KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": sorted(urls),
    }).encode("utf-8")
    request = urllib.request.Request(
        "https://api.indexnow.org/indexnow",
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            if response.status not in {200, 202}:
                raise RuntimeError(f"Unexpected IndexNow status: {response.status}")
            print(f"Submitted {len(urls)} URL(s) to IndexNow (HTTP {response.status}).")
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", "replace")
        raise RuntimeError(f"IndexNow returned HTTP {error.code}: {detail}") from error


if __name__ == "__main__":
    main()
