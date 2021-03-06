import { request } from './db.js';

window.onload = (event) => {
    console.log(event);
    const user = sessionStorage.getItem("uid");
    if (!user) {
        window.location.replace("login.html");
    }
};

console.log(window.document.body.children[1].children[1]);

const user = sessionStorage.getItem("uid");
request('get-booking', 'POST', {user})
.then((response) => {
    console.log(response);
    const parent = window.document.body.children[1].children[1];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]


    response.bookings.forEach(element => {
        var date = new Date(element.data.date);
        date.setHours(element.data.time.split(":")[0]);
        var time = element.data.time;

        const div = document.createElement('div');
        div.className = "booking";

        var services = "";
        element.data.services.forEach(function(i, idx, array){
            if (idx === array.length - 1){ 
                services += i;
            } else {
                services+= i+", ";
            }
         });
         

        div.innerHTML = "<p>"+services+"</p>"+
                        "<p>"+month[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()+" at "+time+"</p>";
        parent.appendChild(div);
    });
}).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error "+errorCode+": "+errorMessage);
});

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