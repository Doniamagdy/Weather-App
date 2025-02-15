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
var dayName2 = days[(d.getDay() + 1) % 7]; 
var dayName3 = days[(d.getDay() + 2) % 7];

document.getElementById("date1").innerHTML = dayName1;
document.getElementById("date2").innerHTML = dayName2;
document.getElementById("date3").innerHTML = dayName3;

const apiUrl =
  "https://api.weatherapi.com/v1/forecast.json?key=75239263496d44f188b103640250201&days=3&q=";

var searchCity = document.getElementById("search");
var btn = document.getElementById("btn");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city);
    var data = await response.json();

    document.getElementById("city").innerHTML = data.location.name;
    document.getElementById("dayx").innerHTML =
      Number(data.current.temp_c) + " &#176C";
    document.getElementById("conditionx").innerHTML = data.current.condition.text;
    document.getElementById("imgx").src = "https:" + data.current.condition.icon;

    // Loop for 3 days instead of 2
    for (var i = 0; i < 3; i++) {
      document.getElementById("day" + (i + 1)).innerHTML =
        "H: " +
        Number(data.forecast.forecastday[i].day.maxtemp_c) +
        " &#176C" +
        "<br>" +
        "L: " +
        Number(data.forecast.forecastday[i].day.mintemp_c) +
        " &#176C";

      document.getElementById("img" + (i + 1)).src =
        "https:" + data.forecast.forecastday[i].day.condition.icon;

      document.getElementById("condition" + (i + 1)).innerHTML =
        data.forecast.forecastday[i].day.condition.text;
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

btn.addEventListener("click", () => {
  checkWeather(searchCity.value);
});

function defaultCity() {
  checkWeather("Cairo");
}

window.onload = defaultCity;
