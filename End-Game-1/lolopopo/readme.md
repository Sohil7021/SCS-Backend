# The EndGame Part-1


 The endgame part 1 start
 express generator -> make folder structure also write basic code in project
     1) npm i express-generator -g
     2) open cmd move to desktop
     3) create new app :
     4) express appname --view=ejs

     5) now use three command
     6) cd appname
     7) npm i
     8) open it on vs code

  > ***  run server just use npx nodemon is automatic take file and run on server ***

//mogodb:- 
    two side in database

    Code side               MongoDB Side
    
    DB setup        ->        DB formation
    Model           ->        Collection
    Schema          ->        Documents
<!-- create in routes folder users file -->

    //intsall mongodb
    //install mogoosejs
    //require and setup connection
    //make schema
    //create model and export

     -- Cookies and Session -->
    <!-- session -->
         - client in Cookie   ***  server are in session  -> they all data
        - install packege of express-session -> npm i express-session
        - go app.js and just import session and use -> app.use(session)
      -   creating session req.session.naam = value; CRUD method can use

<!-- Cookie -->
> in cookie you cann use CRUD method

> setup cookie -> res.cookie(name,value);

> cookie reading -> req.cookie.name
res.clearCookie("name);


