var mongoose = require('mongoose');

// user schema
var userSchema = new mongoose.Schema({
    twitterId: String,
    name: String,
    screenName: String
});
var userModel = mongoose.model('user', userSchema);

// picture schema
var pictureSchema = new mongoose.Schema({
    title: String,
    URL: String,
    ownerId: String,
    likes: [String],
    createdAt: { type: Date, default: Date.now }
});
var pictureModel = mongoose.model('picture', pictureSchema);

// export book and account models
module.exports = {
    userModel: userModel,
    pictureModel: pictureModel
};