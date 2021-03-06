
//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//-----------------Lazy Loading------------------

const images = document.querySelectorAll("[data-src]");

function preloadImage(img){ //substitutes the images
    const src = img.getAttribute("data-src");
    if (!src) { return; }
    img.src = src;
}

function removeImg(img){ //removes the data-src attribute so the blue effect in CSS will be removed
    img.removeAttribute("data-src");
}

const ImgOptions = {
    rootMargin: "0px 0px 100px 0px" 
};

const ImgObserver = new IntersectionObserver((entries, ImgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            ImgObserver.unobserve(entry.target);
            removeImg(entry.target);
        }
    });
}, ImgOptions);

images.forEach(image => {
    ImgObserver.observe(image);
})

//----------------- Popup Script -----------------

var day = new Date();
var today = day.getDay();

if(today == 5) {
	document.getElementById("popup").className = "show";
}

//----------------- Wind Chill Calculator -----------------

const tempF = parseFloat(document.getElementById("valHigh").textContent);
const speed = parseFloat(document.getElementById("valWind").textContent);

if (tempF < 51 && speed < 4){
	var chill = windChill(tempF, speed);
	document.getElementById('valChill').textContent = chill.toFixed(1); 
}
else {
	document.getElementById('valChill').textContent = "N/A";
	document.getElementById('windUnit').textContent = "";
}

function windChill (TempF, speed) {
	var speedPower = Math.pow(speed, 0.16);
	var windChillFactor = 35.74 + (0.6215 * TempF) - (35.75 * speedPower) + (0.4275 * TempF * speedPower);
	return windChillFactor;
}

//-----------------Weather Data------------------

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
	const weatherAPI = jsObject;

    document.getElementById('valCurrent').textContent = weatherAPI.weather[0].main;
    document.getElementById('valHigh').textContent = weatherAPI.main.temp_max.toFixed(1);
    document.getElementById('valHumid').textContent = weatherAPI.main.humidity;
	document.getElementById('valWind').textContent = weatherAPI.wind.speed;
	
  });

//-----------------Forecast Data------------------

const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	for (let i = 0; i < jsObject.list.length; i++ ){
		if (new Date(jsObject.list[i].dt_txt).getHours() == 18) {

			var forecastAPI = jsObject.list[i];
			
			let div1 = document.createElement('div');
			let div2 = document.createElement('div');
			let head = document.createElement('strong');
			let div3 = document.createElement('div');
			let image = document.createElement('img');
			let temp = document.createElement('p');

			const imageidentifier = forecastAPI.weather[0].main;
			if (imageidentifier == "Clear"){
				var imgSource = "assets/sunny.png";
			} 
			else if (imageidentifier == "Clouds"){
				var imgSource = "assets/cloud.png";
			}
			else if (imageidentifier == "Snow"){
				var imgSource = "assets/snow.png";
			}
			else if (imageidentifier == "Rain" || imageidentifier == "Drizzle"){
				var imgSource = "assets/rain.png";
			}
			else if (imageidentifier == "Thunderstorm"){
				var imgSource = "assets/thunderstorm.png";
			}
			else {
				var imgSource = "assets/mist.png"
			}


			head.textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()];
			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
			temp.innerHTML = forecastAPI.main.temp.toFixed(1) + " &#8457;";

			div1.appendChild(div2);
			div2.classList.add("Day");
			div2.appendChild(head);
			div3.classList.add("DayContent");
			div1.appendChild(div3);
			div3.appendChild(image);
			div3.appendChild(temp);

			document.querySelector('div.forecastTable').appendChild(div1);

		}
	}
  });

//-----------------Town Data---------------------

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if (towns[i].name == "Soda Springs"){       
			
			const town = towns[i];

			for (let x = 0; x < town.events.length; x++){

				const images = ["event1.jpg", "event2.jpg", "event3.jpg"]

				let div = document.createElement('div');
				let event = document.createElement('p');
				let image = document.createElement('img');

				div.appendChild(event);
				div.appendChild(image);

				event.textContent = town.events[x];
            	image.setAttribute('src', "assets/sodasprings-" + images[x]);
				image.setAttribute('alt', town.events[x] + ", " + town.name + ", Idaho");
				
				document.querySelector('div.events').appendChild(div);
			}

        }
    }
  });

//-----------------Footer Script-----------------

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let date = new Date();
let year = date.getFullYear();

let lastModify = new Date(document.lastModified);
let formattedDate = week[lastModify.getDay()] + ", " + lastModify.getDate() + " " + month[lastModify.getMonth()]+ " " + lastModify.getFullYear();

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModif").textContent = formattedDate;