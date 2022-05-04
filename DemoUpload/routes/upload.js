const express = require('express');
var router = express.Router();
const multer = require('multer');
var uploadController = require('../controllers/upload.controller');

// router.get('/', (req, res) => {
//     res.render('./uploads/uploads');
// });

router.get('/', uploadController.getFormUpload);
var uploader = multer({
    dest: './tmp/'
});

router.post('/',uploader.single('image') ,uploadController.postUpload);

module.exports = router;
