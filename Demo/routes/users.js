var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//
// });
///nhúng controller vào file router

const userController = require("../controllers/user.controller");
router.get("/",userController.getUserList);
router.get("/add", userController.getUserAdd)
module.exports = router;
