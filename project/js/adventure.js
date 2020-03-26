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
            div2.appendChild(btn);

            btn.classList.add("book-btn");
            
            document.querySelector('section.trips').appendChild(div);
    }

    for (let i = 0; i < trip.length; i++ ) {

      let div = document.createElement('div');

      let divImg = document.createElement('div');
      let image = document.createElement('img');

      let div2 = document.createElement('div');
      let h3 = document.createElement('h3');
      let desc = document.createElement('p');

      let div3 = document.createElement('div');
      let highlightTitle = document.createElement('h4');
      let highlight = document.createElement('ul');
      let highlightItem = document.createElement('li');

      let div5 = document.createElement('div');
      let itineraryTitle = document.createElement('h4');
      let itinerary = document.createElement('ul');
      let itineraryItem = document.createElement('li');


      image.setAttribute("src", "assets/" + trip[i].big-img);
      image.setAttribute("alt", trip[i].name);

      h3.textContent = trip[i].name;
      desc.textContent = trip[i].desc;

      highlightTitle.textContent = "HIGHLIGHTS";
      for (let x = 0; x < trip.highlight.length; x++){highlightItem.textContent = trip.highlight[x];}
      
      itineraryTitle.textContent = "ITINERARY";
      for (let x = 0; x < trip.itinerary.length; x++){itineraryItem.textContent = trip.itinerary[x];}

      div.appendChild(divImg);
      div.appendChild(div2);
      div.appendChild(div3);
      div.appendChild(div5);

      divImg.appendChild(image);

      div2.appendChild(h3);
      div2.appendChild(desc);

      div3.appendChild(highlightTitle);
      div3.appendChild(highlight);
      highlight.appendChild(highlightItem);
      
      div5.appendChild(itineraryTitle);
      div5.appendChild(itinerary);
      itinerary.appendChild(itineraryItem);

      document.querySelector('section.trips').appendChild(div);
    }
  }
);