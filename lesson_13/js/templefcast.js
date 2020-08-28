/*
5780993 Salt Lake
5780993 Nauvoo
5774001 Draper
5844096 American Fork
*/

const saltLakeURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(saltLakeURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const tempF = jsObject.main.temp;
        const wSpeed = jsObject.wind.speed;
        const windChill = getWindChill(tempF,wSpeed);
        document.getElementById('salt-cond').textContent = jsObject.weather[0].description;
        document.getElementById('salt-humid').textContent = Math.floor(jsObject.main.humidity);
        document.getElementById('salt-temp').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('salt-speed').textContent = Math.floor(jsObject.wind.speed);
        document.getElementById('salt-feels').textContent = Math.floor(jsObject.main.feels_like);
        document.getElementById('salt-chill').textContent = windChill;

    });
    const nauvooURL = "https://api.openweathermap.org/data/2.5/weather?id=5780993&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(nauvooURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const tempF = jsObject.main.temp;
        const wSpeed = jsObject.wind.speed;
        const windChill = getWindChill(tempF,wSpeed);
        document.getElementById('nauv-cond').textContent = jsObject.weather[0].description;
        document.getElementById('nauv-humid').textContent = Math.floor(jsObject.main.humidity);
        document.getElementById('nauv-temp').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('nauv-speed').textContent = Math.floor(jsObject.wind.speed);
        document.getElementById('nauv-feels').textContent = Math.floor(jsObject.main.feels_like);
        document.getElementById('nauv-chill').textContent = windChill;

    });
    const draperURL = "https://api.openweathermap.org/data/2.5/weather?id=5774001&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(draperURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const tempF = jsObject.main.temp;
        const wSpeed = jsObject.wind.speed;
        const windChill = getWindChill(tempF,wSpeed);
        document.getElementById('drap-cond').textContent = jsObject.weather[0].description;
        document.getElementById('drap-humid').textContent = Math.floor(jsObject.main.humidity);
        document.getElementById('drap-temp').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('drap-speed').textContent = Math.floor(jsObject.wind.speed);
        document.getElementById('drap-feels').textContent = Math.floor(jsObject.main.feels_like);
        document.getElementById('drap-chill').textContent = windChill;

    });
    const timpanogosURL = "https://api.openweathermap.org/data/2.5/weather?id=5844096&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(timpanogosURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const tempF = jsObject.main.temp;
        const wSpeed = jsObject.wind.speed;
        const windChill = getWindChill(tempF,wSpeed);
        document.getElementById('timp-cond').textContent = jsObject.weather[0].description;
        document.getElementById('timp-humid').textContent = Math.floor(jsObject.main.humidity);
        document.getElementById('timp-temp').textContent = Math.floor(jsObject.main.temp);
        document.getElementById('timp-speed').textContent = Math.floor(jsObject.wind.speed);
        document.getElementById('timp-feels').textContent = Math.floor(jsObject.main.feels_like);
        document.getElementById('timp-chill').textContent = windChill;

    });