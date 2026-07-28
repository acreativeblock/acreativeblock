/**
 * A Creative Block — Validation Survey → Google Sheets
 *
 * Paste this into your Google Sheet's Apps Script editor (Extensions → Apps Script),
 * then Deploy → New deployment → Web app → Execute as: Me · Who has access: Anyone.
 * Copy the resulting Web app URL into index.html (the SCRIPT_URL constant).
 */

// Column order — the header row written on first run. Matches the form field names.
var HEADERS = [
  'Submitted at',
  'Q1 Age group',
  'Q2 Creative field',
  'Q3 Income from creative',
  'Q4 Creativity centrality (1-5)',
  'Q5 Block frequency',
  'Q6 Main block type',
  'Q7 Effects (multi)',
  'Q8 What stops you',
  'Q9 Current fixes / do they work',
  'Q10 Prior coach/therapist',
  'Q10 — which',
  'Q11 What helped / didn\'t',
  'Q12 Missing from existing support',
  'Q13 Monthly spend on growth',
  'Q14 Would invest if…',
  'Q15 Would use it',
  'Q16 Needed for you (1-5)',
  'Q17 Needed generally (1-5)',
  'Q18 Formats (multi)',
  'Q19 Coach / consultant',
  'Q20 Accountability importance (1-5)',
  'Q21 Community importance (1-5)',
  'Q22 Outcome worth paying for',
  'Q23 Hesitations / skepticism',
  'Q24 Fair price — single session',
  'Q25 Fair price — package',
  'Q26 Too expensive (€)',
  'Q26 Too cheap (€)',
  'Q27 Open to free pilot',
  'Q27 — contact'
];

// Maps the sheet columns to the form field names posted by index.html.
var FIELDS = [
  'submitted_at',
  'q1','q2','q3','q4','q5','q6','q7','q8','q9',
  'q10','q10b','q11','q12','q13','q14','q15','q16','q17','q18',
  'q19','q20','q21','q22','q23','q24','q25','q26a','q26b','q27','q27b'
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // avoid two submissions colliding
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses')
             || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Responses');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    var p = (e && e.parameter) ? e.parameter : {};
    var row = FIELDS.map(function (f) { return p[f] || ''; });
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the web-app URL in a browser to confirm it's live.
function doGet() {
  return ContentService.createTextOutput('A Creative Block survey endpoint is running.');
}
