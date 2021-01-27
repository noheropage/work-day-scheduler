// TODO: display current day at top of calender
// const { DateTIme } = require("luxon");
var DateTime = luxon.DateTime;
var dt = DateTime.local()
var now = DateTime.local()
console.log(now);
$("#currentDay").append(dt.toLocaleString(DateTime.DATETIME_MED))
// TODO: color coded time blocks to indicate past, present, or future

// TODO: click into time block to enter event

// TODO: save button for time block to save text to local storage