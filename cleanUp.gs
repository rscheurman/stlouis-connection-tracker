var connectionTrackerSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Connection Tracker')

function cleanUp() {
  try{
    for(i=connectionTrackerSheet.getLastRow(); i >= 6; i--){
      var namevaluu = connectionTrackerSheet.getRange(i, 3).getValue()
      if(namevaluu == "Invited" || namevaluu == "Liked" || namevaluu == "Follow" || namevaluu == "Invite" ||namevaluu == "Like" || namevaluu == "" || namevaluu == " "){
        connectionTrackerSheet.deleteRow(i)
        Logger.log("Deleted row " + i)
      }
    }
  } catch(e) {
    logError(e.name, e.message, 'cleanUp')
  }
}