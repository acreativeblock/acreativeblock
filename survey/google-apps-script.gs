/**
 * A Creative Block — Validation Survey → Google Sheets
 *
 * Paste into your Google Sheet → Extensions → Apps Script, then
 * Deploy → Manage deployments → Edit → New version (URL stays the same).
 * If the sheet has older test rows, clear them so the columns line up.
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
  'Q12 Outcome worth paying for',
  'Q13 Missing from existing support',
  'Q14 Hesitations',
  'Q15 What would make you invest',
  'Q16 Session price',
  'Q17 Package price',
  'Q18 Too expensive (€)',
  'Q18 Too cheap (€)',
  'Email',
  'Contact me about (pilot / updates)',
  'Anything else'
];

var FIELDS = [
  'submitted_at',
  'q1','q2','q3','q4','q5','q6','q6b','q7','q8','q9','q10','q11','q12','q13','q14','q15',
  'q16','q17','q18a','q18b','q19','q20','q21'
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
