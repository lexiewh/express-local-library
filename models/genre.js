var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up the genre schema
var GenreSchema = new Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 100},
});

// define the url
GenreSchema.virtual('url').get(function () {
    return `/catalog/genre${this._id}`
});

// export the module
module.exports = mongoose.model('Genre', GenreSchema);