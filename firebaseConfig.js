
const firebase = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCbxS2lvRrr-6j5wQ9KkiJpMx49D9ieyk0",
  authDomain: "gestionproyectos-9c02e.firebaseapp.com",
  projectId: "gestionproyectos-9c02e",
  storageBucket: "gestionproyectos-9c02e.appspot.com",
  messagingSenderId: "873895309009",
  appId: "1:873895309009:web:a5ae87311ae4c8f0369ff0",
  measurementId: "G-XVFZQHHKFN"
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;