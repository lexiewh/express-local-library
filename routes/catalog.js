var express = require('express');
var router = express.Router();

// require controllers
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var bookinstance_controller = require('../controllers/bookinstanceController');

/// BOOK ROUTES ///

// GET catalog home page
router.get('/', book_controller.index);

// GET request for creating a Book. NOTE this must be used before the routes that use the ID
router.get('/book/create', book_controller.book_create_get);

// POST request for creating Book
router.post('/book/create', book_controller.book_create_post);

// GET request to delete a book
router.get('/book/:id/delete', book_controller.book_delete_get);

// POST request to delete a book
router.post('/book/:id/delete', book_controller.book_delete_post);

// GET request to update a book
router.get('/book/:id/update', book_controller.book_update_get);

// POST request to update a book
router.post('/book/:id/update', book_controller.book_update_post);

// GET request for one book
router.get('/book/:id', book_controller.book_detail);

// GET request for list of books
router.get('/books', book_controller.book_list);


/// AUTHOR ROUTES ///

// GET request for creating a Author. NOTE this must be used before the routes that use the ID
router.get('/author/create', author_controller.author_create_get);

// POST request for creating Author
router.post('/author/create', author_controller.author_create_post);

// GET request to delete a author
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST request to delete a author
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET request to update a author
router.get('/author/:id/update', author_controller.author_update_get);

// POST request to update a author
router.post('/author/:id/update', author_controller.author_update_post);

// GET request for one author
router.get('/author/:id', author_controller.author_detail);

// GET request for list of authors
router.get('/authors', author_controller.author_list);


/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE this must be used before the routes that use the ID
router.get('/genre/create', genre_controller.genre_create_get);

// POST request for creating Genre
router.post('/genre/create', genre_controller.genre_create_post);

// GET request to delete a genre
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete a genre
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update a genre
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update a genre
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one genre
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of genres
router.get('/genres', genre_controller.genre_list);


/// BOOK INSTANCE ROUTES ///

// GET request for creating a Book Instance. NOTE this must be used before the routes that use the ID
router.get('/bookinstance/create', bookinstance_controller.bookinstance_create_get);

// POST request for creating Book Instance
router.post('/bookinstance/create', bookinstance_controller.bookinstance_create_post);

// GET request to delete a bookinstance
router.get('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_get);

// POST request to delete a bookinstance
router.post('/bookinstance/:id/delete', bookinstance_controller.bookinstance_delete_post);

// GET request to update a bookinstance
router.get('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_get);

// POST request to update a bookinstance
router.post('/bookinstance/:id/update', bookinstance_controller.bookinstance_update_post);

// GET request for one bookinstance
router.get('/bookinstance/:id', bookinstance_controller.bookinstance_detail);

// GET request for list of bookinstances
router.get('/bookinstances', bookinstance_controller.bookinstance_list);

module.exports = router;