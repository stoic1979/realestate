//----------------------------------------------
// script for testing user schema
//----------------------------------------------


// lets create a new user and save it in the mongodb

var User = require("../user");
const mongoose = require("mongoose");


function createTestUser() {

	var user = new User({
		username: 'johny',
		password: '123'
	});

	user.save(function(err, user){

		if(err) {
			console.log("Failed to save use, got err: " + err);
			return;
		}

		console.log("Saved user successfully: user is \n" + JSON.stringify(user));

	});

}


//--------------------------------------------------------------------------
// connection string for test database for testing schema
// we will not use production database for this
//--------------------------------------------------------------------------
const mongodb_uri = "mongodb://localhost/realestate";

mongoose.connect(mongodb_uri, function(err) {
    if(err) {
        console.log("[SchemaTest] failed to connect to database: " + err);
        return;
    } 

    console.log("[SchemaTest] Successfully connected to database. ");

    createTestUser();
});