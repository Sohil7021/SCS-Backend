
// require and setup
const mongoose = require("mongoose")
// database creation practice name on *** DB side *** 

mongoose.connect("mongodb://127.0.0.1:27017/practice")
// make schema that means documnet main kya hoga 

const userschema =  mongoose.Schema({
  usename:String,
  name:String,
  age:Number,
})

// make model *** making collletion *** 
// passing name and schema
module.exports =  mongoose.model("user",userschema);

/* GET users listing. */

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


