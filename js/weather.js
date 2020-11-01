const temp = document.getElementsByClassName("temp")[0];
const icon = document.getElementsByClassName("wIcon")[0];
const local = document.getElementById("location");

const key = "4b327a74027202c40f62d93bacb789de";

// AA Coords
let loc = "Ann Arbor, MI:";
let latitude = 42.281422;
let longitude = -83.748482;

let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`;

console.log(api);

fetch(api)
  .then(function (response) {
    let data = response.json();
    return data;
  })
  .then(function (data) {
    console.log(data.main.temp);
    let temperature = Math.ceil(data.main.temp);
    temp.innerHTML = "  " + temperature + "&#176";
    icon.innerHTML = `<img src="icons/${data.weather[0].icon}.png" />`;
  });

let but = document.getElementsByClassName("weather")[0];

but.onclick = () => {
  if (loc == "Ann Arbor, MI:") {
    latitude = 42.815048;
    longitude = -85.707206;
    loc = "Byron Center, MI:";
  } else if (loc == "Byron Center, MI:") {
    latitude = 42.281422;
    longitude = -83.748482;
    loc = "Ann Arbor, MI:";
  }

  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=imperial`;
  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      console.log(data.main.temp);
      let temperature = Math.ceil(data.main.temp);
      temp.innerHTML = "  " + temperature + "&#176";
      icon.innerHTML = `<img src="icons/${data.weather[0].icon}.png" />`;
      local.innerHTML = loc;
    });
};
