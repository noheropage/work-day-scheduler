// display current day at top of calender
var DateTime = luxon.DateTime;
var dt = DateTime.local()

$("#currentDay").append(dt.toLocaleString(DateTime.DATETIME_MED))

// retrieve day and month from previous session to make sure tasks can be reset
var storedMonth = JSON.parse(localStorage.getItem("storedMonth")) || dt.month
var storedDay = JSON.parse(localStorage.getItem("storedDay")) || dt.day

// set up easily read hours for display and military time equivalent for comparisons with luxon
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
var militaryHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]

// set up columns and rows for hours 9-5 
for (var i=0; i < hours.length; i++) {
    var newRow = $("<div>")
    var newHour = $("<div>")
    var newInput = $("<input>")
    var newSaveBtn = $("<button>")
    newRow.addClass("row time-block")
    
    
    // change color of input field depending on current time of day
    if (parseInt(militaryHours[i]) === dt.hour) {
        newInput.addClass("present description col-9 " + hours[i])
    } else if (parseInt(militaryHours[i]) < dt.hour) {
        newInput.addClass("past description col-9 " + hours[i])
    } else {
        newInput.addClass("future description col-9 " + hours[i])
    }
    
    // set up attributes for save button 
    newSaveBtn.addClass("saveBtn col-2")
    newSaveBtn.attr("type", "submit")
    newSaveBtn.attr("data-index", i);
    
    newHour.addClass("hour col-1")
    newHour.text(hours[i])
    newInput.val(newInput.textContent)
    newSaveBtn.text("Save")
    // place new variables and their components into the html
    $(".calendar").append(newRow)
    $(newRow).append(newHour)
    $(newRow).append(newInput)
    $(newRow).append(newSaveBtn)
    
    // look through local storage and display previous user input as long as it is from the same day/month
    if (dt.month !== storedMonth || dt.day !== storedDay) {
        newInput.removeAttr("value")
    } else {
        var oldInput = JSON.parse(localStorage.getItem("textInput" + i))
        newInput.val(oldInput) 
    }
}

$(".saveBtn").on("click", function(event) {
    // get text data from input field and prevent submit button from refreshing the page
    event.preventDefault()
    // saves corresponding user input
    var textInput = $(this).parent().children(".description").val()
    
    // place it into local storage 
    localStorage.setItem("textInput" + $(this).data("index"), JSON.stringify(textInput))
    localStorage.setItem("storedMonth", JSON.stringify(storedMonth))
    localStorage.setItem("storedDay", JSON.stringify(storedDay))
})