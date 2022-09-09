function formatDate(current) {
let hours = now.getHours();
let minutes = now.getMinutes();
let h1 = document.querySelector("h1");
h1.innerHTML = '${hours},:, ${minutes}';
let year = now.getFullYear();
let date = now.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = now.getMonth(); // 0 and 11
let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; // o and 6
let day = days[now.getDay()];
let h2 = document.querySelector("h2");
h2.innerHTML = '${date} ${month} ${year} ${day}';
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  console.log(searchInput.value);
  let h3 = document.querySelector("h3");
  h3.innerHTML = '${searchInput.value}'
}
function convertToFahrenheit(event) {
event.preventDefault();
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = 70;
}
function convertToCelsius(event) {
event.preventDefault();
let temperatureElement = document.querySelector("#temperature");
temperatureElement.innerHTML = 21;

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
 }
  
 function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
 }
  
 function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
 }
  
 function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(displayWeatherCondition);
 }
  
 function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
 }
  
 let dateElement = document.querySelector("#date");
 let currentTime = new Date();
 dateElement.innerHTML = formatDate(currentTime);
  
 let searchForm = document.querySelector("#search-form");
 searchForm.addEventListener("submit", handleSubmit);
let currentLocationButton = document.querySelector("#current-location-button");
 currentLocationButton.addEventListener("click", getCurrentLocation);
 searchCity(city);