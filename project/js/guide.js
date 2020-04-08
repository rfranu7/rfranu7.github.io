//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//-----------------Guide Data---------------------

  const requestURL = 'https://rfranu7.github.io/project/objects/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const guide = jsonObject['guides'];

    for (let i = 0; i < guide.length; i++ ) {

        let div1 = document.createElement('div');
        let div2 = document.createElement('div');
        let image = document.createElement('img');
        let div3 = document.createElement('div');
        let name = document.createElement('h2');
        let cert = document.createElement('p');
        let year = document.createElement('p');
        let email = document.createElement('p');
        let quote = document.createElement('p');

        image.setAttribute("src", "assets/" + guide[i].photo);
        image.setAttribute("alt", "portrait of " + guide[i].name);

        name.textContent = guide[i].name;
        cert.textContent = guide[i].cert;
        year.textContent = guide[i].years;
        email.textContent = guide[i].email;
        quote.textContent = guide[i].desc;

        div1.setAttribute("class", "guideData")
        div1.appendChild(div2);
        div1.appendChild(div3);
        div2.appendChild(image);
        div3.appendChild(name);
        div3.appendChild(cert);
        div3.appendChild(year);
        div3.appendChild(email);
        div3.appendChild(quote);

        document.querySelector("section.guides").appendChild(div1);

    }
});