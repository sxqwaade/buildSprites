var express = require('express');

var router = express.Router();

router.index=function(req,res){
    res.render('index',{title:''});
}

module.exports = router;
