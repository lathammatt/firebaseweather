"use strict";
let firebase = require("./firebase"),
	provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
	console.log("check", provider);
	return firebase.auth().signInWithPopup(provider);
}

module.exports = logInGoogle;