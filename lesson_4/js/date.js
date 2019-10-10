var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.write(days[d.getDay()] + ", ");
document.write(d.getDay() + " ");
document.write(month[d.getMonth()] + " ");
document.write(d.getFullYear());