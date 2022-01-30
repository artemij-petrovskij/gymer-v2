const User = require('../models/auth-model')
const jwt = require('jsonwebtoken')
const { formattedDate } = require('../functions/date')

module.exports.showTodayExercises = async (req, res) => {

    const decoded_login = jwt.decode(req.body.jwt, { complete: true });
    const candidate = await User.findOne({ login: decoded_login.payload.login })

    let today_training = []

    for (let key in candidate.training) {

        if (candidate.training[key]['date'] === formattedDate()) {

            today_training.push(candidate.training[key])

        }
    }

    res.status(201).json(today_training);

}

module.exports.showAllExercises = async (req, res) => {

    const decoded_login = jwt.decode(req.body.jwt, { complete: true });
    const candidate = await User.findOne({ login: decoded_login.payload.login })

    let today_training = []

    for (let key in candidate.training) {

        today_training.push(candidate.training[key])

    }
    res.status(201).json(today_training);

}

module.exports.addSet = async (req, res) => {
    const decoded_login = jwt.decode(req.body.jwt, { complete: true });
    const candidate = await User.findOne({ login: decoded_login.payload.login })

    await candidate.training.push({
        date: formattedDate(),
        set: req.body.set,
        exercise: req.body.exercise,
        weight: req.body.weight,
        repeats: req.body.repeats
    })
    await candidate.save()


    let today_training = []

    for (let key in candidate.training) {

        if (candidate.training[key]['date'] === formattedDate()) {

            today_training.push(candidate.training[key])

        }
    }
    if (today_training.length == 0) {
        res.status(404).json({ err: 'err' });
    } else {
        res.status(201).json(today_training);

    }

}

module.exports.maxSet = async (req, res) => {

    const decoded_login = jwt.decode(req.body.jwt, { complete: true });
    const candidate = await User.findOne({ login: decoded_login.payload.login })
    const exercise = req.body.exercise

    let today_training = []

    for (let key in candidate.training) {

        if (candidate.training[key]['exercise'] === exercise) {

            today_training.push(candidate.training[key])

        }
    }

    if (Object.keys(today_training).length != 0) {
        const best_set = today_training.reduce((acc, curr) => acc.weight > curr.weight ? acc : curr)
        res.status(201).json(best_set);
    } else {
        res.status(404).json({ err: 'err' })
    }

}
