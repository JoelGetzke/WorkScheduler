// query selectors for save button, timedisplay, textArea
var timeDisplay = $('#currentDay');
var saveBtn = $(".saveBtn");
var textedArea = $("#textArea");




// dayjs for our current 
function displayTime() {
  var time = dayjs().format('hh:mm:ss');
  $('#currentTime').text(time);
}
//dayJs for our current Date
displayTime()


function displayDate() {
  var date = dayjs().format('dddd, MMM DD, YYYY');
  timeDisplay.text(date);
}
displayDate()

function getCurrentHour() {
var currentDate = new Date()
var currentHour = currentDate.getHours();
return currentHour

}
console.log(getCurrentHour());

//18 < 8                   //6:00
if (getCurrentHour() >= 18) {
  $(".time-block").addClass("past")
} else if (getCurrentHour() < 8) { 
  $(".time-block").addClass("past")
  
} else { 
  $(".time-block").addClass("past")
 
  // Equivalent: $("#hour-15") if your computer is at 3pm
  $("#hour-" + getCurrentHour()).removeClass("past").addClass("present")

  for( i = (getCurrentHour() + 1) ; i <= 17; i++) {
    // i = 16 / 4pm
    $("#hour-" + i).removeClass("past").addClass("future")
  }
}



//Gets item from local storage 8am to save on refresh
function schduleFromStorage8() {
  var hour8 = localStorage.getItem('hour-8');
  if (hour8) {
    $('#hour-8 .description').val(hour8)

  }

}
schduleFromStorage8();


//Gets item from local storage 9am to save on refresh
function schduleFromStorage9() {
  var hour9 = localStorage.getItem('hour-9');
  if (hour9) {
    $('#hour-9 .description').val(hour9)

  }

}
schduleFromStorage9();


//Gets item from local storage 10am to save on refresh
function schduleFromStorage10() {
  var hour10 = localStorage.getItem('hour-10');
  if (hour10) {
    $('#hour-10 .description').val(hour10)

  }

}
schduleFromStorage10();


////Gets item from local storage 11am to save on refresh
function schduleFromStorage11() {
  var hour11 = localStorage.getItem('hour-11');
  if (hour11) {
    $('#hour-11 .description').val(hour11)

  }

}
schduleFromStorage11();


////Gets item from local storage 12pm to save on refresh
function schduleFromStorage12() {
  var hour12 = localStorage.getItem('hour-12');
  if (hour12) {
    $('#hour-12 .description').val(hour12)

  }

}
schduleFromStorage12();


//Gets item from local storage 1pm to save on refresh
function schduleFromStorage13() {
  var hour13 = localStorage.getItem('hour-13');
  if (hour13) {
    $('#hour-13 .description').val(hour13)

  }

}
schduleFromStorage13();


//Gets item from local storage 2pm to save on refresh
function schduleFromStorage14() {
  var hour14 = localStorage.getItem('hour-14');
  if (hour14) {
    $('#hour-14 .description').val(hour14)

  }

}
schduleFromStorage14();


//Gets item from local storage 3pm to save on refresh
function schduleFromStorage15() {
  var hour15 = localStorage.getItem('hour-15');
  if (hour15) {
    $('#hour-15 .description').val(hour15)

  }

}
schduleFromStorage15();


//Gets item from local storage 4pm to save on refresh
function schduleFromStorage16() {
  var hour16 = localStorage.getItem('hour-16');
  if (hour16) {
    $('#hour-16 .description').val(hour16)

  }

}
schduleFromStorage16();


//Gets item from local storage 5pm to save on refresh
function schduleFromStorage17() {
  var hour17 = localStorage.getItem('hour-17');
  if (hour17) {
    $('#hour-17 .description').val(hour17)

  }

}
schduleFromStorage17();










// Click even for all save buttons on page.
saveBtn.on('click', function (event) {
 
  var textDescription = $(this).siblings(".description").val()
  console.log(textDescription);
  var timeBlock = $(this).parent().attr("id")
  console.log(timeBlock);
  localStorage.setItem(timeBlock, textDescription);
});














// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

})
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



