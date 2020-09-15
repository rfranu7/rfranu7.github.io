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

document.getElementById("currentYear").textContent = year;