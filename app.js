var express = require('express'),
    path = require('path'),
    http = require('http'),
    route = require('./routes/routes'),

app = express();


app.set('port',3030);
app.set('views',__dirname+"/view");
app.set('view engine','jade');
app.use(express.static(path.join(__dirname)));

route(app);



http.createServer(app).listen(app.get('port'),function(){
    console.log("Express server listening on port " + app.get('port'));
});
