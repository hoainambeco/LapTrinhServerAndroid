var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');
var AuthMiddleware = require('../middleware/auth.midllware')
/* GET users listing. */
router.get('/',AuthMiddleware.YeuCauDangNhap,userController.getUserList)
router.post('/add',userController.postAddUser)
router.post('/edit',userController.postUpdateUser)
router.post('/delete',userController.postDeleteUser)

module.exports = router;
