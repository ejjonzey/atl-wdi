//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
   res.render("pirates/index.hbs", {
       pirates: pirates
   });
});


router.get('/new', function(req, res){
   res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){

   //grab the pirate by id
   var showPirate = pirates[req.params.id];

   res.render("pirates/show.hbs", {
       pirate: showPirate
   });
});

//==============================
// CREATE
//==============================

router.post('/', (req, res) => {
   console.log(req.body);

  const newPirate = {
       name: req.body.name,
       birthplace: req.body.birthplace,
       yearOfDeath: req.body.yearOfDeath,
       base: req.body.base,
       nickname: req.body.nickname
   };

  pirates.push(newPirate);

  res.redirect("/pirates");
});

//==============================
// UPDATE
//==============================
router.put('/:id', (req, res) => {
  // We have the ID
  const id = req.params.id;
  // Use the id to grab specific index in array
  const pirates = data.seededpirates[id];
  // Update the description and urgent values
  pirates.description = req.body.description;
  pirates.urgent = req.body.urgent;
  // redirect back to individual pirates
  res.method = "GET";
  res.redirect(`/pirates/${id}`);
});

//==============================
// DESTROY
//==============================
/* DELETE pirates */
router.delete('/:id', (req, res) => {
  data.seededPirates.splice(req.params.id, 1);

  res.method= "GET";
  res.redirect("/pirates");
});

//==============================
// EXPORTS
//==============================

module.exports = router;