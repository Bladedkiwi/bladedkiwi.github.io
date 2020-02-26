const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const tempF = jsObject.main.temp;
        const wSpeed = jsObject.wind.speed;
        const windChill = getWindChill(tempF,wSpeed);
        document.getElementById('condition').textContent = jsObject.weather[0].description;
        document.getElementById('humid').textContent = Math.floor(jsObject.main.humidity);
        document.getElementById('temp').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('speed').textContent = Math.floor(jsObject.wind.speed);
        document.getElementById('chill').textContent = windChill;

    });
