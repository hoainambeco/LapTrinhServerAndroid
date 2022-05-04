var express = require('express');
var router = express.Router();
var multer = require('multer');

const oto = require('../controler/oto.controler');
var uploader = multer( { dest: './tmp/'});
router.get('/',oto.getindex);
router.get('/add',oto.getAdd);
router.post('/add',uploader.single('img_preview'),oto.postindex)
router.post('/delete',oto.postDelete);
router.get('/edit/:id',oto.getEdit);
router.post('/edit',uploader.single('img_preview'),oto.postEdit);
router.post('/find',oto.find);
module.exports = router;
