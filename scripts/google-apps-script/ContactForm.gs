/**
 * Recoup Contact Us → Google Sheet
 *
 * Spreadsheet:
 * https://docs.google.com/spreadsheets/d/18USaox9ekJQvIeEwbKuMzo5jYA2R4_zmMtJFu6i4Edc
 *
 * Tab: Form Responses 1
 * Columns: Timestamp | Full Name | Email Address | Phone Number |
 *          How can we help you? | Organization / School | Source Page | Source Section
 *
 * After changing this file in Apps Script:
 * Deploy → Manage deployments → the Web app → pencil → New version → Deploy
 */

var SPREADSHEET_ID = '18USaox9ekJQvIeEwbKuMzo5jYA2R4_zmMtJFu6i4Edc';
var SHEET_NAME = 'Form Responses 1';

function doGet() {
  return json_({ result: 'ok' });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);

  try {
    const sheet = getSheet_();
    ensureHeaders_(sheet);

    const body = parseBody_(e);
    const rowIndex = findNextEmptyRow_(sheet);
    const now = new Date();

    sheet.getRange(rowIndex, 1, 1, 8).setValues([
      [
        now,
        String(body.fullName || '').trim(),
        String(body.email || '').trim(),
        String(body.phone || '').trim(),
        String(body.message || '').trim(),
        String(body.organization || '').trim(),
        String(body.from || '').trim(),
        String(body.section || '').trim(),
      ],
    ]);

    return json_({ result: 'success', row: rowIndex });
  } catch (error) {
    return json_({ result: 'error', error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet_() {
  const doc = SpreadsheetApp.openById(SPREADSHEET_ID);
  return doc.getSheetByName(SHEET_NAME) || doc.getSheets()[0];
}

function parseBody_(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      const parsed = JSON.parse(e.postData.contents);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch (_) {
      // fall through to form fields
    }
  }
  return (e && e.parameter) || {};
}

function ensureHeaders_(sheet) {
  const headers = [
    'Timestamp',
    'Full Name',
    'Email Address',
    'Phone Number',
    'How can we help you?',
    'Organization / School',
    'Source Page',
    'Source Section',
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
}

function findNextEmptyRow_(sheet) {
  const last = Math.max(sheet.getLastRow(), 1);
  const values = sheet.getRange(1, 1, last, 8).getValues();
  for (var i = 1; i < values.length; i++) {
    var empty = values[i].every(function (cell) {
      return cell === '' || cell === null;
    });
    if (empty) return i + 1;
  }
  return values.length + 1;
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
