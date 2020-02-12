//----------------- Wind Chill Calculator -----------------

var tempC = document.getElementById("valHigh").innerHTML;
var speed = document.getElementById("valWind").innerHTML;

// Convert Celsius to Fahrenheit

var tempF = (tempC * 9 /5) + 32;

// Calculate Wind chill

var chill = windChill(tempF, speed);
// var chillRound = Math.round(chill * 100) / 100; [commented out. use if given value is Fahrenheit]

// Convert back to Celsius

var chillC = (chill - 32) * 5/9;
var chillRound = Math.round(chillC * 100) / 100;
        
document.getElementById('valChill').innerHTML = chillRound;

function windChill (TempF, speed) {
	var speedPower = Math.pow(speed, 0.16);
	var windChillFactor = 35.74 + (0.6215 * TempF) - (35.75 * speedPower) + (0.4275 * TempF * speedPower);
	return windChillFactor;
}