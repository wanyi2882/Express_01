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

//register our own ifEquals helper
hbs.handlebars.registerHelper('ifEquals', function(arg1, arg2, options){
    if (arg1 == arg2) {
        return options.fn(this); //to display the elements nested inside 
    } else {
        return options.inverse.set(this);
    }
})

//routes
//associate an endpoint with a function
app.get('/', function(req,res){
    res.render('index')
})

app.get('/fruits', function(re, res){
    let fruits = ['apple', 'banana', 'pear'];
    res.render('fruits', {
        'fruits': fruits
    })
})

//start server
app.listen(3000, function(){
    console.log('server started')
})