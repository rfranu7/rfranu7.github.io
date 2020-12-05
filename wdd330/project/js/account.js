import { request } from './db.js';

const user = sessionStorage.getItem("uid");

window.onload = (event) => {
    console.log(event);
    if (!user) {
        window.location.replace("login.html");
    }

    console.log(user);

    request('get-user', 'POST', {user})
    .then((response) => {
        console.log(response.user);
        document.getElementById("name").value = response.user.name;
        document.getElementById("number").value = response.user.phoneNumber;
        document.getElementById("email").value = response.user.email;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error "+errorCode+": "+errorMessage);
    });
};

const editForm = document.getElementById("submitAccountBtn");
editForm.addEventListener("click", (e) => {
  e.preventDefault();
  // register User
  const name = document.getElementById("name");
  const number = document.getElementById("number");
  const email = document.getElementById("email");
  console.log("form acc");

  const userData = {
    email: email.value,
    name: name.value,
    number: number.value,
    uid: user,
  };

  request('update-account', 'POST', userData)
  .then((response) => {
      console.log(response.userRecord);
      sessionStorage.setItem("uid", response.userRecord.uid);
      alert(response.message);
      window.location.replace("index.html");
  })
  .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error "+errorCode+": "+errorMessage);
  });
});

const editFormPass = document.getElementById("submitPassBtn");
editFormPass.addEventListener("click", (e) => {
  e.preventDefault();
  // register User
  const password = document.getElementById("password");
  console.log("form pass");

  const userData = {
    password: password.value,
    uid: user,
  };

  request('update-password', 'POST', userData)
  .then((response) => {
      console.log(response.userRecord);
      sessionStorage.setItem("uid", response.userRecord.uid);
      alert(response.message);
      window.location.replace("index.html");
  })
  .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error "+errorCode+": "+errorMessage);
  });
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
