var express      = require('express');
var logger       = require('morgan');
var bodyParser   = require('body-parser');

const app = express();

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/routes')(app);

module.exports = app;
