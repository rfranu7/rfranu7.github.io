import { request } from './db.js';

const loginForm = document.getElementById("loginForm");
const registerLink = document.getElementById("registerBtn");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const userData = {
        email: email.value,
        password: password.value,
    };

    request('login', 'POST', userData)
    .then((response) => {
        // Signed in
        console.log(response);
        sessionStorage.setItem("uid", response.user.user.uid);
        window.location.replace("index.html");
    })
    .catch((error) => {
        console.log(error);
        var errorMessage = error.message;
        alert(errorMessage);
    });
});

registerLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("register.html");
})