// Get an instance of the express Router and set routes
let express = require('express');
let router = express.Router();              

// Import contact controller
var userController = require('./controllers/userController');

router.get('/', userController.userList) ; 

router.get('/user', userController.userList);

router.get('/user/add', userController.userAdd);

router.post('/user/new', userController.userSave);

 module.exports = router;