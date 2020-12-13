var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

// implement the site homepage
exports.index = function(req, res) {
    async.parallel({
        book_count: function(callback) {
            Book.countDocuments({}, callback);
        },
        book_instance_count: function(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.countDocuments({status: 'Available'}, callback);
        },
        author_count: function(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count: function(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', {title: 'Local Library Home', error: err, data: results });
    });
}

// display list of all books
exports.book_list = function(req, res) {
    res.send('TODO: book list')
};

// display detail page for a specific book
exports.book_detail = function(req, res) {
    res.send('TODO: book detail: ' + req.params.id)
};

// display book create form on GET
exports.book_create_get = function(req, res) {
    res.send('TODO: book create GET')
};

// handle book create on post
exports.book_create_post = function(req, res) {
    res.send('TODO: book create POST')
};

// display book delete form on get
exports.book_delete_get = function(req, res) {
    res.send('TODO: book delete GET')
};

// handle book delete on post
exports.book_delete_post = function(req, res) {
    res.send('TODO: book delete POST')
};

// display book update form on get
exports.book_update_get = function(req, res) {
    res.send('TODO: book update GET')
};

// handle book update on post
exports.book_update_post = function(req, res) {
    res.send('TODO: book update POST')
};