const express = require('express')
const router = express.Router()

const { authenticateToken } = require('../../middleware/authenticate')
const { showWeights, changeWieght } = require('../../controllers/weight.controller')

router.post('/show', authenticateToken, showWeights)
router.post('/change', authenticateToken, changeWieght)

module.exports = router