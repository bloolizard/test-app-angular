var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TestAppAngular');

console.log('Connection to MongoDB');

var TestModel = mongoose.model('Test', {
    test_name: String,
    questions: []
});

router.get('/', function(req,res){
    TestModel.find(function(err, results){
        if (err){
            console.log(err);
            res.status(500).json({details: results});

        }
        else {
            console.log(results);
            res.status(200).json(results);
        }
    });
});

router.get('/:id', function(req,res){
    TestModel.find({_id: req.params.id}, function(err, results){
        if (err){
            console.log(err);
            res.status(500).json({details: results});
        }
        else {
            console.log(results);
            res.status(200).json(results);
        }

    });
});

router.post('/', function(req,res){
    (new TestModel(req.body)).save(function(err,results){
        if (err){
            console.log(err);
            res.status(500).json({details: results});

        }
        else {
            console.log(results);
            res.status(200).json(results);
        }
    });
});


module.exports = router;