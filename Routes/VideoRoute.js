const express = require('express')

import { verifyToken } from '../Middleware/verifyToken.js'
const { addVideo, allVideo } = require('../Controllers/VideoController')

const router = express.Router()


router.post('/add', verifyToken, addVideo)
router.get('/all', allVideo)

module.exports = router