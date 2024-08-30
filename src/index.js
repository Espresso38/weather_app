import './styles.css';

const weatherForm = document.getElementById('weather_form');
const cityInput = document.getElementById('city_name');
const weatherDiv = document.getElementById('weather_info');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = cityInput.value.trim().toLowerCase();

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=CDXBQ75CSMH2BRWZQM7WC9RFF`, { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            let address = data.address.charAt(0).toUpperCase() + data.address.slice(1);
            const description = data.description;
            const conditions = data.currentConditions.conditions;
            const temp = data.currentConditions.temp;
            const tempCelsius = Math.round((temp - 32) / 1.8);
            const feelslike = data.currentConditions.feelslike;
            const feelslikeCelsius = Math.round((feelslike - 32) / 1.8);

            console.log('Address:', address);
            console.log('Description:', description);
            console.log('Conditions:', conditions);
            console.log('Temperature (Celsius):', tempCelsius);
            console.log('Feels like (Celsius):', feelslikeCelsius);

            weatherDiv.innerHTML = `
                <h2>Weather for ${address}</h2>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Conditions:</strong> ${conditions}</p>
                <p><strong>Temperature:</strong> ${tempCelsius}°C</p>
                <p><strong>Feels like:</strong> ${feelslikeCelsius}°C</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            weatherDiv.innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
        });
});