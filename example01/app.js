var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var mongoose = require('mongoose');


var foodb1 = new mongoose.Schema({
  id: Number,
  name: String
});
var mymodel = mongoose.model('foodb1', foodb1);


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'demopass',
  database : 'foo'
});
 
connection.connect();
 
connection.query('SELECT name from mytable', function (error, results, fields) {
if (error) throw error;
 var silence = new mymodel({ id: results[0].id, name: results[0].name });
 console.log(); // 'Silence'
 console.log('The solution is: ', silence.name);
});
 
connection.end();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var zachRouter = require('./routes/zach');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/zach', zachRouter);
app.use(express.static(path.join(__dirname, 'public')));
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
