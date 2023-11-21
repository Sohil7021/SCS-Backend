# Node VS Express Learn Basic

1) - node vs express

2) - what is express

3) - why express

4) - routing :- /about

5) - middleware

6) - request and response

7) - route parameter

8) - templete engines:- same as html but is fast - (ejs) setup:-
  -  install.
  -  configure ejs - app.set("view engine",ejs) 
  -  views name folder create 
  -  create a file with extension .ejs file make
   -  (res.render) send insted render use and !! in rendaring use only views folder files name and not add       (ejs):- differnet templet engine - pug, handlebars,  ejs, jad

 -   app.get('/', (req, res) => {
     res.render('index', { title: 'Hey', message: 'Hello there!' })
})

9) - static file:- in public folder
   - create folder
   - create three folder inside it, images,stylessheet 
   - configure express static
   - understand the path
   - app.use(express.static('public'))


10) - http method - get post update delete

11) - error handling:- 
-  app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})

  example:- app.get('/', (req, res, next) => {
  fs.readFile('/file-does-not-exist', (err, data) => {
    if (err) {
      next(err) // Pass errors to Express.
    } else {
      res.send(data)
    }
  })
})
