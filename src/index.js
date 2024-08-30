import './styles.css';

const weatherForm = document.getElementById('weather_form');
const cityInput = document.getElementById('city_name');
const img = document.getElementById('img_condition');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = cityInput.value.trim().toLowerCase();

    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?key=CDXBQ75CSMH2BRWZQM7WC9RFF`, { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            let address = data.address;
            address = address.charAt(0).toUpperCase() + address.slice(1);
            const description = data.description;
            const conditions = data.currentConditions.conditions;
            const temp = data.currentConditions.temp;
            const tempCelcius = Math.round((temp - 32)/(1.8));
            const feelslike = data.currentConditions.feelslike;
            const feelslikeCelcius = Math.round((feelslike - 32)/(1.8));
            
            console.log('Address:', address);
            console.log('Description:', description);
            console.log('Conditions:', conditions);
            console.log('Temperature:', tempCelcius);
            console.log('Feels like:', feelslikeCelcius);
            
        })

});