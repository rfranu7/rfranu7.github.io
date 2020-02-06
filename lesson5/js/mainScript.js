const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
	document.getElementsByClassName("navBar")[0].classList.toggle("responsive");
};

var day = new Date();
var today = day.getDay();

if(today == 5) {
	document.getElementById("popup").className = "show";
}

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let date = new Date();
let year = date.getFullYear();
// let lastModify = document.lastModified;

let lastModify = new Date(document.lastModified);
let formattedDate = week[lastModify.getDay()] + ", " + lastModify.getDate() + " " + month[lastModify.getMonth()]+ " " + lastModify.getFullYear();

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModif").textContent = formattedDate;