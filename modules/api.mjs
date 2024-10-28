const API_KEY = '45caab2a3ffe4b8b88b133845242810'; // Replace with API key

export async function fetchWeather(city) {
    const BASE_URL = 'http://api.weatherapi.com/v1/forecast.json';
    const url = `${BASE_URL}?key=${API_KEY}&q=${city}&q=New York &days=5&aqi=no&alerts=no'`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");
        return await response.json();
    } catch (error) {
        console.error("Fetch Error:", error.message);
        throw new Error(error.message);
    }
}
