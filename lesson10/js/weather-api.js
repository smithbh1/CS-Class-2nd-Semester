const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=a9e1088c2abdc1d253e3b98e33f19a7f"

fetch(apiURL)
    .then((response) => response.json())

    .then((jsonObject) => {

        console.log(jsonObject);

        document.querySelector("#desc").innerHTML = jsonObject.weather[0].description.toUpperCase();
        document.querySelector("#humidity").innerHTML = `${jsonObject.main.humidity}%`;
        document.querySelector("#tempF").innerHTML = jsonObject.main.temp;
        document.querySelector("#speed").innerHTML = jsonObject.wind.speed;
    });

const dailyURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=a9e1088c2abdc1d253e3b98e33f19a7f";


fetch(dailyURL)
  .then((response) => response.json())
  .then((jsonObject) => {
    const fiveDayForecast = jsonObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    const day_of_week = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"]
    //console.log(fiveDayForecast);
 
    fiveDayForecast.forEach(x => {
        let d = new Date(x.dt_txt);
        let card = document.createElement('div');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let image = document.createElement('img')
        const imgsrc = `https://openweathermap.org/img/w/${x.weather[0].icon}.png`;
        h3.textContent = day_of_week[d.getDay()];
        p.textContent = `${x.main.temp_max}\u00B0\F`
        image.setAttribute('src', imgsrc)
        image.setAttribute('alt', x.weather[0].description)
        card.appendChild(h3);
        card.appendChild(image);
        card.appendChild(p);
        
        document.querySelector('div.forecast').appendChild(card);

        
    })
});