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


//Gets item from local storage 8am to save on refresh
function schduleFromStorage8() {
  var hour8 = localStorage.getItem('8');
  if (hour8) {
    $('#8 .description').val(hour8)

  }

}
schduleFromStorage8();


//Gets item from local storage 9am to save on refresh
function schduleFromStorage9() {
  var hour9 = localStorage.getItem('9');
  if (hour9) {
    $('#9 .description').val(hour9)

  }

}
schduleFromStorage9();


//Gets item from local storage 10am to save on refresh
function schduleFromStorage10() {
  var hour10 = localStorage.getItem('10');
  if (hour10) {
    $('#10 .description').val(hour10)

  }

}
schduleFromStorage10();


////Gets item from local storage 11am to save on refresh
function schduleFromStorage11() {
  var hour11 = localStorage.getItem('11');
  if (hour11) {
    $('#11 .description').val(hour11)

  }

}
schduleFromStorage11();


////Gets item from local storage 12pm to save on refresh
function schduleFromStorage12() {
  var hour12 = localStorage.getItem('12');
  if (hour12) {
    $('#12 .description').val(hour12)

  }

}
schduleFromStorage12();


//Gets item from local storage 1pm to save on refresh
function schduleFromStorage1() {
  var hour1 = localStorage.getItem('1');
  if (hour1) {
    $('#1 .description').val(hour1)

  }

}
schduleFromStorage1();


//Gets item from local storage 2pm to save on refresh
function schduleFromStorage2() {
  var hour2 = localStorage.getItem('2');
  if (hour2) {
    $('#2 .description').val(hour2)

  }

}
schduleFromStorage2();


//Gets item from local storage 3pm to save on refresh
function schduleFromStorage3() {
  var hour3 = localStorage.getItem('3');
  if (hour3) {
    $('#3 .description').val(hour3)

  }

}
schduleFromStorage3();


//Gets item from local storage 4pm to save on refresh
function schduleFromStorage4() {
  var hour4 = localStorage.getItem('4');
  if (hour4) {
    $('#4 .description').val(hour4)

  }

}
schduleFromStorage4();


//Gets item from local storage 5pm to save on refresh
function schduleFromStorage5() {
  var hour5 = localStorage.getItem('5');
  if (hour5) {
    $('#5 .description').val(hour5)

  }

}
schduleFromStorage5();


// Click even for all save buttons on page.
saveBtn.on('click', function (event) {
  //console.log("save your schdule", event.target)
  // console.log("save your schedule", $(this))
  //$('col-8 col-md-10 description').siblings(event)
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



