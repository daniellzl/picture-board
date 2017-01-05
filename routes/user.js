var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var model = require('../models/models');
var router = express.Router();

// export router
module.exports = router;

// user page
router.get('/', ensureLoggedIn('/'), function(req, res) {
    
    // save users id
    var object = {};
    object.user = req.user;
    var ownerId = req.user.id;
    
    // find users pictures
    model.pictureModel.find({ownerId: ownerId}, function(err, pictures) {
        if (err) throw err;

        object.pictures = pictures;
        
        // display user page
        return res.render('user', object);
    });
});

// add picture
router.post('/create', ensureLoggedIn('/'), function(req, res) {
   
   // save user id, picture URL, picture title
    var title = req.body.title;
    var URL = req.body.URL;
    var ownerId = req.user.id;
    
    // create new picture
    var p = new model.pictureModel({
        title: title,
        URL: URL,
        ownerId: ownerId,
        likes: []
    });
    // save picture to database
    p.save(function(err) {
        if (err) throw err;
        
        // notify user of success
        return res.send('Picture has been added.');
    });
});

// delete picture
router.get('/delete/:id', ensureLoggedIn('/'), function(req, res) {
    
    // save picture id to be deleted
    var id = req.params.id;
    
    // find picture id in database and remove
    model.pictureModel.findByIdAndRemove(id, function(err) {
        if (err) throw err;
        
        // reload user homepage
        return res.redirect('/user');
    });
});

// sign out of account
router.get('/signout', ensureLoggedIn('/'), function(req, res) {

    req.logout();
    res.redirect('/');
});