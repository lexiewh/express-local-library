var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// for date formatting
const { DateTime } = require('luxon');

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

// virtual for formatting the birth date
AuthorSchema.virtual('birth_date_formatted').get(function () {
    return this.date_of_birth ? DateTime.fromJSDate(this.date_of_birth).toLocaleString(DateTime.DATE_MED) : '';
});

AuthorSchema.virtual('death_date_formatted').get(function () {
    return this.date_of_death ? DateTime.fromJSDate(this.date_of_death).toLocaleString(DateTime.DATE_MED) : '';
});

// export model
module.exports = mongoose.model('Author', AuthorSchema);