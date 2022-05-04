var express = require('express');
var router = express.Router();
var authorController = require('../controllers/author.controller');
var AuthMiddleware = require('../middleware/auth.midllware')
const userController = require("../controllers/user.controller");
/* GET users listing. */
router.get('/',AuthMiddleware.YeuCauDangNhap,authorController.getComicsList)
module.exports = router;
