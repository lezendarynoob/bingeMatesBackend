const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Connect to DB
mongoose.connect(process.env.DB_URI,
  {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Connection established");
  }
});

app.listen(process.env.PORT, function(){
  console.log("Listening to port" + process.env.PORT)
})
