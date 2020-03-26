//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//-----------------Current Weather Data---------------------

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4092267&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
    const weatherAPI = jsObject;
    
    let current = document.createElement('div');

    let div = document.createElement('div');
    let h4 = document.createElement('h4');

    let div2 = document.createElement('div');
    let temp = document.createElement('strong');
    let weather = document.createElement('p');

    let div3 = document.createElement('div');
    let feel = document.createElement('p');
    let high = document.createElement('span');
    let buf = document.createElement('span');
    let low = document.createElement('span');

    current.appendChild(div);
    current.appendChild(div2);
    current.appendChild(div3);
    current.classList.add("weather-data");

    h4.textContent = "CURRENT";
    div.appendChild(h4);

    temp.innerHTML = weatherAPI.main.temp.toFixed(0) + "&#8457;";
    weather.textContent = weatherAPI.weather[0].main;
    div2.appendChild(temp);
    div2.appendChild(weather);
    
    feel.innerHTML = "Feels like " + weatherAPI.main.feels_like.toFixed(1) + "&#8457;";
    high.innerHTML = "H " + weatherAPI.main.temp_max.toFixed(1) + "&#8457;";
    buf.textContent = " / "
    low.innerHTML = "L " + weatherAPI.main.temp_min.toFixed(1) + "&#8457;";
    div3.appendChild(feel);
    div3.appendChild(high);
    div3.appendChild(buf);
    div3.appendChild(low);

    document.querySelector('section.weather').appendChild(current);
    
  });

//-----------------Forecast - 1 - Data------------------

const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=4092267&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    var today = new Date();var today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    var nextDay = new Date(tomorrow)
    nextDay.setDate(nextDay.getDate() + 1);

    const dayOfWeek = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

	for (let i = 0; i < jsObject.list.length; i++ ){

        var weatherDate = new Date(jsObject.list[i].dt_txt);

		if (weatherDate.getHours() == 12 && weatherDate.getDate() == today.getDate()) {

			var forecastAPI = jsObject.list[i];
			
            let todayTitle = document.createElement('div');

            let div = document.createElement('div');
            let h4 = document.createElement('h4');
            let weather = document.createElement('p');

			let image = document.createElement('img');
            let div2 = document.createElement('div');

            let div3 = document.createElement('div');
            let max = document.createElement('p');
            let high = document.createElement('strong');

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

            todayTitle.appendChild(div);
            todayTitle.appendChild(div2);
            todayTitle.appendChild(div3);
            todayTitle.classList.add("weather-data");

            h4.textContent = "TODAY";
            weather.textContent = forecastAPI.weather[0].main;
            div.appendChild(h4);
            div.appendChild(weather);

			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
            div2.appendChild(image);
            
            max.textContent = "MAX"
            high.innerHTML = forecastAPI.main.temp_max.toFixed(0) + "&#8457;";
            div3.appendChild(high);

            document.querySelector('section.weather').appendChild(todayTitle);

		}
        
        else if (weatherDate.getHours() == 18 && weatherDate.getDate() == today.getDate()) {

			var forecastAPI = jsObject.list[i];
			
            let todayTitle = document.createElement('div');

            let div = document.createElement('div');
            let h4 = document.createElement('h4');
            let weather = document.createElement('p');

			let image = document.createElement('img');
            let div2 = document.createElement('div');

            let div3 = document.createElement('div');
            let max = document.createElement('p');
            let high = document.createElement('strong');

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

            todayTitle.appendChild(div);
            todayTitle.appendChild(div2);
            todayTitle.appendChild(div3);
            todayTitle.classList.add("weather-data");

            h4.textContent = "TONIGHT";
            weather.textContent = forecastAPI.weather[0].main;
            div.appendChild(h4);
            div.appendChild(weather);

			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
            div2.appendChild(image);
            
            max.textContent = "MIN"
            high.innerHTML = forecastAPI.main.temp_min.toFixed(0) + "&#8457;";
            div3.appendChild(high);

            document.querySelector('section.weather').appendChild(todayTitle);

        }
        
        else if (weatherDate.getHours() == 12 && weatherDate.getDate() == tomorrow.getDate()) {

			var forecastAPI = jsObject.list[i];
			
            let todayTitle = document.createElement('div');

            let div = document.createElement('div');
            let h4 = document.createElement('h4');
            let weather = document.createElement('p');

			let image = document.createElement('img');
            let div2 = document.createElement('div');

            let div3 = document.createElement('div');
            let max = document.createElement('p');
            let high = document.createElement('strong');

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

            todayTitle.appendChild(div);
            todayTitle.appendChild(div2);
            todayTitle.appendChild(div3);
            todayTitle.classList.add("weather-data");

            h4.textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()];
            weather.textContent = forecastAPI.weather[0].main;
            div.appendChild(h4);
            div.appendChild(weather);

			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
            div2.appendChild(image);
            
            max.textContent = "MAX"
            high.innerHTML = forecastAPI.main.temp_max.toFixed(0) + "&#8457;";
            div3.appendChild(high);

            document.querySelector('section.weather').appendChild(todayTitle);

        }
        
        else if (weatherDate.getHours() == 18 && weatherDate.getDate() == tomorrow.getDate()) {

			var forecastAPI = jsObject.list[i];
			
            let todayTitle = document.createElement('div');

            let div = document.createElement('div');
            let h4 = document.createElement('h4');
            let weather = document.createElement('p');

			let image = document.createElement('img');
            let div2 = document.createElement('div');

            let div3 = document.createElement('div');
            let max = document.createElement('p');
            let high = document.createElement('strong');

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

            todayTitle.appendChild(div);
            todayTitle.appendChild(div2);
            todayTitle.appendChild(div3);
            todayTitle.classList.add("weather-data");

            h4.textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()] + " NIGHT";
            weather.textContent = forecastAPI.weather[0].main;
            div.appendChild(h4);
            div.appendChild(weather);

			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
            div2.appendChild(image);
            
            max.textContent = "MIN"
            high.innerHTML = forecastAPI.main.temp_max.toFixed(0) + "&#8457;";
            div3.appendChild(high);

            document.querySelector('section.weather').appendChild(todayTitle);

        }
        
        else if (weatherDate.getHours() != 12 && weatherDate.getDate() != today.getDate()) {
        
        if (weatherDate.getHours() == 12 && weatherDate.getDate() == nextDay.getDate()) {

			var forecastAPI = jsObject.list[i];
			
            let todayTitle = document.createElement('div');

            let div = document.createElement('div');
            let h4 = document.createElement('h4');
            let weather = document.createElement('p');

			let image = document.createElement('img');
            let div2 = document.createElement('div');

            let div3 = document.createElement('div');
            let max = document.createElement('p');
            let high = document.createElement('strong');

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

            todayTitle.appendChild(div);
            todayTitle.appendChild(div2);
            todayTitle.appendChild(div3);
            todayTitle.classList.add("weather-data");

            h4.textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()];
            weather.textContent = forecastAPI.weather[0].main;
            div.appendChild(h4);
            div.appendChild(weather);

			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
            div2.appendChild(image);
            
            max.textContent = "MAX"
            high.innerHTML = forecastAPI.main.temp_max.toFixed(0) + "&#8457;";
            div3.appendChild(high);

            document.querySelector('section.weather').appendChild(todayTitle);

        }
        }
	}
});

//-----------------Trips Data---------------------

const requestURL = 'https://rfranu7.github.io/project/objects/trips.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const trip = jsonObject['trips'];

    for (let i = 0; i < trip.length; i++ ) {

            let div = document.createElement('div');

            let divImg = document.createElement('div');
            let image = document.createElement('img');

            let div2 = document.createElement('div');
            let h3 = document.createElement('h3');
            let desc = document.createElement('p');
            let link = document.createElement('a');
            let btn = document.createElement('button');

            image.setAttribute("src", "assets/" + trip[i].photo);
            image.setAttribute("alt", trip[i].name);

            h3.textContent = trip[i].name;
            desc.textContent = trip[i].desc;
            btn.textContent = "LEARN MORE";


            div.appendChild(divImg);
            div.appendChild(div2);
            div.classList.add("trip-data");

            divImg.appendChild(image);

            div2.appendChild(h3);
            div2.appendChild(desc);
            div2.appendChild(link);

            link.appendChild(btn);
            btn.classList.add("book-btn");
            link.setAttribute("href", "adventures" +[i]+ ".html")
            
            document.querySelector('section.trips').appendChild(div);
        }
    }
  );

  //-----------------Lazy Loading------------------

const images = document.querySelectorAll("[data-src]");

function preloadImage(img){ //substitutes the images
    const src = img.getAttribute("data-src");
    const srcset = img.getAttribute("data-srcset");
    if (!src) { return; }
    img.src = src;
    if (!srcset) { return; }
    img.srcset = srcset;
}

function removeImg(img){ //removes the data-src attribute so the blue effect in CSS will be removed
    img.removeAttribute("data-src");
    img.removeAttribute("data-srcset");
}

const ImgOptions = {
    rootMargin: "0px 0px -100px 0px" 
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
  
  //-----------------Footer Script-----------------

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let date = new Date();
let year = date.getFullYear();

document.getElementById("currentYear").textContent = year;