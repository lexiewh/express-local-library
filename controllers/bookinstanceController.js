const { nextTick } = require('async');
var BookInstance = require('../models/bookinstance');

// display list of all bookinstances
exports.bookinstance_list = function(req, res) {
    BookInstance.find().populate('book').exec(function (err, list_bookinstances) { 
        if (err) { return next(err); }
        // successfull, so render
        res.render('bookinstance_list', { title: 'Book Instances List', bookinstance_list: list_bookinstances});
    });
};

// display detail page for a specific bookinstance
exports.bookinstance_detail = function(req, res, next) {
    BookInstance.findById(req.params.id).populate('book').exec(function (err, bookinstance) {
        if (err) { return next(err); }
        if (bookinstance == null) {
            // no results
            var err = new Error('Book copy not found');
            err.status = 404;
            return next(err);
        }
        // success, so render
        res.render('bookinstance_detail', { title: 'Copy: '+bookinstance.book.title, bookinstance: bookinstance});
    })
};

// display bookinstance create form on GET
exports.bookinstance_create_get = function(req, res) {
    res.send('TODO: bookinstance create GET')
};

// handle bookinstance create on post
exports.bookinstance_create_post = function(req, res) {
    res.send('TODO: bookinstance create POST')
};

// display bookinstance delete form on get
exports.bookinstance_delete_get = function(req, res) {
    res.send('TODO: bookinstance delete GET')
};

// handle bookinstance delete on post
exports.bookinstance_delete_post = function(req, res) {
    res.send('TODO: bookinstance delete POST')
};

// display bookinstance update form on get
exports.bookinstance_update_get = function(req, res) {
    res.send('TODO: bookinstance update GET')
};

// handle bookinstance update on post
exports.bookinstance_update_post = function(req, res) {
    res.send('TODO: bookinstance update POST')
};