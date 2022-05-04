var express = require('express');
var router = express.Router();
var multer = require('multer');// nhúng thư viện multer vào
// nhúng controller vào để sử dụng
var controller = require('../controllers/index.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// upload file
router.get('/demo-upload', controller.getFromUpload);
var upload = multer({ dest: './tmp' });
router.post('/demo-upload',upload.single('vd_file_up'), controller.postFromUpload);
module.exports = router;
