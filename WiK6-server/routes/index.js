var express = require('express');
var router = express.Router();

//router.use(function(req, res, next) {  
//    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
//    next();
//});

var model = require('../models/model');
var docModel = model.docModel;

/* GET home page. */
router.get('/', function(req, res) {
  docModel.getDocs(function(err, records){
    console.log(records);
    var data = {docs : records.hits.hits};

    //res.render('taskList', { tasks: records});
    res.json(data);
  });
});

module.exports = router;
