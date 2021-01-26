var Author = require('../models/author');
var async = require('async');
var Book = require('../models/book');

// display list of all authors
exports.author_list = function(req, res, next) {
    Author.find().sort([['family_name', 'ascending']]).exec(function (err, list_authors) {
        if (err) { return next(err); }
        // successful, so render
        res.render('author_list', { title: 'Author List', author_list: list_authors});
    })
};

// display detail page for a specific Author
exports.author_detail = function(req, res, next) {
    async.parallel({
        author: function(callback) {
            Author.findById(req.params.id).exec(callback)
        },
        author_books: function(callback) {
            Book.find({ 'author': req.params.id }, 'title summary').exec(callback)
        },
    }, function(err, results) {
        // error in API usage
        if (err) { return next(err); }
        // no results/no author found
        if (results.author == null) {
            var err = new Error('Author not found');
            err.status = 404;
            return next(err);
        }
        // success, render
        res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.author_books } );
    });
};

// display author create form on GET
exports.author_create_get = function(req, res) {
    res.send('TODO: author create GET')
};

// handle author create on post
exports.author_create_post = function(req, res) {
    res.send('TODO: author create POST')
};

// display author delete form on get
exports.author_delete_get = function(req, res) {
    res.send('TODO: author delete GET')
};

// handle author delete on post
exports.author_delete_post = function(req, res) {
    res.send('TODO: author delete POST')
};

// display author update form on get
exports.author_update_get = function(req, res) {
    res.send('TODO: author update GET')
};

// handle author update on post
exports.author_update_post = function(req, res) {
    res.send('TODO: author update POST')
};