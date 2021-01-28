// display current day at top of calender
var DateTime = luxon.DateTime;
var dt = DateTime.local()
var now = DateTime.local()
var test = dt.minus({hours: 12})
console.log(test.hour);
// TODO: add timer loop so clock updates automatically
$("#currentDay").append(dt.toLocaleString(DateTime.DATETIME_MED))

// TODO: color coded time blocks to indicate past, present, or future
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
    if (parseInt(militaryHours[i]) === test.hour) {
        newInput.addClass("present description col-9 " + hours[i])
    } else if (parseInt(militaryHours[i]) < test.hour) {
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
    var oldInput = JSON.parse(localStorage.getItem("textInput" + i))
    newInput.val(oldInput) 
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
})

