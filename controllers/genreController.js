var Genre = require('../models/genre');
var Book = require('../models/book')
var async = require('async');
var { body, validationResult } = require('express-validator');

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
exports.genre_create_get = function(req, res, next) {
    res.render('genre_form', { title: 'Create Genre' });
};

// handle genre create on post
exports.genre_create_post = [
    // validate and clean the name field
    body('name', 'Genre name required').trim().isLength({ min: 1 }).escape(),

    // process the request after validation and sanitization
    (req, res, next) => {
        // extract the validation errors from a request
        const errors = validationResult(req);

        // create a new genre object with trimmed data
        var genre = new Genre(
            { name: req.body.name }
        );

        if (!errors.isEmpty()) {
            // Render form with error messages
            res.render('genre_form', { title: 'Create Genre', genre: genre, errors: errors.array()});
            return;
        }
        else {
            // data from form is valid
            // check if Genre with the same name exists
            Genre.findOne({ 'name': req.body.name })
                .exec( function(err, found_genre) {
                    if (err) { return next(err); }

                    if (found_genre) {
                        // genre exists, redirect to its detail page
                        res.redirect(found_genre.url);
                    }
                    else {
                        genre.save(function (err) {
                            if (err) {return next(err); }
                            // genre saved, redirct to genre page
                            res.redirect(genre.url);
                        })
                    }
                })
        }
    }
];

// display genre delete form on get
exports.genre_delete_get = function(req, res, next) {
    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.id).exec(callback)
        },
        genre_books: function(callback) {
            Book.find({ 'genre': req.params.id }).exec(callback)
        }
    }, function(err, results) {
        if (err) { return next(err); }
        // no results
        if (results.genre == null) {
            // redirect to all of the genres
            res.render('/catalog/genres')
        }
        // success, so render
        res.render('genre_delete', { title: 'Delete Genre', genre: results.genre, genre_books: results.genre_books });
    })
};

// handle genre delete on post
exports.genre_delete_post = function(req, res, next) {
    async.parallel({
        genre: function(callback) {
            Genre.findById(req.params.genreid).exec(callback)
        },
        genre_books: function(callback) {
            Book.find({ 'genre': req.params.igebred }).exec(callback)
        }
    }, function(err, results) {
        if (err) { return next(err); }
        // the genre has attached books - render the sane way as the get route
        if (results.genre_books > 0) {
            es.render('genre_delete', { title: 'Delete Genre', genre: results.genre, genre_books: results.genre_books });
            return;
        }
        else {
            // author does not have books, we can safely delete the object
            Genre.findByIdAndRemove(req.body.genreid, function deleteGenre(err) {
                if (err) { return next(err); }
                // we successfully deleted, so we can go to the home page
                res.redirect('catalog/genres')
            })
        }
    })
};

// display genre update form on get
exports.genre_update_get = function(req, res) {
    res.send('TODO: genre update GET')
};

// handle genre update on post
exports.genre_update_post = function(req, res) {
    res.send('TODO: genre update POST')
};