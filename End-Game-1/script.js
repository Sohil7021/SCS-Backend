// express js install
// install
// express js boilerplate code
    // go npm website take simple express code
// express js ejs setup
//    install ejs
    // set views folder
    // create ejs files
    // render ejs files inside route


// express static file setup
// architecture of public folder


const express = require('express')
const app = express()
app.set("view engine","ejs")
app.use(express.static("./public"))

app.get('/', function (req, res) {
  res.render("index")
})

app.listen(3000)

// The endgame part 1 start
// express generator -> make folder structure also write basic code in project
  // npm i express-generator -g
  // open cmd move to desktop
  // create new app :
  // express appname --view=ejs

  // now use three command
  // cd appname
  // npm i
  // open it on vs code

  // ***  run server just use npx nodemon is automatic take file and run on server ***



