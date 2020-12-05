import { request } from './db.js';

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // register User
  const name = document.getElementById("name");
  const number = document.getElementById("number");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const userData = {
    email: email.value,
    password: password.value,
    name: name.value,
    number: number.value,
  };

  request('register', 'POST', userData)
  .then((response) => {
      sessionStorage.setItem("uid", response.user.user.uid);
      window.location.replace("index.html");
  })
  .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error "+errorCode+": "+errorMessage);
  });
});