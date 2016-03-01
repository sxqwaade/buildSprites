var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    _url = require('url'),
    process = require('child_process'),
    jsonfile = require('jsonfile');  

var status = 0;

var getSprite = function(){};

getSprite.prototype.index = function(req,res){
    var arg = _url.parse(req.url,true).query;
    var file = '/opt/www/node_project/createSprite/gruntCfg.json';
    var imgarr = arg.sprites.split(";");
    for(var i = 0;i<imgarr.length;i++){
        imgarr[i] = 'static/images/sprites/'+imgarr[i]; 
    }
    var data = {
        "sprite":{
            "all":{
                "src":imgarr,
                "dest":'static/images/'+arg.time+'.png',
                "destCss":'static/css/sprites_css/'+arg.time+'.css',
                "algorithm":'top-down'
            }
        }
    }

    jsonfile.writeFile(file,data,function(err){
        process.execFile('grunt',['autoSprite'],
            function(error,stdout,stderr){
                if(error !== null){
                    console.log('exec error:' + error);
                    return false
                }    
                status = 1;
                console.log(stdout);

                res.send({"imgSrc":"http://192.168.9.3:3030/static/images/"+arg.time+".png","cssSrc":'http://192.168.9.3:3030/static/css/sprites_css/'+arg.time+'.css'});
            });
    });

};

module.exports = new getSprite();