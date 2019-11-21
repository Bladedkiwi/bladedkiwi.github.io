const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const condition = document.getElementById('condition').textContent = jsObject.weather[0].description;
        const temp = document.getElementById('temp').innerHTML = jsObject.main.temp;
        const humid = document.getElementById('humid').textContent = jsObject.main.humidity;
        const speed = document.getElementById('speed').innerHTML = jsObject.wind.speed;
    });
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        for (let i = 0; i < jsObject.list.length; i++) {
            if (jsObject.list[i] == jsObject.list[7]) {
                let iconsrc = 'https://openweathermap/img/w/' + jsObject.list[7].weather[0].icon + '.png';
                let iconalt = jsObject.list[7].weather[0].description;
                document.getElementById('high1').textContent = jsObject.list[7].main.temp_max;
                document.getElementById('low1').textContent = jsObject.list[7].main.temp_min;
                document.getElementById('icon1').setAttribute('src', iconsrc);
                document.getElementById('icon1').setAttribute('alt', iconalt);
             } 
             else if (jsObject.list[i] == jsObject.list[15]) {
                let iconsrc = 'https://openweathermap/img/w/' + jsObject.list[15].weather[0].icon + '.png';
                let iconalt = jsObject.list[15].weather[0].description;
                document.getElementById('high2').textContent = jsObject.list[15].main.temp_max;
                document.getElementById('low2').textContent = jsObject.list[15].main.temp_min;
                document.getElementById('icon2').setAttribute('src', iconsrc);
                document.getElementById('icon2').setAttribute('alt', iconalt);
             }
             else if (jsObject.list[i] == jsObject.list[23]){
                let iconsrc = 'https://openweathermap/img/w/' + jsObject.list[23].weather[0].icon + '.png';
                let iconalt = jsObject.list[23].weather[0].description;
                document.getElementById('high3').textContent = jsObject.list[23].main.temp_max;
                document.getElementById('low3').textContent = jsObject.list[23].main.temp_min;
                document.getElementById('icon3').setAttribute('src', iconsrc);
                document.getElementById('icon3').setAttribute('alt', iconalt);
             }
             else if (jsObject.list[i] == jsObject.list[31]){
                let iconsrc = 'https://openweathermap/img/w/' + jsObject.list[31].weather[0].icon + '.png';
                let iconalt = jsObject.list[31].weather[0].description;
                document.getElementById('high4').textContent = jsObject.list[31].main.temp_max;
                document.getElementById('low4').textContent = jsObject.list[31].main.temp_min;
                document.getElementById('icon4').setAttribute('src', iconsrc);
                document.getElementById('icon4').setAttribute('alt', iconalt);
             }
             else if (jsObject.list[i] == jsObject.list[39]){
                let iconsrc = 'https://openweathermap/img/w/' + jsObject.list[39].weather[0].icon + '.png';
                let iconalt = jsObject.list[39].weather[0].description;
                document.getElementById('high5').textContent = jsObject.list[39].main.temp_max;
                document.getElementById('low5').textContent = jsObject.list[39].main.temp_min;
                document.getElementById('icon5').setAttribute('src', iconsrc);
                document.getElementById('icon5').setAttribute('alt', iconalt);
             }
        }
        
    });
