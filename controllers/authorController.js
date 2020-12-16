var Author = require('../models/author');

// display list of all authors
exports.author_list = function(req, res) {
    Author.find().sort([['family_name', 'ascending']]).exec(function (err, list_authors) {
        if (err) { return next(err); }
        // successful, so render
        res.render('author_list', { title: 'Author List', author_list: list_authors});
    })
};

// display detail page for a specific Author
exports.author_detail = function(req, res) {
    res.send('TODO: author detail: ' + req.params.id)
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