# react-redux-firebase-authentication

* Found in [Taming the State in React]()
* [Live]( this is currently in  staging at Adysen lab and would be deployed to http://www.adysenlab.in )

## Features

* uses:
  * React (create-react-app)
  * firebase 4.3.1
  * react-router 4.2.0
  * redux
* features:
  * Sign In
  * Sign Up
  * Sign Out
  * Password Forget
  * Password Change
  * Protected Routes with Authorization
  * Database: Users

## Installation

* `git clone git@github.com:rwieruch/react-redux-firebase-authentication.git`
* `cd react-redux-firebase-authentication`
* `npm install`
* `npm start`
* visit http://localhost:3000/
* Use your own Firebase Credentials

### Use your own Firebase Credentials

* visit https://firebase.google.com/ and create a Firebase App
* copy and paste your Credentials from your Firebase App into src/firebase/firebase.js
* activate Email/Password Sign-In Method in your Firebase App
