const express = require('express');

let app = express();

app.get('/', function(req, res){
    res.send("Hello World")
});

app.listen(3000, function(){
    console.log("Server has started")
})