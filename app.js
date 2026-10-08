// EXTERNAL APIS EXAMPLE

async function getWeather() {

  // Get city name from input
  let city = document.getElementById("city").value;

  // Check if city is empty
  if (!city) {
    alert("please enter a city");
    return;
  }

  // API URL
  let url = `https://wttr.in/${city}?format=j1`;

  // Send request to external API
  let response = await fetch(url);

  // Convert response into JSON
  let data = await response.json();

  // Get current weather
  let weather = data.current_condition[0];

  // Display weather
  document.getElementById("result").innerHTML = `
    <h2>${city}</h2>
    <p>Temperature: ${weather.temp_C} °C</p>
    <p>Feels Like: ${weather.FeelsLikeC} °C</p>
    <p>Humidity: ${weather.humidity}%</p>
  `;
}