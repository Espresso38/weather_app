import './styles.css'

fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?key=CDXBQ75CSMH2BRWZQM7WC9RFF', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const description = response.description;
        const conditions = response.currentConditions.conditions;
        const temp = response.currentConditions.temp;
        const feelslike = response.currentConditions.feelslike;
        console.log(description, conditions, temp, feelslike);
    });