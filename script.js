// display current day at top of calender
var DateTime = luxon.DateTime;
var dt = DateTime.local()
var now = DateTime.local()
// var test = dt.minus({months: 2})
// console.log(test.month);
// TODO: add timer loop so clock updates automatically
$("#currentDay").append(dt.toLocaleString(DateTime.DATETIME_MED))

var storedMonth = JSON.parse(localStorage.getItem("storedMonth")) || dt.month
var storedDay = JSON.parse(localStorage.getItem("storedDay")) || dt.day
console.log(storedMonth);
console.log(storedDay);

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var militaryHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

var newRow;
var newHour;
var newInput;
var newSaveBtn;
// set up columns and rows for hours 9-5 
for (var i=0; i < hours.length; i++) {
    newRow = $("<div>")
    newHour = $("<div>")
    newInput = $("<input>")
    newSaveBtn = $("<button>")
    newRow.addClass("row time-block")
    newHour.addClass("hour col-1")
    // newHour.attr("id", hours[i])
    // console.log(newHour);
    if (parseInt(militaryHours[i]) === dt.hour) {
        newInput.addClass("present description col-9 " + hours[i])
    } else if (parseInt(militaryHours[i]) < dt.hour) {
        newInput.addClass("past description col-9 " + hours[i])
    } else {
        newInput.addClass("future description col-9 " + hours[i])
    }
    
    newInput.attr("type", "text")
    // newInput.attr("")
    newSaveBtn.addClass("saveBtn col-2")
    newSaveBtn.attr("type", "submit")
    newSaveBtn.attr("data-index", i);
    // console.log(newSaveBtn.data());
    
    newHour.text(hours[i])
    newInput.val(newInput.textContent)
    // console.log(newInput.val());
    newSaveBtn.text("Save")
    $(".calendar").append(newRow)
    $(newRow).append(newHour)
    $(newRow).append(newInput)
    $(newRow).append(newSaveBtn)
    
    // look through local storage and display previous user input 
    if (dt.month !== storedMonth || dt.day !== storedDay) {
        // console.log("not same day");
        newInput.removeAttr("value")
    } else {
        var oldInput = JSON.parse(localStorage.getItem("textInput" + i))
        newInput.val(oldInput) 
        // console.log("same day");
    }
    
}

$(".saveBtn").on("click", function(event) {
    // get text data from input field 
    event.preventDefault()
    // var element = event.
    // saves corresponding user input
    var textInput = $(this).parent().children(".description").val()
    // console.log(textInput);
    
    // place it into local storage 
    localStorage.setItem("textInput" + $(this).data("index"), JSON.stringify(textInput))
    localStorage.setItem("storedMonth", JSON.stringify(storedMonth))
    localStorage.setItem("storedDay", JSON.stringify(storedDay))
})

