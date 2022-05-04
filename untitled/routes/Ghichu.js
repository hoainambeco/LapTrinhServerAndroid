var express = require('express');
var router = express.Router();
var multer = require('multer');

const index = require('../controler/index.controler');
var uploader = multer( { dest: './tmp/'});
router.get('/',index.getindex);
router.get('/add',index.getAdd);
router.post('/add',uploader.single('img_preview'),index.postindex)
router.post('/delete',index.postDelete);
router.get('/edit/:id',index.getEdit);
router.post('/edit',uploader.single('img_preview'),index.postEdit);
router.post('/editAction',index.postEditAction);
router.post('/find',index.find);
module.exports = router;
