var book = require('../models/book');

// implement the site homepage
exports.index = function(req, res) {
    res.send('TODO: Site home page')
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