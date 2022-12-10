const express = require('express')

const { addComment, getComment } = require('../Controllers/CommentController')

const router = express.Router()

router.post('/add', addComment)
router.get('/:id', getComment)

module.exports = router

