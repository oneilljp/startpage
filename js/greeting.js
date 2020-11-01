const time = new Date();
let hr = time.getHours();
let greeting = document.getElementById("greeting");
let punc = document.getElementById("punc");

let messages = [
  "Why Are You Awake ",
  "Good Morning, ",
  "Good Afternoon, ",
  "Good Evening, ",
  "What's Popping ",
];

if (hr > 0 && hr < 6) {
  greeting.innerHTML = messages[0];
  punc.innerHTML = "?";
} else if (hr < 12) {
  greeting.innerHTML = messages[1];
  punc.innerHTML = "!";
} else if (hr < 17) {
  greeting.innerHTML = messages[2];
  punc.innerHTML = "!";
} else if (hr < 22) {
  greeting.innerHTML = messages[3];
  punc.innerHTML = "!";
} else if (hr < 25) {
  greeting.innerHTML = messages[4];
  punc.innerHTML = "?";
}
