function getWindChill(tempF,wSpeed) {
    if (tempF >= 50 && wSpeed <= 3){
        var computeWind = 35.74 + (.6215 * tempF) - 35.75 * Math.pow(wSpeed,.16) + (.4275 * tempF * Math.pow(wSpeed,.16));
        computeWind = (Math.floor(computeWind));
        return computeWind;
    } else {
        return 'N/A';
    }
}