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
    // to check res.send(req.body) and will display on browser

    let item = req.body.items;
    if (item){
        if(Array.isArray(item)==false){
            item = [item]
        }
    } else{
        item =[]
    }// to check : res.send(item)

    let cost = {
        'apple': 3,
        'durian': 15,
        'orange': 6,
        'banana': 4
    }

    //for loop method
    let sum = 0

    for(let each of item){
        sum += cost[each]
    }// to check: console.log(sum)

    //reducer method
    // let reducer = function(resultSoFar, currentFruit) {
    //     let fruitCost = cost[currentFruit];
    //     return resultSoFar + fruitCost;
    // }
    // let sum = item.reduce(reducer, 0);


    res.render('fruits-cost',{
        'total':sum
    })
})

app.get('/lost-and-found-form', function(req, res){
    res.render('forms/form')
})

//method 1
// app.post('/lost-and-found-form', function(req, res){
//     //to check: res.send(req.body)
//     let nameLength = req.body.name;
//     let email = req.body.email;

//     let nameInvalid = false;
//     let emailInvalid = false;

//     if (nameLength.length < 3 || nameLength.length > 200){
//         nameInvalid = true;
//     }

//     if (email.includes('.') == false || email.includes('@') == false){
//         emailInvalid = true;
//     }

//     let noError = nameInvalid == false && emailInvalid == false;

//     res.render('form-validate',{
//         'nameInvalid': nameInvalid,
//         'emalInvalid': emailInvalid,
//         'noError': noError
//     })
//})

    app.post('/lost-and-found-form', function (req, res){
        let errors = [];
        if (req.body.name.length < 3 || req.body.name.length >200){
            errors.push("the item name is too short or too long")
        }

        if (! req.body.email.includes('.')){
            errors.push("email does not have a .")
        }

        if (! req.body.email.includes('@')){
            errors.push("email does not have a @")
        }

        if (errors.length == 0){
            console.log("no errors")
        }

        res.render('form-validate-2',{
            'errors':errors
        })
    })


app.listen(3000, function(){
    console.log('server has started')
})
