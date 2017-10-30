'use strict';

const mongoose = require("mongoose");


//----------------------------------------
// User schema definition
//----------------------------------------
const UserSchema = new mongoose.Schema({
  first_name: { 
    type: String,
    required: true
  },
  last_name: { 
    type: String,
    required: true
  },
  username: { 
    type: String,
    required: true
  },
  password: {
   type: String, 
   required: true
  }
});


module.exports = mongoose.model("User", UserSchema);
