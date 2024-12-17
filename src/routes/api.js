const express = require('express')
const router = express.Router()
const { createNewBlog, getAllBlog, getBlogById, deleteBlogById, updateBlog } = require('../controllers/blogController')

router.post('/create-new-blog', createNewBlog)

router.get('/blogs', getAllBlog)

router.get('/blogs/:id', getBlogById)

router.post('/blogs/:id', updateBlog)

router.delete('/blogs/:id', deleteBlogById)

module.exports = router