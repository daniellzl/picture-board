var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var model = require('../models/models');

// export function
module.exports = function(passport) {
    
    passport.use(new TwitterStrategy({
        consumerKey: process.env.CONSUMER_KEY,
        consumerSecret: process.env.CONSUMER_SECRET,
        callbackURL: process.env.CALLBACK_URL
    }, function(token, tokenSecret, profile, cb) {
        
        model.userModel.findOne({twitterId: profile.id}, function(err, user) {
            if (err) return cb(err);
            
            if (!user) {
                user = new model.userModel({
                    twitterId: profile.id,
                    name: profile.displayName,
                    screenName: profile.username
                });
                user.save(function(err) {
                    if (err) throw err;
                    return cb(err, user);
                })
            } else {
                return cb(err, user);
            }
        })
    }));
    
    // take user and save id to req.session.passport
    passport.serializeUser(function(user, cb) {
        cb(null, user._id);
    });
    
    //  attaches user object to the request as req.user
    passport.deserializeUser(function(id, cb) {
        model.userModel.findById(id, function(err, user) {
            cb(err, user);
        });
    });
};