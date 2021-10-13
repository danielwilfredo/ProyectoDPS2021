// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM-q4hu50ihMOWkEL_FbEkLYkL6WCFbiE",
  authDomain: "machapu-app.firebaseapp.com",
  projectId: "machapu-app",
  storageBucket: "machapu-app.appspot.com",
  messagingSenderId: "430610733433",
  appId: "1:430610733433:web:241c433155b791e948b7a8"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

const auth = firebase.auth();

export {auth};