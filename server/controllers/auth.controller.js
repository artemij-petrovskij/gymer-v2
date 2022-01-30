
const bcrypt = require('bcrypt-nodejs')
const jwt = require('jsonwebtoken')

const User = require('../models/auth-model')

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({ login: req.body.login })

    if (candidate) {
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, candidate.password)

        if (isPasswordCorrect) {
            let token = jwt.sign({ login: candidate.login }, process.env.ACCESS_TOKEN_SECRET);
            res.status(200).send({ token: token, user: candidate.login });
        } else {
            res.status(404).json({ err: 'Пользователь не найден (Неправильный пароль)' })
        }

    } else {
        res.status(404).json({ err: 'Пользователь не найден (не зареган)' })
    }
}

module.exports.signup = async (req, res) => {
    const candidate = await User.findOne({ login: req.body.login })
    if (candidate) {
        res.status(409).json({ message: 'Пользователь с таким логином уже существует' })
    } else {
        const salt = bcrypt.genSaltSync(10)

        const user = new User({
            login: req.body.login,
            password: bcrypt.hashSync(req.body.password, salt)
        })

        await user.save()

        jwt.sign({
            login: req.body.login
        }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            res.json({ token })

        })
    }
}

