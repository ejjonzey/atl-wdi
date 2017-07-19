//require express package
const express = require('express');
//save an express module as 'app'
const app = express();
var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');
// assigning 3000 as our port
const port = 3000;

app.get('/', function(req, res){
  res.send('Welcome to Pizza Express');
});


const toppingsController = require('./controllers/toppingsController');
app.use('/toppings', toppingsController);


const orderController = require('./controllers/orderController');
app.use('/order', orderController);




// app.get('/topping/:pepperoni', function(req, res){
//   res.render('pepperoni pizza! Good choice.');
// });

// app.get('/order/:10/:medium', function(req, res, next) {

//      res.render('Your order for 10 medium pizzas will be ready in 1 minute!');
//  });



// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});