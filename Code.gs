function initApp() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem("Import CSV(s)", "showSidebar")
    .addToUi();
}

function showSidebar() {
  const ui = HtmlService.createTemplateFromFile("Sidebar")
    .evaluate()
    .setTitle("CSV importer")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);

  SpreadsheetApp.getUi().showSidebar(ui);
}

function onOpen(e) {
  initApp();
}

function onInstall(e) {
  onOpen(e);
}

// Functions used in 'Sidebar'
function generateSheet(fileData, fileName) {
  try {
    const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    const csvData = Utilities.parseCsv(fileData);
    const newSheet = activeSpreadsheet.insertSheet(fileName);
    const range = newSheet.getRange(1, 1, csvData.length, csvData[0].length);
    range.setValues(csvData);

    return "Sheet created and populated with CSV data";
  } catch (err) {
    throw err;
  }
}
