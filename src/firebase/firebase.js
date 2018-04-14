import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyDwLMC9ij5E68i_HHSc5DJQCkL9wZk_LyA",
    authDomain: "test-lab-f7e14.firebaseapp.com",
    databaseURL: "https://test-lab-f7e14.firebaseio.com",
    projectId: "test-lab-f7e14",
    storageBucket: "test-lab-f7e14.appspot.com",
    messagingSenderId: "112650045023"
};

const devConfig = {
  apiKey: "AIzaSyDwLMC9ij5E68i_HHSc5DJQCkL9wZk_LyA",
    authDomain: "test-lab-f7e14.firebaseapp.com",
    databaseURL: "https://test-lab-f7e14.firebaseio.com",
    projectId: "test-lab-f7e14",
    storageBucket: "test-lab-f7e14.appspot.com",
    messagingSenderId: "112650045023"
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
