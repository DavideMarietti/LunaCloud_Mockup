let createError = require('http-errors');
let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let path = require('path');
const config = require("./config.js");

let indexRouter = require('./routes/index');
let readRouter = require('./routes/read');

let app;
app = express();

/*
// Connect Arango
let arango = require("arangojs");
global._db = new arango.Database({url:config.DB_HOST});
_db.useDatabase(config.DB_NAME);
_db.useBasicAuth(config.DB_USER, config.DB_PASSWORD);
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/read', readRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  // next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
