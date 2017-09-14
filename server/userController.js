var app = require('./index.js');
var db = app.get('db');

module.exports = {
  getUserInfo: function(req, res){
      console.log("get user info running");
    db.find_by_id([req.session.passport.user.google_id])
    .then(function(err,user){
      if (err){
        res.status(400).json(err);
      }else if (user[0]){
        res.status(200).json(user[0]);
      }else if (user){
        res.status(200).json(user);
      }
    });
  },
    
  findById: function(accessToken, refreshToken, profile, done){
    const db = app.get('db');
    console.log('hi')
    db.find_by_id([profile.id])
    .then(function(user){

        if(!user[0]){//if there isnt one, create!!
          console.log('CREATING USER');
          console.log('profile');
          db.create_google_user([profile.id, profile.name.givenName])
          .then(function(user){
            console.log('USER CREATED',user);
            return done(user);//goes to serialize user
          })
        }else{//if we find a user, return it
          console.log('FOUND USER', user)
          return done(user);
        }

    })

}
  
};
