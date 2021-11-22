$(document).ready(function () {

let currentMoment = moment().format("MMMM Do YYYY");
let displayDate = document.getElementById("currentDay");
displayDate.innerHTML = currentMoment;
let currentHour = moment().format("HH");

// Find Current time
$(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

// Saves to Local Storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
});

// Returns Local Storage
$("#hour-09 .time-block").val(localStorage.getItem("09"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));
});

// I want to have an "endOfDay" function that would clear local storage after hitting #hour-18 but did not have time