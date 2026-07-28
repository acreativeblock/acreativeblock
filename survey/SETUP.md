# Validation Survey — setup (about 10 minutes)

Three files:

- **index.html** — the survey people fill in (host this on your URL).
- **google-apps-script.gs** — the tiny script that saves each response as a row in your Google Sheet.
- **SETUP.md** — this guide.

Every submission becomes one row in a Google Sheet you own. Unlimited responses, free.

---

## 1. Create the Google Sheet + script

1. Go to **sheets.new** to make a blank Google Sheet. Name it e.g. *"A Creative Block — Validation Responses"*.
2. In the Sheet, open **Extensions → Apps Script**.
3. Delete whatever's in the editor, then paste the entire contents of **google-apps-script.gs**.
4. Click **Save** (the disk icon).

## 2. Deploy it as a Web App

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear ⚙ next to "Select type" → choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** **Anyone**  *(this only allows posting a row — no one can see your data)*
4. Click **Deploy**. Approve the permissions when Google asks (it's your own script).
5. Copy the **Web app URL** it gives you (looks like `https://script.google.com/macros/s/…/exec`).

## 3. Connect the survey

1. Open **index.html** in a text editor.
2. Find this line near the bottom:
   ```js
   const SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";
   ```
3. Replace the placeholder with the Web app URL from step 2. Save.

## 4. Test

1. Open **index.html** in a browser, fill it in, and hit **Send my answers**.
2. Check your Google Sheet — a **Responses** tab appears with a header row and your test answer. Delete the test row when you're happy.

## 5. Put it on your URL

Upload **index.html** to any static host and point your domain/subdomain at it:

- **Netlify / Vercel / Cloudflare Pages** — drag-and-drop the file, free, gives you HTTPS. Add your custom domain in their dashboard.
- **Your existing web host** — just upload `index.html` (e.g. to `/survey/`).

That's it. The Google Sheet is your live, readable dashboard — sort, filter, pivot, or chart the answers right there.

---

### Notes
- **Reading the data:** open the Sheet whenever you like. Each row is one respondent, columns are the 27 questions.
- **Changing the script later:** after editing the `.gs`, you must **Deploy → Manage deployments → Edit → New version** for changes to take effect.
- **Spam:** the form has a hidden honeypot field that silently blocks most bots.
- **Privacy:** the data lives only in your Google account. If you collect emails (Q27), treat them per your privacy policy.
