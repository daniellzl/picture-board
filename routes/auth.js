var express = require('express');
var passport = require('passport');
var model = require('../models/models');
var router = express.Router();

// export router
module.exports = router;

// twitter authorization
router.get('/twitter', passport.authenticate('twitter'));

// twitter authorization callback
router.get('/twitter/callback', passport.authenticate('twitter', { successRedirect: '/user', failureRedirect: '/' }));