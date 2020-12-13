var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create author schema
var AuthorSchema = new Schema({
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    date_of_birth: {type: Date},
    date_of_death: {type: Date}
});

// virtual for author's full name
AuthorSchema.virtual('name').get(function() {
    return `${this.family_name}, ${this.first_name}`
});

// virtual for the author's lifespan
AuthorSchema.virtual('lifespan').get(function () {
    return (this.date_of_death.getYear() - this.date_of_birth.getYear())
});

// virtual for the author's url
AuthorSchema.virtual('url').get(function () {
    return `/catalog/author/${this._id}`
});

// export model
module.exports = mongoose.model('Author', AuthorSchema);