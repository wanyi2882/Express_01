//import express
const express = require('express');

//import in the hbs
const hbs = require('hbs')

let app = express();

//instruct the express app to use hbs as the view engine
app.set('view engine', 'hbs')

// tell Express wwhere to find static files
app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('main-page')
});

app.get('/addTwo/:n1/:n2', function(req, res){
    let n1 = req.params.n1;
    let n2 = req.params.n2;
    let total = parseInt(n1) + parseInt(n2);
    res.render('total', {
        'number1': n1,
        'number2': n2,
        'total': total
    })
})

app.listen(3000, function(){
    console.log("Server has started")
})