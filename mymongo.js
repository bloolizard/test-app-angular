var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TestAppAngular');

console.log('Connection to MongoDB');

var TestModel = mongoose.model('Test', {
    test_name: String,
    questions: []
});

module.exports = router;