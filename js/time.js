const docHour = document.getElementsByClassName("hour")[0];
const docMins = document.getElementsByClassName("minute")[0];
const docAm = document.getElementsByClassName("ampm")[0];

let mytime = new Date();
let hour = mytime.getHours();
let mins = mytime.getMinutes();
let ampm = "";

console.log(docHour);
docHour.innerHTML = hour;
docMins.innerHTML = mins;
docAm.innerHTML = ampm;

setInterval(() => {
  mytime = new Date();
  hour = mytime.getHours();
  mins = mytime.getMinutes();
  if (mins < 10) {
    mins = `0${mins}`;
  }

  if (hour == 12) {
    ampm = "PM";
  } else if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  } else if (hour == 0) {
    hour = 12;
    ampm = "AM";
  } else {
    ampm = "AM";
  }

  docHour.innerHTML = hour;
  docMins.innerHTML = mins;
  docAm.innerHTML = ampm;
}, 1000);
