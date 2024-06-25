export async function fetchWeather(city) {
    const apiKey = '64f7899e611c4713983d9533e3b72973'
    const baseUrl = 'https://api.weatherbit.io/v2.0/current'
    const url = `${baseUrl}?key=${apiKey}&city=${city}`

    // Log the URL to verify it's correct
    console.log('Request URL:', url);

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`)
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching weather data:', error)
        throw error
    }
}
