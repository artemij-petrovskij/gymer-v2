const express = require('express')
const router = express.Router()

const { login } = require('../../controllers/auth.controller')
const { signup } = require('../../controllers/auth.controller')

router.post('/signup', signup)
router.post('/login', login)

module.exports = router