var express = require('express');
var router = express.Router();
var ApiTruyen = require('../controllers/ApiTruyen');
const auth = require('../middleware/api.auth.midlware')

router.get('/Comics', ApiTruyen.getComicsList);
router.get('/Comics/:id', ApiTruyen.getComics);
router.get('/user/profile',auth,ApiTruyen.getProfile );
router.post('/login', ApiTruyen.postLogin);
router.post('/loginToken', ApiTruyen.postLoginToken);
router.post('/reg',ApiTruyen.postReg);
router.post('/user/edit',ApiTruyen.postEditProfile);
router.post('/user/editPass',ApiTruyen.postEditPassword);
router.post('/user/logout',auth,ApiTruyen.postLogout ) ;
router.post('/user/logout-all',auth,ApiTruyen.postLogoutAll ) ;
module.exports = router;
