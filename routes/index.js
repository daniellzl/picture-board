var express = require('express');
var passport = require('passport');
var model = require('../models/models');
var router = express.Router();

// export router
module.exports = router;

// home page
router.get('/', function(req, res) {

    // query database for all images
    model.pictureModel.find({}, function(err, pictures) {
        if (err) throw err;
        
        // save pictures to object
        var object = {};
        object.pictures = pictures;
        
        // display home page
        res.render('index', object);
    });
});