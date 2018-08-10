import * as firebase from 'firebase';
require("firebase/firestore");
const prodConfig = {
  apiKey: "AIzaSyDvrw3MpeJyFbRcU7gZs9o8nelq6I8ot8I",
  authDomain: "radii-website.firebaseapp.com",
  databaseURL: "https://radii-website.firebaseio.com",
  projectId: "radii-website",
  storageBucket: "radii-website.appspot.com",
  messagingSenderId: "592618696557"
};

const devConfig = {
  apiKey: "AIzaSyDvrw3MpeJyFbRcU7gZs9o8nelq6I8ot8I",
  authDomain: "radii-website.firebaseapp.com",
  databaseURL: "https://radii-website.firebaseio.com",
  projectId: "radii-website",
  storageBucket: "radii-website.appspot.com",
  messagingSenderId: "592618696557"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// using a recent beta build of cloud firestore
const db = firebase.firestore();
const auth = firebase.auth();
const messaging = firebase.messaging();

export {
  db,
  auth,
  messaging,
};
