const API_KEY = "6a04f70e5d281902f24337d894e787d9";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather span:first-child");
      const location = document.querySelector(".weather span:last-child");
      const name = data.name;
      const loc = data.weather[0].main;
      weather.innerText = name;
      location.innerText = `loc / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("cant find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
