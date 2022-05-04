var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')
var forgotRouter = require('./routes/forgot')
var registerRouter = require('./routes/register')
var homeRouter = require('./routes/home')
var comicsRouter = require('./routes/comics')
var authorRouter = require('./routes/author')
var ApiTruyenRouter = require('./routes/Api')

var app = express();

// view engine setup
app.set('process.env.NODE_ENV','production')
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false , limit: '50mb'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'fksdfn24235bdInfsdHSNF3414', // chuỗi bất kỳ tự điền
  resave: true,
  saveUninitialized: true
}));

app.use('/', loginRouter);
app.use('/public-api', ApiTruyenRouter);
app.use('/user', usersRouter);
app.use('/login', loginRouter);
app.use('/forgot',forgotRouter);
app.use('/register',registerRouter);
app.use('/home', homeRouter);
app.use('/comics', comicsRouter);
app.use('/author', authorRouter);
app.get('/logout', function(req, res){
  req.session.destroy(function(err){
    if(err){
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
