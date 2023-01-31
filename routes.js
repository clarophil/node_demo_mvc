// Get an instance of the express Router and set routes
let express = require('express');
let router = express.Router();              

// Import contact controller
var userController = require('./controllers/userController');

router.get('/', (request, response) => response.redirect('/list'));

router.get('/list', userController.userList);
router.get('/detail', userController.userDetail);
router.get('/add', userController.userFormAdd);
router.post('/save', userController.userSave);
router.get('/update/:iduser', userController.userFormUpdate);
router.get('/delete/:iduser', userController.userRemove);

 module.exports = router;