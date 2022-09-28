const express = require('express')

const { verifyToken } = require('../Middleware/verifyToken')
const { addVideo, allVideo, addView } = require('../Controllers/VideoController')

const router = express.Router()


router.get('/all', allVideo)
router.put('/view/:id', addView)
router.post('/add', verifyToken, addVideo)

module.exports = router