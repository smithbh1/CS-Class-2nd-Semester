const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=39.9755&lon=-111.7852&exclude=hourly,minutely&&units=imperial&appid=203769f34f142e8fa4a0874b34018fe7';

fetch (apiURL)
    .then((response) => response.json())
    
    .then((jsonObject) => {
        console.log(jsonObject);
        document.querySelector('#desc').innerHTML = jsonObject.current.weather[0].description.toUpperCase();
        document.querySelector('#tempF').innerHTML = jsonObject.current.temp;
        document.querySelector('#humidity').innerHTML = `Humidity: ${jsonObject.current.humidity}%`;
        /*if (jsonObject.current.alerts[0] == undefined){
            document.querySelector('#alerts').innerHTML = jsonObject.current.alerts[0].description;
        }*/
        const threeDayForecast = [jsonObject.daily[1], jsonObject.daily[2], jsonObject.daily[3]];
        const day_of_week = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"];

        threeDayForecast.forEach(x => {
            let d= new Date()

            let card = document.createElement('div');
            let h3 = document.createElement('h3');
            let p = document.createElement('p');
            
            h3.textContent = day_of_week[d.getDay()];
            p.textContent = `${x.temp.max}\u00B0\F`;
            card.appendChild(h3);
            card.appendChild(p);
        
            document.querySelector('div.forecast').append(card);

        })
    });

function disappear(){

    document.querySelector('#alerts').style.visibility = 'hidden';
}