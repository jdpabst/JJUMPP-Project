const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var massive = require('massive');
var passport = require('passport');
var session = require('express-session');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var config = require('./config.js');

const app = module.exports = express();

app.use(bodyParser.json());
app.use(session({
  secret: config.secret,
    resave: true,
    saveUninitialized: false,
    cookie:{
      maxAge: (1000*60*60*24*14) //this is 14 days
    }
}))

app.use(passport.initialize());
app.use(passport.session());

massive(config.connection)
.then((db) => {app.set('db', db)})


app.use(express.static(__dirname + './../build'))

var userController = require("./userController.js");

/////////////Oauth functions

passport.use(new GoogleStrategy({
  clientID: config.passport.clientID,
  clientSecret: config.passport.secret,
  callbackURL: '/auth/callback'
  },
  function(accessToken,refreshToken,profile, done){
    console.log(profile)
    userController.findById(accessToken,refreshToken,profile, done);
  }));
passport.serializeUser(function(user, done){
  console.log('serializing', user);
  done(null, user);
});
passport.deserializeUser(function(id,done){
  db.find_by_id([id],function(err, user){
    done(err, user);
  });
});

///////Oauth endpoints
app.get('/getuserinfo',userController.getUserInfo);

app.get('/logout',function(req,res){
  req.session.destroy(function(err,data){
  });
});

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

app.get('/auth/callback', function(req, res){
  res.redirect('http://localhost:8087/')
});

//////////Other endpoints for the front end


app.listen(config.port,console.log("you are now connected on 3000, database should work too"));
