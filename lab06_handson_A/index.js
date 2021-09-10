const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on')

let app = express();

app.set('view engine', 'hbs');

wax.on(hbs.handlebars);

wax.setLayoutPath('./views/layouts');

app.use(express.static('public'));

app.use(express.urlencoded({
    'extended': false
}))

app.get('/calculate_bmi', function(req, res){
    res.render('bmi')
})

app.post('/calculate_bmi', function(req,res){
    console.log(req.body)
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let bmi = weight / (height ** 2);
    let color = '';
    if (bmi <= 18.5) {
        color = 'red'
    } else if (bmi < 25.5) {
        color = 'green'
    } else if (bmi < 30) {
        color = 'yellow'
    } else {
        color = 'red'
    }
    res.render('display-bmi',{
        'bmi': bmi,
        'color':color
    });
})

app.get('/fruits', function(req,res){
    res.render('fruits')
})

app.post('/fruits', function(req,res){ 
    console.log(req.body)

    let item = req.body.items;
    if (item){
        if(Array.isArray(item)==false){
            item = [item]
        }
    } else{
        item =[]
    }console.log(item)

    let cost = {
        'apple': 3,
        'durian': 15,
        'orange': 6,
        'banana': 4
    }

    let sum = 0

    for(let each of item){
        sum += cost[each]
    }
        console.log(sum)

    res.render('fruits-cost',{
        'total':sum
    })
})

app.listen(3000, function(){
    console.log('server has started')
})
