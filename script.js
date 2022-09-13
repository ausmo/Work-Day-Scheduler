let time = moment();
$("#currentDay").text(time.format("MMMM Do YYYY, h:mm:ss a"));

function setTime() {
  let timeInterval = setInterval(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  }, 1000);
}
setTime();

$(".saveBtn").on("click", function () {
  let text = $(this).siblings("textarea").val();
  let time = $(this).siblings("div").text();
  localStorage.setItem(time, text);
  console.log(text);
});

$("#hour09").text(localStorage.getItem("09"));
$("#hour10").text(localStorage.getItem("10"));
$("#hour11").text(localStorage.getItem("11"));
$("#hour12").text(localStorage.getItem("12"));
$("#hour13").text(localStorage.getItem("13"));
$("#hour14").text(localStorage.getItem("14"));
$("#hour15").text(localStorage.getItem("15"));
$("#hour16").text(localStorage.getItem("16"));
$("#hour17").text(localStorage.getItem("17"));

let currentHour = moment().hour();
console.log(currentHour);

$(".textBlock").each(function () {
  let timeBlockHour = parseInt($(this).attr("id"));
  console.log(timeBlockHour);
  if (timeBlockHour === currentHour) {
    $(this.children[1]).addClass("present");
  } else if (timeBlockHour > currentHour) {
    $(this.children[1]).addClass("future");
  } else {
    $(this.children[1]).addClass("past");
  }
});
