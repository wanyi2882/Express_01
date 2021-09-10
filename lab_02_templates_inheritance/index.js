const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on')

// setup express
const app = express();

// setup view engine
app.set('view engine', 'hbs');

//setup wax-on for hbs
wax.on(hbs.handlebars);
//inform wax where to find our layouts file
wax.setLayoutPath('./views/layout')


//inform express where to find static files
app.use(express.static('public'))

//routes
//associate an endpoint with a function
app.get('/', function(req,res){
    res.render('index')
})

//start server
app.listen(3000, function(){
    console.log('server started')
})