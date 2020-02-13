//----------------- Wind Chill Calculator -----------------

var tempC = document.getElementById("valHigh").textContent;
var speed = document.getElementById("valWind").textContent;

// Convert Celsius to Fahrenheit

var tempF = (tempC * 9 /5) + 32;

// Calculate Wind chill

var chill = windChill(tempF, speed);

// Convert back to Celsius

var chillC = (chill - 32) * 5/9;
        
document.getElementById('valChill').textContent = chillC.toFixed(1);

function windChill (TempF, speed) {
	var speedPower = Math.pow(speed, 0.16);
	var windChillFactor = 35.74 + (0.6215 * TempF) - (35.75 * speedPower) + (0.4275 * TempF * speedPower);
	return windChillFactor;
}