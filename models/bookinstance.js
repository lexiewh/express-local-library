var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up schema
var BookInstanceSchema = new Schema({
    book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Returned'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
});

// virtual for bookinstance URL
BookInstanceSchema.virtual('url').get(function () {
    return `/catalog/bookinstance/${this._id}`
});

// export module
module.exports = mongoose.model('BookInstance', BookInstanceSchema);