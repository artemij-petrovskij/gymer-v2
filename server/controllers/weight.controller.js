const User = require('../models/auth-model')
const jwt = require('jsonwebtoken')
const { formattedDate } = require('../functions/date')

module.exports.showWeights = async (req, res) => {

    let decoded_login = jwt.decode(req.body.jwt, { complete: true });
    const candidate = await User.findOne({ login: decoded_login.payload.login })
    res.status(201).send(candidate.weight);
}

module.exports.changeWieght = async (req, res) => {

    let decoded_login = jwt.decode(req.body.jwt, { complete: true });
    const candidate = await User.findOne({ login: decoded_login.payload.login })
   
    await candidate.weight.push({
        date: formattedDate(),
        weight: req.body.weight
    })
    
    await candidate.save()
    res.status(201).send(candidate.weight);
}