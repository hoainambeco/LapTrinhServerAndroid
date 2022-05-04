const mongoose = require('mongoose'); //nhung thu vien
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/cat', function(req, res, next) {
  mongoose.connect('mongodb+srv://hoainambeco:01684490544Fe@cluster0.f6gva.mongodb.net/db_cat')
  .then(() => {
    console.log('ket noi thanh cong');
  })
  .catch(err => {
    console.log('ket noi that bai');
  });
  const Cat = mongoose.model('Cat', { name: String });
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => {
    console.log('meow');
    res.send('meow');
  });

});
module.exports = router;
