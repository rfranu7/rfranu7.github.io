//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

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
            btn.textContent = "Explore";


            div.appendChild(divImg);
            div.appendChild(div2);
            div.classList.add("trip-data");

            divImg.appendChild(image);

            div2.appendChild(h3);
            div2.appendChild(desc);
            div2.appendChild(link);

            link.appendChild(btn);
            btn.classList.add("book-btn");
            link.setAttribute("href", "adventures-trip-number" +[i+1]+ ".html")
            
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
  
  //-----------------Footer Script-----------------

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let date = new Date();
let year = date.getFullYear();

document.getElementById("currentYear").textContent = year;