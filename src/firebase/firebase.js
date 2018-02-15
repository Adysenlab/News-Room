import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyBwuCew1vT0vp1U_S2ln0Gyih4q7P-eAiY",
  authDomain: "adysen-lab.firebaseapp.com",
  databaseURL: "https://adysen-lab.firebaseio.com",
  projectId: "adysen-lab",
  storageBucket: "adysen-lab.appspot.com",
  messagingSenderId: "630284844227"
};

const devConfig = {
  apiKey: "AIzaSyBwuCew1vT0vp1U_S2ln0Gyih4q7P-eAiY",
    authDomain: "adysen-lab.firebaseapp.com",
    databaseURL: "https://adysen-lab.firebaseio.com",
    projectId: "adysen-lab",
    storageBucket: "adysen-lab.appspot.com",
    messagingSenderId: "630284844227"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
