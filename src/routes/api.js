const express = require('express')
const router = express.Router()
const { createNewBlog, getAllBlog } = require('../controllers/blogController')

router.post('/create-new-blog', createNewBlog)

router.get('/blogs', getAllBlog)

module.exports = router