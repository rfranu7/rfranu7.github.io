// IMPORTS
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');

// Initialize Firebase
var firebase = require("firebase/app");
var firebaseConfig = {
  apiKey: "AIzaSyAx8hQS-Kpt-G1ehav990qV9djcQShVOCU",
  authDomain: "booking-app-42142.firebaseapp.com",
  databaseURL: "https://booking-app-42142.firebaseio.com",
  projectId: "booking-app-42142",
  storageBucket: "booking-app-42142.appspot.com",
  messagingSenderId: "832602021195",
  appId: "1:832602021195:web:3ed77ebca769557349dcce",
  measurementId: "G-GX9GQBWYMK"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase Auth
require("firebase/auth");

// Initialize Firestore
require("firebase/firestore");
const admin = require('firebase-admin');
const serviceAccount = require('./booking-app-42142-f5b0c19e816f.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// App Constants
const app = express();
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const allowedOrigins = ['http://127.0.0.1:5500', 'http://localhost:5500'];
app.use(cors({
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200
}));

app.get('/', (req, res) => {
  console.log("get req");
  res.send('Hello World!')
});

app.post('/get-user', (req, res) => {
  console.log(req.body.user);
  db.collection('users').doc(req.body.user).get()
  .then((result) => {
    if (!result.exists) {
      const user = "";
      const status = 200;
      const message = "The user does not exist.";
      res.status(status).json({ status, message, user });
    } else {
      const user = result.data();
      const status = 200;
      const message = "user is found.";
      res.status(status).json({ status, message, user });
    }
    return;
  })
  .catch((error) => {
    var status = error.code;
    var message = error.message;
    res.status(404).json({ status, message });
    return;
  });
});

app.post('/register', (req, res) => {
  firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
  .then((user) => {
    const data = {
      uid: user.user.uid,
      email: user.user.email,
      name: req.body.name,
      phoneNumber: req.body.number,
    };

    console.log(data);

    db.collection('users').doc(data.uid).set(data)
    .then((result) => {

      const status = 200;
      const message = "user successfully created.";
      res.status(status).json({ status, message, user });
      return;
    });
  })
  .catch((error) => {
    var status = error.code;
    var message = error.message;
    res.status(400).json({ status, message });
    return;
  });
});

app.post('/update-account', (req, res) => {
  admin
  .auth()
  .updateUser(req.body.uid, {
    email: req.body.email,
    displayName: req.body.name,
  }).then((userRecord) => {
    const data = {
      uid: req.body.uid,
      email: req.body.email,
      name: req.body.name,
      phoneNumber: req.body.number,
    };

    db.collection('users').doc(data.uid).update(data)
    .then((result) => {
      const status = 200;
      const message = "user successfully updated.";
      res.status(status).json({ status, message, userRecord });
      return;
    });
  })
  .catch((error) => {
    var status = error.code;
    var message = error.message;
    res.status(401).json({ status, message });
    return;
  });
});

app.post('/update-password', (req, res) => {
  admin
  .auth()
  .updateUser(req.body.uid, {
    password: req.body.password,
  }).then((userRecord) => {
    const status = 200;
    const message = "password successfully updated.";
    res.status(status).json({ status, message, userRecord });
    return;
  })
  .catch((error) => {
    var status = error.code;
    var message = error.message;
    res.status(401).json({ status, message });
    return;
  });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password)
  .then((user) => {
    // Signed in
    const status = 200;
    const message = "user successfully logged in.";
    res.status(status).json({ status, message, user });
    return;
  })
  .catch((error) => {
    var status = error.code;
    var message = error.message;
    res.status(401).json({ status, message });
    return;
  });
});

app.get('/logout', (req, res) => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    const status = 200;
    const message = "user successfully logged out.";
    console.log(status);
    res.status(status).json({ status, message });
    return;
  }).catch((error) => {
    const status = error.code;
    const message = error.message;
    console.log(error);
    res.status(403).json({ status, message });
    return;
  });
});

app.post('/add-booking', (req, res) => {
  console.log(req.body);
  try {
    db.collection('bookings').add(req.body)
    .then((result) => {
      const status = 200;
      const message = "booking successfully added.";
      res.status(status).json({ status, message, result });
      return;
    });
  } catch(error) {
      var status = error.code;
      var message = error.message;
      res.status(400).json({ status, message });
      return;
  };
});

app.post('/get-booking', (req, res) => {
  console.log(req.body);
  try {
    db.collection('bookings').where('uid','==',req.body.user).get()
    .then((result) => {
      if (result.empty) {
        console.log('No matching documents.');
        const status = 404;
        const message = 'No matching documents.';
        res.status(status).json({ status, message });
        return;
      }  
      var bookings = [];
      result.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        object = {
          id: doc.id,
          data: doc.data()
        }
        bookings.push(object);
      });

      const status = 200;
      res.status(status).json({ status, bookings });
      return;
    });
  } catch(error) {
      var status = error.code;
      var message = error.message;
      res.status(400).json({ status, message });
      return;
  };
});

app.get('/get-all-booking', (req, res) => {
  console.log(req.body);
  try {
    db.collection('bookings').get()
    .then((result) => {
      if (result.empty) {
        console.log('No matching documents.');
        const status = 404;
        const message = 'No matching documents.';
        res.status(status).json({ status, message });
        return;
      }  
      var bookings = [];
      result.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        object = {
          id: doc.id,
          data: doc.data()
        }
        bookings.push(object);
      });

      const status = 200;
      res.status(status).json({ status, bookings });
      return;
    });
  } catch(error) {
      var status = error.code;
      var message = error.message;
      res.status(400).json({ status, message });
      return;
  };
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// function (origin, callback) {
//   if (!origin) return callback(null, true);
//   if (allowedOrigins.indexOf(origin) === -1) {
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//   }
//   return callback(null, true);
// },