const express = require('express')

const { verifyToken } = require('../Middleware/verifyToken')
const { addVideo, allVideo, addView, addLike, addDislike } = require('../Controllers/VideoController')

const router = express.Router()


router.get('/all', allVideo)
router.put('/view/:id', addView)
router.put('/like/:id', verifyToken, addLike)
router.put('/dislike/:id', verifyToken, addDislike)
router.post('/add', verifyToken, addVideo)

module.exports = router