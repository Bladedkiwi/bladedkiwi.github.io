const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        for (let i = 0; i< jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                let card = document.createElement('section');
                let image = document.createElement('img');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let iconsrc = 'https://openweathermap.org/img/wn/' + jsObject.list[i].weather[0].icon + '@2x' + '.png';
                let iconalt = jsObject.list[i].weather[0].description;
                let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                let d = new Date(jsObject.list[i].dt_txt);
                let nameOfDay = days[d.getDay()];
                let weekday = document.createElement('h3');

                weekday.textContent = nameOfDay;
                p1.textContent = 'High: ' +  jsObject.list[i].main.temp_max + '&#176;F';
                p2.textContent = 'Low: ' +  jsObject.list[i].main.temp_min + '&#176;F';
                image.setAttribute('src', iconsrc);
                image.setAttribute('alt', iconalt);
                
                card.appendChild(weekday);
                card.appendChild(image);
                card.appendChild(p1);
                card.appendChild(p2);

                document.querySelector('div.forecast').appendChild(card);
            }
        }
        
    });