const User = require('../models/user');

async function validateUser(user){
  var count = await User.countDocuments({username: user});
  if(count>0){
    return false;
  }else{
    return true;
  }
}

function validateEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePass(password){
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(password);
}

exports.validateUser = validateUser;
exports.validateEmail = validateEmail;
exports.validatePass = validatePass;
