const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const cookieSession = require('cookie-session');
const passport = require('passport');
const PassportSetup = require('./config/PassportSetup');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(cookieParser());

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

//Set cookies
app.use(cookieSession({
  maxAge: 360*24*60*60*1000,
  keys: [process.env.SESSION_KEY]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/auth', authRoutes);

app.listen(process.env.PORT, function(){
  console.log("Listening to port" + process.env.PORT)
})
