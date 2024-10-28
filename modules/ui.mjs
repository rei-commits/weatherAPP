export function displayForecast(forecastData) {
    const forecastContainer = document.getElementById("forecast");
    forecastContainer.innerHTML = ""; // Clear previous forecast

    // Loop through each day in the forecast
    forecastData.forecast.forecastday.forEach(day => {
        const date = day.date;
        const condition = day.day.condition.text;
        const maxTemp = Math.round(day.day.maxtemp_f); // Use Fahrenheit
        const minTemp = Math.round(day.day.mintemp_f); // Use Fahrenheit
        const iconUrl = day.day.condition.icon;

        const weatherDayElement = document.createElement("div");
        weatherDayElement.classList.add("weather-day");
        weatherDayElement.innerHTML = `
            <img src="https:${iconUrl}" alt="${condition}" class="weather-icon">
            <div class="weather-info">
                <p>${date}</p>
                <p>${condition}</p>
                <p>Max Temp: ${maxTemp}°F</p>
                <p>Min Temp: ${minTemp}°F</p>
            </div>
        `;

        forecastContainer.appendChild(weatherDayElement);
    });
}
