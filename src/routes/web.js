const express = require('express')
const router = express.Router()
const { getHomepage, getAbc, getDemo, postCreateUser } = require('../controllers/homeController')

router.get('/', getHomepage)

router.get('/abc', getAbc)

router.get('/demo', getDemo)

router.post('/create-user', postCreateUser)

module.exports = router