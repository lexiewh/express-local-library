var Genre = require('../models/genre');
var Book = require('../models/book')
var async = require('async');

// display list of all genres
exports.genre_list = function(req, res, next) {
    Genre.find().sort([['name', 'ascending']]).exec(function (err, list_genres){
        if (err) { return next(err); }
        // successful, so render
        res.render('genre_list', {title: 'Genre List', genre_list: list_genres})
    })
};

// display detail page for a specific genre
exports.genre_detail = function(req, res, next) {
    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id).exec(callback);
        },

        genre_books: function(callback) {
            Book.find({ 'genre': req.params.id }).exec(callback);
        },
    }, function(err,  results) {
        if (err) { return next(err); }
        if (results.genre==null) {
            // No results
            var err = new Error('Genre not found');
            err.status = 404;
            return next(err);
        }
        // successful, so render
        res.render('genre_detail', {title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books } );
    });
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