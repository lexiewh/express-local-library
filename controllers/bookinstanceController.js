var bookinstance = require('../models/bookinstance');

// display list of all bookinstances
exports.bookinstance_list = function(req, res) {
    res.send('TODO: bookinstance list')
};

// display detail page for a specific bookinstance
exports.bookinstance_detail = function(req, res) {
    res.send('TODO: bookinstance detail: ' + req.params.id)
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