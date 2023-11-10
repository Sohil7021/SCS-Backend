var express = require('express');
var router = express.Router();

const userModel = require('./users');
// authetication
const passport = require('passport')
const localStrategy = require('passport-local')

passport.use(new localStrategy(userModel.authenticate()))
const { route } = require('../app');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
// router.get('/home', function(req, res) {
//   res.send("hello amul")
// });

// router.get('/create', async function (req,res) {
//  let userdata =  await userModel.create({
//     username:"harsh",
//     nickname:"game",
//     description:"the game begain",
//     categories:['js','mode'],
    
//   });
//   res.send(userdata);
// })

// let's find data

// router.get('/find', async function(req, res) {
//   // making case insensitive
//   // in regex take ^ - start $ - end word
//  var regex =  new RegExp("^Harsh$","i")
//   let user = await userModel.find({username: regex})
//   res.send(user);
// });

// how do i find document where an array filed contail all of a set of values?
// router.get("/find", async function(req,res) {
//   let user = await userModel.find({categories : { $all : ['fashion']}});
//   res.send(user)
// })

// how can i serach on certaion range of document means Date?
// router.get("/find", async function(req,res) {
//   var date1 = new Date('2023-11-02')
//   var date2 = new Date('2023-11-03')
//   let user = await userModel.find({datecreated : { $gte : date1,$lte:date2}});
//   res.send(user)
// })

// how can i filter for document based on the existance of a filed in Mongoose?
// router.get("/find", async function(req,res) {
//   let user = await userModel.find({categories : {$exists:true }});
//   res.send(user)
// })

// how can i filter document based on a specific on a filed's length in Mongoose?
// router.get("/find", async function(req,res) {
//   let user = await userModel.find({
//     $expr : {
//       $and : [
//         {$gte : [{$strLenCP:'$nickname'},0]},
//         {$lte : [{$strLenCP:'$nickname'},12]}
//       ]
//     }
//   });
//   res.send(user)
// })
// 



// **************Authetication*****************

//profile code
route.get('/profile',function(req,res) {
  res.send('welcome to profile')
}
)

route.post('/register',function(req,res) {
  var userdata = new userModel ({
    username:req.body.username,
    secret:req.body.secret
  })

  userModel.register(userdata, req.body.password)
  .then(function(registerduser) {
    passport.authenticate('local')(req,res,function() {
      res.redirect('/profile')
    })
  })
})

// login code
route.post('/login',passport.authenticate('local',{
  successRedirect: "/profile",
  failureRedirect:"/login"
}),function(req,res) {

})

// logout code
route.get('/logout', function(req,res,next) {
req.logout(function(err){
  if(err) {return next(err);}
  res.redirect('/')
})
})

// is login
function isLoggedIn(req,res,next) {
  if(req.isAuthenticated()) {
    return next()
  }
  res.redirect('/')
}

module.exports = router;
