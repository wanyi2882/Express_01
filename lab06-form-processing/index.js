const express = require('express');
const hbs = require('hbs');
const wax = require('wax-on')

let app = express();

app.set('view engine', 'hbs');

wax.on(hbs.handlebars);

wax.setLayoutPath('./views/layouts');

app.use(express.static('public'));

//enable form processing
app.use(express.urlencoded({
    'extended': false
}))

//for form processing need 2 routes. one to respond one to request the form information
app.get('/contact-us', function(req, res){
    res.render('contact');
})

//method is post so need to make sure hbs or html the method is also post or it will be default as get
app.post('/contact-us', function(req,res){
    res.send('form received');
    console.log(req.body)
    // req.body returns details of form as an object
    // key is the name attribute in the form. impt to put the input type to have a name attribute

    //case 1: user select more than one. it will return an array of the selected methods
    //case 2: user select only one. string of selected
    //case 3: user never select. nothing exist

    //goal: always have an array
    //case 1: array
    //case 2: string in array
    //case 3: empty array

    //test if case 3: user didnt select any
    let contactMethods = req.body.contactMethod;
    if (contactMethods){
        if (Array.isArray(contactMethods)==false){
            contactMethods = [ contactMethods ]
        }
        }else{
            contactMethods =[]
    
    //alternative method but more complex to understand
    //let contactMethods = req.body.contactMethod || [];
    //  // assume req.body.contactMethods contain the string "email"
    //  // => contactMethods = "email" || []
    //  // => contactMethods = "email"

    //  // assume req.body.contactMethods contain undefined
    //  // => contactMethods = undefined || []
    //  // => contactMethods = []

    //contactMethods = Array.isArray(contactMethods) ? contactMethods : [ contactMethods ];
    //console.log(contactMethods);
    }console.log(contactMethods)
})

app.listen(3000, function(){
    console.log('server has started')
})