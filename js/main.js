var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var d = new Date();
var dayName1 = d.toDateString();
var dayName2 = days[d.getDay() + 1];
var dayName3 = days[d.getDay() + 2];
document.getElementById("date1").innerHTML = dayName1;
document.getElementById("date2").innerHTML = dayName2;
document.getElementById("date3").innerHTML = dayName3;

const apiUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=13a2b57f294c40af9dd72429220607&days=7&q=";

var searchCity = document.getElementById("search");

var btn = document.getElementById("btn");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city);
  var data = await response.json();

  document.getElementById("city").innerHTML = data.location.name;
  document.getElementById("dayx").innerHTML =
    Number(data.current.temp_c) + " &#176C";
  document.getElementById("conditionx").innerHTML = data.current.condition.text;
  document.getElementById("imgx").src =
    "https://" + data.current.condition.icon;
  for (var i = 0; i < 2; i++) {
    document.getElementById("day" + (i + 1)).innerHTML =
      "H: " +
      Number(data.forecast.forecastday[i].day.maxtemp_c) +
      " &#176C" +
      "<br>" +
      "L: " +
      Number(data.forecast.forecastday[i].day.mintemp_c) +
      " &#176C";

    document.getElementById("img" + (i + 1)).src =
      "https://" + data.forecast.forecastday[i].day.condition.icon;

    document.getElementById("condition" + (i + 1)).innerHTML =
      data.forecast.forecastday[i].day.condition.text;
  }
}
btn.addEventListener("click", () => {
  checkWeather(search.value);
});

function defaultCity() {
  
    checkWeather("Dubai")
 
}











// Trying to get the location and send it as parameter




// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     document.getElementById("city").innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function showPosition(position) {
//   document.getElementById("city").innerHTML  = "Latitude: " + position.coords.latitude +
//   "<br>Longitude: " + position.coords.longitude;
// }





// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(showCity);
// } else {
//   console.log("Geolocation is not supported by this browser.");
// }

// // Then, pass the location coordinates to a Geocoding API to get the city name
// function showCity(position) {
//   const latitude = position.coords.latitude;
//   const longitude = position.coords.longitude;

//   // Make a request to a Geocoding API (e.g. Google Maps Geocoding API)
//   const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       // Parse the city name from the API response
//       const city = data.results[0].address_components.find((component) =>
//         component.types.includes("locality")
//       ).long_name;

//       console.log(`Your city is ${city}.`);
//     })
//     .catch((error) => console.log(error));
// }
