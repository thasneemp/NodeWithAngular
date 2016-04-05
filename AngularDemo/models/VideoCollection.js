var mongoose = require('mongoose');

var VideoCollection = new mongoose.Schema({
    title: String,
    genre: String,
    description: String

});
module.exports = mongoose.model("VideoCollection", VideoCollection);
