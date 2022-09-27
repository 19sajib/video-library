const express = require('express')

const { addVideo, allVideo } = require('../Controllers/VideoController')

const router = express.Router()


router.post('/add', addVideo)
router.get('/all', allVideo)

module.exports = router