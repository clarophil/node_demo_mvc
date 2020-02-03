// Get an instance of the express Router and set routes
let express = require('express');
let router = express.Router();              

// Import contact controller
var userController = require('./controllers/user_controller');

router.get('/user', userController.home);

router.get('/user/add', userController.add);

router.post('/user', userController.new);

//router.put('/user/:iduser',userController.update);

//router.delete('/user/:iduser', userController.remove);

// Contact routes
// router.route('/user')
//     .get(userController.home)
//     .post(userController.new);

// router.route('/user/:iduser')
//     .put(userController.update)
//     .delete(userController.remove);

 module.exports = router;