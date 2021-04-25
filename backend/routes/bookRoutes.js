const express = require('express')
const router = express.Router()

const bookController = require('../controllers/bookController.js')

// define all the book routes

router.get('/', bookController.index)
router.get('/:bookId', bookController.show)
router.get('/search', bookController.search)
router.get('/author/:authorId', bookController.booksByAuthor)
router.post('/', bookController.addBook)
router.patch('/:bookId', bookController.update)
router.delete('/:bookId', bookController.delete)

// export all the defined routes
module.exports = router