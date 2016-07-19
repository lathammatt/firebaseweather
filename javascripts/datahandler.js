"use strict";

let dominfo = require("./domhandler"),
	$ = require("jquery");

function getData (zip){
	return new Promise (function(resolve, reject){
		$.ajax({
		  url : `http://api.wunderground.com/api/09875708c4e92c96/geolookup/conditions/q/${zip}.json`,
		  dataType : "jsonp",
		  // success : function(parsed_json) {
		  // var location = parsed_json['location']['city'];
		  // var temp_f = parsed_json['current_observation']['temp_f'];
		  // alert("Current temperature in " + location + " is: " + temp_f);
	  		}
		}).done(function(parsed){
			console.log("songData", parsed);
			resolve(parsed);
		});
	});
};

function userData (userId){
	return new Promise (function(resolve, reject){
		$.ajax({
			url: `https://weatherexercise.firebaseio.com/weather.json?orderBy="uid"&equalTo="${userId}"`
		}).done(function(savedData){
			console.log("savedData", savedData);
			resolve(savedData);
		});
	});
};


module.exports={
	getData,
	userData,
};