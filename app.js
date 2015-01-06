var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var movies = require('./routes/movies'); //routes are defined here
var app = express(); //create the express app

//connect to database
//ideally get details from config file
var dbName = 'movieDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

//configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', movies); //this is the route middleware

module.exports = app;