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

