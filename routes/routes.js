var index = require('./index');
var UserController = require('../controllers/UserController');
var getSprite = require('../controllers/getSprite');
var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

module.exports = function(app){
    app.get('/',index.index);
    app.post('/api/user/uploads',multipartyMiddleware,UserController.uploadFile);
    app.get('/api/user/getSprite',getSprite.index);
}
