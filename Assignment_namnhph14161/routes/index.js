var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/login', {
    loginCSS: "/stylesheets/login.css",
  });
});
router.post("/", (req, res) => {
  console.log(req);
  res.writeHead(301, {
    Location: "http://" + req.headers["host"] + "/home",
  });
  res.end();
});
module.exports = router;
