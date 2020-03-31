//----------------- Responsive Menu -----------------

const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//-----------------Lazy Loading------------------

const images = document.querySelectorAll("[data-src], [data-srcset]");

function preloadImage(img){ //substitutes the images
    const src = img.getAttribute("data-src");
    const srcset = img.getAttribute("data-srcset");
    if (!src) { 
        if (!srcset) { return; }
        img.srcset = srcset;
    }
    img.src = src;
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

//-----------------Trips Data---------------------

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
        let pic = document.createElement('picture');
        let src1 = document.createElement('source');
        let src2 = document.createElement('source');
        let image = document.createElement('img');
        let div3 = document.createElement('div');
        let name = document.createElement('h2');
        let cert = document.createElement('p');
        let year = document.createElement('p');
        let email = document.createElement('p');
        let quote = document.createElement('p');

        pic.appendChild(src1);
        pic.appendChild(src2);
        pic.appendChild(image);
        src1.setAttribute("media", "(max-width: 1550px)");
        src1.setAttribute("srcset", "assets/" + guide[i].photo);
        image.setAttribute("src", "assets/2-" + guide[i].photo);
        image.setAttribute("alt", "portrait of " + guide[i].name);

        name.textContent = guide[i].name;
        cert.textContent = guide[i].cert;
        year.textContent = guide[i].years;
        email.textContent = guide[i].email;
        quote.textContent = guide[i].desc;

        div1.setAttribute("class", "guideData")
        div1.appendChild(div2);
        div1.appendChild(div3);
        div2.appendChild(pic);
        div3.appendChild(name);
        div3.appendChild(cert);
        div3.appendChild(year);
        div3.appendChild(email);
        div3.appendChild(quote);

        document.querySelector("section.guides").appendChild(div1);

    }
});