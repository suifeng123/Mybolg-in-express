var express = require('express'); //首先将这个框架印鉴来
var router  = express.Router();

router.get('/',function(req,res){
  res.send('hello express');
});

module.exports = router;
