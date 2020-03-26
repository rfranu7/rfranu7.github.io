//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//-----------------Trips Data---------------------

  const requestURL = 'https://rfranu7.github.io/project/objects/fulltrips.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const tripz = jsonObject['tripData'];

    for (let i = 0; i < tripz.length; i++ ) {

      const check = document.getElementById("trip" + [i])

      if (tripz.name = check){

      let div = document.createElement('div');

      let div2 = document.createElement('div');
      let h1 = document.createElement('h1');
      let desc = document.createElement('p');

      let div3 = document.createElement('div');
      let highlightTitle = document.createElement('h2');
      let highlight = document.createElement('ul');

      let div4 = document.createElement('div');

      let divPrice = document.createElement('div');
      let h2Price = document.createElement('h2');

      let divDate = document.createElement('div');
      let dateContainer = document.createElement('div');
      let h2Date = document.createElement('h2');

      let divOther = document.createElement('div');
      let otherContainer = document.createElement('div');
      let h2Other = document.createElement('h2');
      let age = document.createElement('p');
      let skill = document.createElement('p');
      let river = document.createElement('p');
      let accom = document.createElement('p');

      let div5 = document.createElement('div');
      let itineraryTitle = document.createElement('h2');
      let itiDiv = document.createElement('div');
      let itinerary = document.createElement('ul');

      let container1 = document.createElement('div');

      
      divPrice.appendChild(h2Price);
      dateContainer.setAttribute("class", "spans");
      divDate.appendChild(h2Date);
      divDate.appendChild(dateContainer);
      divOther.appendChild(h2Other);
      divOther.appendChild(otherContainer)

      for (let x = 0; x < tripz[i].bigImg.length; x++) {
         let image = document.getElementById('hero' + [x])
        image.setAttribute("src", "assets/" + tripz[i].bigImg[x]);
        image.setAttribute("alt", tripz[i].name);
      }

      h1.textContent = tripz[i].name;
      desc.textContent = tripz[i].desc;

      highlightTitle.textContent = "HIGHLIGHTS";
      for (let x = 0; x < tripz[i].highlight.length; x++) {

        let highlightItem = document.createElement('li');
        highlightItem.textContent = tripz[i].highlight[x];
        highlight.appendChild(highlightItem);
      }

      
      h2Price.textContent = "TRIPS & PRICING";
      for (let x = 0; x < tripz[i].long.length; x++) {

        let days = document.createElement('span');
        let price = document.createElement('span');
        let p = document.createElement('p');
        days.textContent = tripz[i].long[x] + " ";
        price.innerHTML = "<strong>$" + tripz[i].cost[x] + " </strong>";
        p.appendChild(days);
        p.appendChild(price);
        divPrice.appendChild(p);
      }

      h2Date.textContent = "DEPARTURE DATES";
      for (let x = 0; x < tripz[i].dates.length; x++) {

        
        let dates = document.createElement('span');
        dates.textContent = tripz[i].dates[x];
        dateContainer.appendChild(dates);
      }

      h2Other.textContent = "QUICK FACTS";
      age.innerHTML = "<strong> Minimum Age: </strong>" + tripz[i].minAge;
      skill.innerHTML = "<strong> Skill Level: </strong>" + tripz[i].skill;
      river.innerHTML = "<strong> River Rating: </strong>" + tripz[i].riverRate;
      accom.innerHTML = "<strong> Accomodation: </strong>" + tripz[i].accomodation;
      otherContainer.appendChild(age);
      otherContainer.appendChild(skill);
      otherContainer.appendChild(river);
      otherContainer.appendChild(accom);
      
      
      itineraryTitle.textContent = "ITINERARY";
      for (let x = 0; x < tripz[i].itinerary.length; x++) {

        let itineraryItem = document.createElement('li');
        itineraryItem.textContent = tripz[i].itinerary[x];
        itinerary.appendChild(itineraryItem);
      }

      div.setAttribute("class", "summary-data")
      div.appendChild(container1);
      container1.appendChild(div2);
      container1.appendChild(div3);
      container1.appendChild(div4);
      div.appendChild(div5);

      div2.appendChild(h1);
      div2.appendChild(desc);

      div3.appendChild(highlightTitle);
      div3.appendChild(highlight);

      div4.setAttribute("class", "details");
      div4.appendChild(divPrice);
      div4.appendChild(divDate);
      div4.appendChild(divOther);
      
      div5.setAttribute("class", "full")
      div5.appendChild(itineraryTitle);
      div5.appendChild(itiDiv);
      itiDiv.appendChild(itinerary)

      document.querySelector('section.trip-summary').appendChild(div);
    }
  }
  }
);