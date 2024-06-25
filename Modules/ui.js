export function updateWeatherDisplay(weatherData) {
  const weatherDisplay = document.getElementById('weather-container');
  weatherDisplay.innerHTML = `
    <h2>Weather in ${weatherData.data[0].city_name}</h2>
    <p>Temperature: ${weatherData.data[0].temp}°C</p>
    <p>Weather: ${weatherData.data[0].weather.description}</p>
  `;
}

export function displayError(error) {
  const errorDisplay = document.getElementById('error-display');
  if (errorDisplay) {
    errorDisplay.innerText = `Error: ${error.message}`;
  } else {
    console.error('Error display element not found');
  }
}
