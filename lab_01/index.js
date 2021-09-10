const express = require('express');

let app = express();

app.listen(3000, function(){
    console.log("Server Started")
})

//routing
app.get('/', function(req, res){
    res.send("<h1>Hello World</h1>")
})

app.get('/about-us', function(req, res){
    res.send("<h2>About Us</h2>")
})

//start server
//first argument: port number
