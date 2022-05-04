var express = require('express');
var router = express.Router();
var AuthMiddleware = require('../middleware/auth.midllware')
var forgotController = require('../controllers/forgot.Controller');
/* GET users listing. */
router.get('/',AuthMiddleware.ChuaDangNhap,forgotController.forgot)
router.post('/',AuthMiddleware.ChuaDangNhap,forgotController.postForgot)
module.exports = router;
