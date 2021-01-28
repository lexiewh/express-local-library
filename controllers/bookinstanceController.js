var { body, validationResult } = require('express-validator');
var async = require('async');
var BookInstance = require('../models/bookinstance');
var Book = require('../models/book');

// display list of all bookinstances
exports.bookinstance_list = function(req, res, next) {
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
exports.bookinstance_create_get = function(req, res, next) {
    Book.find({}, 'title').exec(function (err, books){
        if (err) { return next(err); }
        // render when successful
        res.render('bookinstance_form', { title: 'Create Bookinstance', book_list: books});
    });
};

// handle bookinstance create on post
exports.bookinstance_create_post = [

    // Validate and sanitise fields.
    body('book', 'Book must be specified').trim().isLength({ min: 1 }).escape(),
    body('imprint', 'Imprint must be specified').trim().isLength({ min: 1 }).escape(),
    body('status').escape(),
    body('due_back', 'Invalid date').optional({ checkFalsy: true }).isISO8601().toDate(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a BookInstance object with escaped and trimmed data.
        var bookinstance = new BookInstance(
          { book: req.body.book,
            imprint: req.body.imprint,
            status: req.body.status,
            due_back: req.body.due_back
           });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values and error messages.
            Book.find({},'title')
                .exec(function (err, books) {
                    if (err) { return next(err); }
                    // Successful, so render.
                    res.render('bookinstance_form', { title: 'Create BookInstance', book_list: books, selected_book: bookinstance.book._id , errors: errors.array(), bookinstance: bookinstance });
            });
            return;
        }
        else {
            // Data from form is valid.
            bookinstance.save(function (err) {
                if (err) { return next(err); }
                   // Successful - redirect to new record.
                   res.redirect(bookinstance.url);
                });
        }
    }
];

// display bookinstance delete form on get
exports.bookinstance_delete_get = function(req, res, next) {
    async.parallel({
        bookinstance: function(callback) {
            BookInstance.findById(req.params.id).exec(callback)
        }
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.bookinstance == null) {
            res.redirect('/catalog/bookinstance');
        }
        // successful, so render
        res.render('bookinstance_delete', { title: 'Delete BookInstance', bookinstance: results.bookinstance})
    })
};

// handle bookinstance delete on post
exports.bookinstance_delete_post = function(req, res, next) {
    async.parallel({
        bookinstance: function(callback) {
            BookInstance.findById(req.params.id).exec(callback)
        }
    }, function(err, results) {
        if (err) { return next(err); }
        // success, so remove
        BookInstance.findByIdAndRemove(req.body.bookinstanceid, function deleteBookInstance(err) {
            if (err) { return next(err); }
            // success - redirect to list
            res.redirect('/catalog/bookinstances')
        })
    })
};

// display bookinstance update form on get
exports.bookinstance_update_get = function(req, res) {
    res.send('TODO: bookinstance update GET')
};

// handle bookinstance update on post
exports.bookinstance_update_post = function(req, res) {
    res.send('TODO: bookinstance update POST')
};