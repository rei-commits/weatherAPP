import { fetchWeather } from './modules/api.mjs';
import { displayForecast } from './modules/ui.mjs';

document.getElementById("fetchWeather").addEventListener("click", async () => {
    console.log("Button clicked")
    const city = document.getElementById("location").value.trim();

    if (!city) {
        console.error("Please enter a city");
        return;
    }

    try {
        const forecastData = await fetchWeather(city);
        displayForecast(forecastData);
    } catch (error) {
        console.error('Failed to fetch the forecast:', error);
    }
});
