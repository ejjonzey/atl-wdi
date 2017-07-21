//packages
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

//app settings
const app = express();
const port = process.env.PORT || 3000;

//application params
const recipesController = require('./controller/recipes');

//log
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
	extended: true
}));

//views
app.set('view engine', 'hbs');

app.use('/recipes',recipesController);

//homepage
app.get('/', (req, res) => {
	res.send('this is our Home Page');
});

app.listen(port, () => {
	console.log('were up on port ', port);
});