const requestURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=b39d7e37ad7adddfe22206d8866ff4fb"
fetch(requestURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        //make an icon image url and grab the alt for it
        const imgsrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const imgalt = jsObject.weather[0].description;
        //display those objects
        document.getElementById('imagesrc').textContent = imgsrc;
        document.getElementById('icon').setAttribute('src', imgsrc);
        document.getElementById('icon').setAttribute('alt', imgalt);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
    });

    