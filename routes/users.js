var express = require('express');
var router = express.Router();

router.get('/:name',function(req,res){
  res.render('users',{
    name:req.params.name
  });
});


//将这个模块的东西进行抛出
module.exports = router;
