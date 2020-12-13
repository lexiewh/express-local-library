var genre = require('../models/genre');

// display list of all genres
exports.genre_list = function(req, res) {
    res.send('TODO: genre list')
};

// display detail page for a specific genre
exports.genre_detail = function(req, res) {
    res.send('TODO: genre detail: ' + req.params.id)
};

// display genre create form on GET
exports.genre_create_get = function(req, res) {
    res.send('TODO: genre create GET')
};

// handle genre create on post
exports.genre_create_post = function(req, res) {
    res.send('TODO: genre create POST')
};

// display genre delete form on get
exports.genre_delete_get = function(req, res) {
    res.send('TODO: genre delete GET')
};

// handle genre delete on post
exports.genre_delete_post = function(req, res) {
    res.send('TODO: genre delete POST')
};

// display genre update form on get
exports.genre_update_get = function(req, res) {
    res.send('TODO: genre update GET')
};

// handle genre update on post
exports.genre_update_post = function(req, res) {
    res.send('TODO: genre update POST')
};