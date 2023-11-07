var express = require('express');
var router = express.Router();
// importing model from users
const userModel = require("./users")



/* GET home page. */
router.get('/',  function(req, res, next) {
  // creating session on server store data
  // req.session.koibhinaam = 'helo';
  req.session.ban = true;
  res.render('index', { title: 'Express' });
});

router.get('/checkban', async function (req,res) {
  // checking value on /checkban
  if(req.session.ban == true)
console.log(req.session)
res.send("check the value on server")
})

router.get('/', function(req,res) {
  res.cookie("age",25);
  res.send("cookie")
})
router.get('/read', function(req,res) {
  res.cookie("age",25);
  res.send(req.cookies.age)
})

// router.get('/allusers', async function (req,res) {
//   const allusers =  await userModel.findOne();
//   console.log(allusers)
//   res.render(allusers);
// })

// router.get('/create', async function(req, res, next) {
//  const createUser =  await userModel.create({
//   username:"harsh",
//   age:25
//  })
//  res.send(createUser)
// });

module.exports = router;
