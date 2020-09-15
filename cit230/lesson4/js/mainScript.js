const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

//const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let date = new Date();
let year = date.getFullYear();
let lastModify = document.lastModified;

// let lastModify = new Date(document.lastModified);
// let formattedDate = month[lastModify.getMonth()]+ " " + lastModify.getDate() + ", " + lastModify.getFullYear() + " " + lastModify.getHours() + ":" + lastModify.getMinutes();

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModif").textContent = lastModify;