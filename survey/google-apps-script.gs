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
  'Q1 Creative field(s)',
  'Q2 Last project stuck on',
  'Q3 Block frequency',
  'Q4 Main block type',
  'Q5 Effects (multi)',
  'Q6 Paid for support before',
  'Q6 — what & how much',
  'Q7 Would use it',
  'Q8 How needed (1-5)',
  'Q9 Formats (multi)',
  'Q10 Coach / consultant',
  'Q11 What matters most (multi)',
  'Q12 Worth paying for (multi)',
  'Q12 — other',
  'Q13 Missing from support (multi)',
  'Q13 — other',
  'Q14 Hesitations (multi)',
  'Q14 — other',
  'Q15 What would make you invest (multi)',
  'Q15 — other',
  'Q16 What you could pay (€)',
  'Q16 What feels fair (€)',
  'Email',
  'Contact me about (pilot / updates)',
  'Anything else'
];

var FIELDS = [
  'submitted_at',
  'q1','q2','q3','q4','q5','q6','q6b','q7','q8','q9','q10','q11',
  'q12','q12o','q13','q13o','q14','q14o','q15','q15o',
  'q16a','q16b','q17','q18','q19'
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
