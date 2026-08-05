/**
 * A Creative Block — Validation Survey → Google Sheets
 *
 * 1. Paste this whole file into your Sheet → Extensions → Apps Script (replace everything).
 * 2. Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy.
 *    (Editing the existing deployment keeps the same /exec URL, so the form still works.)
 * 3. Clear the sheet: delete every row INCLUDING the header row, or delete the
 *    "Responses" tab. The correct header is rebuilt on the next submission.
 */

var HEADERS = [
  'Submitted at',
  'Q1 Field(s) you work in',
  'Q2 Last project stuck on',
  'Q3 Block frequency',
  'Q4 Main block type',
  'Q5 Effects (multi)',
  'Q5 — other',
  'Q6 What you do when stuck (multi)',
  'Q6 — other',
  'Q7 Paid for support before',
  'Q7 — what & how much',
  'Q8 Would use it',
  'Q9 How needed (1-5)',
  'Q10 Formats (multi)',
  'Q11 Coach / consultant',
  'Q12 What matters most (multi)',
  'Q13 Worth paying for (multi)',
  'Q13 — other',
  'Q14 Missing from support (multi)',
  'Q14 — other',
  'Q15 Hesitations (multi)',
  'Q15 — other',
  'Q16 What would make you invest (multi)',
  'Q16 — other',
  'Q17 What you could pay (€)',
  'Q17 What feels fair (€)',
  'Email',
  'Anything else'
];

var FIELDS = [
  'submitted_at',
  'q1','q2','q3','q4','q5','q5o','q5b','q5bo','q6','q6b','q7','q8','q9','q10','q11',
  'q12','q12o','q13','q13o','q14','q14o','q15','q15o',
  'q16a','q16b','q17','q19'
];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Responses')
             || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Responses');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }
    var p = (e && e.parameter) ? e.parameter : {};
    sheet.appendRow(FIELDS.map(function (f) { return p[f] || ''; }));
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('A Creative Block survey endpoint is running.');
}
