var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBYSz3_wDygl1aC3-qYMNMKHJFhGMDh850",
    authDomain: "self-help-hotline-acp.firebaseapp.com",
    databaseURL: "https://self-help-hotline-acp.firebaseio.com",
    storageBucket: "self-help-hotline-acp.appspot.com",
    messagingSenderId: "746864609145"
};
var app = firebase.initializeApp(config);

module.exports = {firebase, config, app };