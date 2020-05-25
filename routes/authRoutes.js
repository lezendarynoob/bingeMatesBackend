const router = require('express').Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const validator = require('../config/validator');

const saltRounds = 10;

router.post('/login', passport.authenticate('local', {
  failWithError: true
}), function(req, res){
  return res.json({message: 'done'});
}, function(err, req, res, next){
   return res.status(200).send({message: req.authError});
});

router.get('/login/failed', function(req, res){
  console.log(req.body.authError);
  res.json({message: req.body.authError});
});

router.post('/signup', async function(req, res){
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const profilePicURI = req.body.profilePicURI;
  const bio = req.body.bio;

  if(!(await validator.validateUser(username))){
    res.json({message: 'Username already taken'});
  }else if(!validator.validateEmail(email)){
    res.json({message: 'Please enter a valid email'});
  }else if(!validator.validatePass(password)){
    res.json({message: 'Password should atleast be 8 characters including one digit/lowercase/uppercase letter each'});
  }else{
    try{
      var hash = await bcrypt.hash(password, saltRounds);
      var user = new User({
        username: username,
        email: email,
        password: hash,
        bio: bio,
        profilePicURI: profilePicURI
      });
      await user.save();
      res.json({message: 'done'});
    } catch{
      res.json({message: 'Some error detected, please try again later'});
    }
  }
});

router.get('/logout', function(req, res){
  req.logout();
  res.json({message: 'done'});
});

router.get('/isAuthenticated', function(req, res){
  console.log(req.user);
  if(req.user){
    res.json({isAuthenticated: true});
  } else{
    res.json({isAuthenticated: false});
  }
});

module.exports = router;
