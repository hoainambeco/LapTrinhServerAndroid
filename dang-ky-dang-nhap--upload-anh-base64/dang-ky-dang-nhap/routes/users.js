var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.controller'); // thêm vào

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Trang danh sách tài khoản');
});

// trang đăng ký, url sẽ là:  localhost:3000/users/register
router.get('/register',UserController.getFormRegister );

// tạo link xử lý post
router.post('/register', UserController.postRegister);
// làm login
router.get('/login', UserController.getFormLogin);
router.post('/login', UserController.postLogin);

module.exports = router; // dòng này cuối cùng
