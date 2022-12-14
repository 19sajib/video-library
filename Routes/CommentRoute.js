const express = require('express')

const { verifyToken } = require('../Middleware/verifyToken')
const { addComment, getComment, addCommentLike } = require('../Controllers/CommentController')

const router = express.Router()

router.post('/add', addComment)
router.get('/:id', getComment)
router.put('/like/:id', verifyToken, addCommentLike)

module.exports = router

