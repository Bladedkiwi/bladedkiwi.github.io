const imagesAdded = ["../img/city1.jpg","../img/city2.jpg","../img/city3.jpg","../img/city4.jpg"];

picture = Math.floor(Math.random() * (0 - 4)) + 4;

document.getElementById('img-banner').src = imagesAdded[picture];