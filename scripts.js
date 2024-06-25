import { fetchWeather } from './modules/api.js';
import { updateWeatherDisplay, displayError } from './modules/ui.js';

document.getElementById('search-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = document.getElementById('city-input').value;
  try {
    const weatherData = await fetchWeather(city);
    updateWeatherDisplay(weatherData);
  } catch (error) {
    displayError(error);
  }
});
