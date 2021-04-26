const express = require('express')
const router = express.Router()

const authorController = require('../controllers/authorController')

router.get('/', authorController.bookList )
router.get('/:authorId', authorController.show)
router.post('/', authorController.addAuthor)

module.exports = router