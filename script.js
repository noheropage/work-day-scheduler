// display current day at top of calender
var DateTime = luxon.DateTime;
var dt = DateTime.local()
var now = DateTime.local()
// TODO: add timer loop so clock updates automatically
$("#currentDay").append(dt.toLocaleString(DateTime.DATETIME_MED))

// TODO: color coded time blocks to indicate past, present, or future
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

var newRow;
var newHour;
var newInput;
var newSaveBtn;
var fullInput = [];
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
    newInput.addClass("future description col-9 " + hours[i])
    newInput.attr("type", "text")
    // newInput.attr("")
    newSaveBtn.addClass("saveBtn col-2")
    newSaveBtn.attr("type", "submit")
    newSaveBtn.attr("data-index", i);
    // console.log(newSaveBtn.data());
    
    newHour.text(hours[i])
    newInput.val(newInput.textContent)
    console.log(newInput.val());
    newSaveBtn.text("Save")
    $(".calendar").append(newRow)
    $(newRow).append(newHour)
    $(newRow).append(newInput)
    $(newRow).append(newSaveBtn)
    // fullInput += newInput;
    var oldInput = JSON.parse(localStorage.getItem("textInput" + i))
    // console.log(oldInput);
    newInput.val(oldInput) 
    // console.log(newInput.text());
}


// TODO: click into time block to enter event

// TODO: save button for time block to save text to local storage
$(".saveBtn").on("click", function(event) {
    // get text data from input field 
    event.preventDefault()
    // var element = event.
    // saves corresponding user input
    var textInput = $(this).parent().children(".description").val()
    // console.log(textInput);
    
    // place it into local storage 
    localStorage.setItem("textInput" + $(this).data("index"), JSON.stringify(textInput))

    // display the info stored in local storage (first thing) 

})

// for (var i=0; i < hours.length; i++) {
//     var oldInput = JSON.parse(localStorage.getItem("textInput" + i))
//     console.log(oldInput);
//     newInput.textContent = oldInput 
// }