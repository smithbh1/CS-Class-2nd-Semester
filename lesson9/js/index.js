const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    for (let i = 0; i < towns.length; i++ ) {
        let town = document.createElement('section');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p')
        let image = document.createElement('img')

        h2.textContent = towns[i].name;
        p.textContent = 'Year Founded ' + towns[i].yearFounded;
        p2.textContent = 'Motto: '+ towns[i].motto;
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt', towns[i].name);
        town.appendChild(h2);
        town.appendChild(p);
        town.appendChild(p2);
        town.appendChild(image);

        document.querySelector('div.town_info').appendChild(town);
    }

});