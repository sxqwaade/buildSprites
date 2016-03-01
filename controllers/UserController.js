var express = require('express');
var path = require('path'),
    fs = require('fs');  

var UserController = function(){};

UserController.prototype.uploadFile = function(req,res){
    var file = req.files.file,
        time = req.files.time;

    fs.rename(file.path,"/opt/www/node_project/createSprite/static/images/sprites/"+file.name,function(err){
       
        if(err){
            res.send(err);
        }else{
            res.send('上传成功');
        }
    });

}

module.exports = new UserController();