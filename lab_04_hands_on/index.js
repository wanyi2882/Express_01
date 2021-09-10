const express = require('express');
const hbs = require('hbs')
const wax = require('wax-on')

let app = express();

app.set('view engine', 'hbs');

wax.on(hbs.handlebars);

wax.setLayoutPath('./views/layouts');

app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('index')
})

app.get('/submit-new-fault', function(req, res){
    res.render('submit_new_fault.hbs')
})

app.get('/enter-new-fault', function(req, res){
    res.render('enter_new_fault')
})

app.listen(4000, function(){
    console.log('server has started')
})