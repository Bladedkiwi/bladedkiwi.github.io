
var tempF = parseFloat(document.getElementById('temp').textContent);
var wSpeed = parseFloat(document.getElementById('speed').textContent);
var computeWind = 35.74 + (.6215 * tempF) - 35.75 * Math.pow(wSpeed,.16) + (.4275 * tempF * Math.pow(wSpeed,.16));
computeWind = (Math.floor(computeWind));
document.getElementById('chill').textContent = computeWind;
