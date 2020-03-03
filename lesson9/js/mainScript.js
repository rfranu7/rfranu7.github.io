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

        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){       

            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let motto = document.createElement('strong');
            let yearFound = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearFound.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;
            image.setAttribute('src', "assets/" + towns[i].photo);
            image.setAttribute('alt', towns[i].name);

            card.appendChild(h2);
            card.appendChild(motto);
            card.appendChild(yearFound);
            card.appendChild(population);
            card.appendChild(rainfall);
            card.appendChild(image);

            document.querySelector('div.cards').appendChild(card);
        }
    }
  });

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
    rootMargin: "0px 0px -300px 0px" 
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

//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//-----------------Footer Script-----------------

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let date = new Date();
let year = date.getFullYear();
// let lastModify = document.lastModified;

let lastModify = new Date(document.lastModified);
let formattedDate = week[lastModify.getDay()] + ", " + lastModify.getDate() + " " + month[lastModify.getMonth()]+ " " + lastModify.getFullYear();

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModif").textContent = formattedDate;