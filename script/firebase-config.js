// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyBWmJMj8RsJx8ozuLzKr2eOyCimtS2CecE",
  authDomain: "socialapp-a474e.firebaseapp.com",
  databaseURL: "https://socialapp-a474e-default-rtdb.firebaseio.com",
  projectId: "socialapp-a474e",
  storageBucket: "socialapp-a474e.firebasestorage.app",
  messagingSenderId: "910804562305",
  appId: "1:910804562305:web:d946d821b7a87bbeb73880",
  measurementId: "G-W7MWTGECW6"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();