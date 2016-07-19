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
    loadSaved();
  } else {
    console.log("user not logged in");
  }
});


function loadSaved(){
	$("#saved").html("");
	data.userData(currentUser);
	.then(function(Data){
		console.log("data", data);
		// function to buildtoDOM in main -- main.build()
	});
};


$("#auth").click(function() {
  console.log("clicked auth");
  login()
  .then(function(result){
    var user = result.user;
    console.log("logged", user.uid);
    loadSaved();
  }).catch(function(error) {
  	console.log("error", error);
  });
});

$("#submit").click(function(){
	zip = $("#zip").val();
	console.log("zip", zip);
	data.getData(zip);
});


