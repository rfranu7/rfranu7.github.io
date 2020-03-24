//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//-----------------Trips Data---------------------

const requestURL = 'https://rfranu7.github.io/objects/trip.json';

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
            let btn = document.createElement('button');

            image.setAttribute("src", "assets/" + trip[i].photo);
            image.setAttribute("alt", trip[i].name);

            h3.textContent = trip[i].name;
            desc.textContent = trip[i].desc;
            btn.textContent = "BOOK NOW";


            div.appendChild(divImg);
            div.appendChild(div2);

            divImg.appendChild(image);

            div2.appendChild(h3);
            div2.appendChild(desc);
            div2.appendChild(btn);

            btn.classList.add("book-btn");
            
            document.querySelector('div.trips').appendChild(div);
        }
    }
  );
