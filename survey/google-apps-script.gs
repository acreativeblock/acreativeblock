/**
 * A Creative Block — Validation Survey → Google Sheets
 *
 * Paste into your Google Sheet → Extensions → Apps Script, then
 * Deploy → Manage deployments → Edit → New version (URL stays the same).
 * If the sheet has older test rows, clear them so the columns line up.
 */

var HEADERS = [
  'Submitted at',
  'Q1 Creative field',
  'Q2 Block frequency',
  'Q3 Main block type',
  'Q4 Effects (multi)',
  'Q5 Paid for support before',
  'Q5 — what & how much',
  'Q6 Would use it',
  'Q7 How needed (1-5)',
  'Q8 Formats (multi)',
  'Q9 Coach / consultant',
  'Q10 What matters most (multi)',
  'Q11 Outcome worth paying for',
  'Q12 Missing from existing support',
  'Q13 Hesitations',
  'Q14 What would make you invest',
  'Q15 Session price',
  'Q16 Package price',
  'Q17 Too expensive (€)',
  'Q17 Too cheap (€)',
  'Email',
  'Contact me about (pilot / updates)',
  'Anything else'
];

var FIELDS = [
  'submitted_at',
  'q1','q2','q3','q4','q5','q5b','q6','q7','q8','q9','q10','q11','q12','q13','q14',
  'q15','q16','q17a','q17b','q18','q19','q20'
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
