var express = require('express');
var router = express.Router();
var multer = require('multer');
var comicsController = require('../controllers/comics.controller');
var AuthMiddleware = require('../middleware/auth.midllware')
const comicsModel = require("../models/comics.models");
/* GET users listing. */
router.get('/',AuthMiddleware.YeuCauDangNhap,comicsController.getComicsList)
router.post('/add',comicsController.postAddComic)
router.post('/edit',comicsController.postUpdateComics)
router.post('/delete',comicsController.postDeleteComics)
router.get('/addPhoto/:id',comicsController.getAddPhoto)

var uploadMulti = multer({dest: './tmp/'})

router.post('/addPhoto/:id',uploadMulti.array('uploadedImages',100),comicsController.postAddPhoto);
module.exports = router;
