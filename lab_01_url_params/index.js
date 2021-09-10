const express = require('express');

let app = express();

app.get('/', function(req, res){
    res.send("Hello World")
});

app.get('/hello/:name', function(req, res){
    let name=req.params.name;
    res.send("<h1> Hello " + name + "</h1>")
})

app.listen(3000, function(){
    console.log("Server has started")
})