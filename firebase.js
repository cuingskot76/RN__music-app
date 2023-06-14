// Import the functions you need from the SDKs you need
// import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
import * as firebase from 'firebase/compat';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAq3XWGXy8PLaGI0yLVpAe5rFUEFBeBxrM',
  authDomain: 'music-c0f75.firebaseapp.com',
  projectId: 'music-c0f75',
  storageBucket: 'music-c0f75.appspot.com',
  messagingSenderId: '40188280566',
  appId: '1:40188280566:web:29a82598fb2ba77fe336d7',
  measurementId: 'G-JMHSN12E7J',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export {auth};
