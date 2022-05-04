var express = require('express');
var router = express.Router();
var homeController = require('../controllers/home.Controller');
var AuthMiddleware = require('../middleware/auth.midllware')
/* GET users listing. */
router.get('/',AuthMiddleware.YeuCauDangNhap,homeController.home)
module.exports = router;
