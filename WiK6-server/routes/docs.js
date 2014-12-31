var express = require('express');
var router = express.Router();

var model = require('../models/model');
var docModel = model.docModel;

/* GET home page. */
router.get('/', function(req, res) {
  docModel.getDocs(function(err, records){
    //console.log(records);
    var data = {docs : records};

    //res.render('taskList', { tasks: records});
    res.json(data);
  });
});

module.exports = router;
