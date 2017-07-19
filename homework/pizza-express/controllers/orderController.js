const express = require('express');

const router = express.Router();


router.get('/:type', function(req, res){
  res.send(`${req.params.type},Your order for`);
});

module.exports = router;
