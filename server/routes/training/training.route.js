const express = require('express')
const router = express.Router()

const { authenticateToken } = require('../../middleware/authenticate')
const { showTodayExercises, showAllExercises, addSet, maxSet } = require('../../controllers/training.controller')

router.post('/trainings', authenticateToken, showTodayExercises)
router.post('/archive', authenticateToken, showAllExercises)
router.post('/set', authenticateToken, addSet)
router.post('/maxset', authenticateToken, maxSet)

module.exports = router