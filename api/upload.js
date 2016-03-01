var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();

var UserController = require('./controllers/UserController');

router.post('/api/user/uploads',multipartyMiddleware,UserController.uploadFile);