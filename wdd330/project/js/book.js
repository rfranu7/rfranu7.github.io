import Calendar from "./calendar.js";
import { request } from './db.js';

// Onload Get the dates filled
const todayDate = new Date();
var year = todayDate.getFullYear();
var month = todayDate.getMonth();

// Initialize calendar
const calendar = new Calendar(month, year, todayDate);

window.onload =  async (e) => {
    console.log(e);
    const user = sessionStorage.getItem("uid");
    if (!user) {
        window.location.replace("login.html");
    }
    
    calendar.fillCalendar();

    document.querySelector('.prev').addEventListener("click", (e) => { 
        calendar.prevMonth();
    });
    
    document.querySelector('.next').addEventListener("click", (e) => { 
        calendar.nextMonth();
    });

    const timeButton = document.querySelectorAll('.timeslot>.btn-var');
    timeButton.forEach(element => {
        element.addEventListener("click", (e) => {
            timeButton.forEach(element => {
                element.classList.remove("selectedTime");
            });
            e.target.classList.add("selectedTime");
        });
    });

    const servicesButton = document.querySelectorAll('.service>.btn-var');
    servicesButton.forEach(element => {
        element.addEventListener("click", (e) => {
            e.target.classList.add("selectedService");
        });
    });
}

// Load modal for summary
var modal = document.getElementById("myModal");
var btn = document.getElementById("proceed");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    const month = new Date(document.getElementById("monthLabel").textContent);
    const day = document.querySelector('.selectedDay');
    const time = document.querySelector(".selectedTime");
    const services = document.querySelectorAll(".selectedService");

    if(typeof(day) == "undefined" || day == null) {
        alert("You have to select a day");
        return;
    }

    if(typeof(time) == "undefined" || time == null) {
        alert("You have to select a time");
        return;
    }

    if(typeof(services) == "undefined" || services == null) {
        alert("You have to select at least 1 service");
        return;
    }

    const addDay = day.textContent-1;
    const bookingDate = new Date(month.getFullYear(),month.getMonth(), month.getDate()+addDay);

    document.getElementById("modalActualDate").textContent = bookingDate.toDateString()+" at "+time.textContent;

    const parent = document.getElementById("serviceParent");
    var totalAmount = 0;
    var serviceList = [];
    services.forEach(service => {
        const name = service.dataset.name;
        const amount = service.dataset.amount;
        serviceList.push(name);
        totalAmount += parseInt(amount);

        const p = document.createElement('p');
        p.textContent = name;
        parent.appendChild(p);
    });

    document.getElementById("modalActualAmount").textContent = totalAmount;

    modal.style.display = "block";

    // Add the booking to Firebase
    var bookBtn = document.getElementById("book");
    bookBtn.addEventListener("click", (e) => {
        const user = sessionStorage.getItem("uid");

        const bookingData = {
            uid: user,
            services: serviceList,
            date: bookingDate,
            time: time.dataset["time"],
            amount:totalAmount,
            date_added: new Date(),
        };

        request('add-booking', 'POST', bookingData)
        .then((response) => {
            // Booking Successful
            alert(response.message);
            window.location.replace("index.html");
        })
        .catch((error) => {
            // Booking Successful
            console.log(error);
            var errorMessage = error.message;
            alert(errorMessage);
        });
    });
}

span.onclick = function() {
    modal.style.display = "none";
    removeService();
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        removeService();
    }
}

const signOutBtn = document.getElementById("signOut");
signOutBtn.addEventListener("click", (e) => {
    request('logout')
    .then(function() {
        // Sign-out successful.
        sessionStorage.removeItem("uid");
        window.location.replace("login.html");
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error "+errorCode+": "+errorMessage);
    });
});

function removeService(){
    const parent = document.getElementById("serviceParent");
    parent.innerHTML='';
}