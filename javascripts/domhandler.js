"use strict";

let $ = require("jquery"),
	fire = require("./firebase"),
    login = require("./user"),
    firebase = require("firebase/app"),	
    data = require("./datahandler"),
    currentUser = null,
    zip=null;


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log("user logged in", user.uid);
    currentUser = user.uid;
  } else {
    console.log("user not logged in");

  }
});


$("#auth").click(function() {
  console.log("clicked auth");
  login()
  .then(function(result){
    var user = result.user;
    console.log("logged", user.uid);
    // get saved weather
  }).catch(function(error) {
  	console.log("error", error);
  });
});

$("#submit").click(function(){
	zip = $("#zip").val();
	console.log("zip", zip);
	getData(zip);
});

