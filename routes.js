// Get an instance of the express Router and set routes
let express = require('express');
let router = express.Router();              

// Import contact controller
var userController = require('./controllers/user_controller');

router.get('/user', userController.home);

router.get('/user/add', userController.add);

router.post('/user', userController.new);

 module.exports = router;