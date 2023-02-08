var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  next()
});
router.put('/', function(req, res, next) {
  if(req.query.id = 1){
    next()
  } else {
    res.status(400).json({id:2 , error_message:"value no 2 tidak valid"})
  }
});

module.exports = router;
