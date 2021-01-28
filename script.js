// display current day at top of calender
var DateTime = luxon.DateTime;
var dt = DateTime.local()
var now = DateTime.local()
// TODO: add timer loop so clock updates automatically
$("#currentDay").append(dt.toLocaleString(DateTime.DATETIME_MED))

// TODO: color coded time blocks to indicate past, present, or future
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

for (var i=0; i < hours.length; i++) {
    var newRow = $("<div>")
    var newHour = $("<div>")
    var newActivity = $("<div>")
    var newSaveBtn = $("<button>")
    newRow.addClass("row time-block ")
    newHour.addClass("hour col-1")
    newActivity.addClass("future description col-9")
    newSaveBtn.addClass("saveBtn col-2")
    
    newHour.text(hours[i])
    newActivity.text("Placeholder")
    newSaveBtn.text("Save")
    $(".calendar").append(newRow)
    $(newRow).append(newHour)
    $(newRow).append(newActivity)
    $(newRow).append(newSaveBtn)


}


// TODO: click into time block to enter event

// TODO: save button for time block to save text to local storage