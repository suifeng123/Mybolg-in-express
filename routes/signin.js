var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

//GET /sigin 登录
router.get('/',checkNotLogin,function(req,res,next){
  res.send(req.flash());
});

//POST /signin 用户登录
router.post('/',checkNotLogin,function(req,res,next){
  res.send(req.flash());
});

module.exports = router;
