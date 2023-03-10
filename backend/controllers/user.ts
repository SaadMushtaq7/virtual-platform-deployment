const User = require('../models/user')
import mongoose from 'mongoose'

async function create(req, res, next) {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    if (!name) res.status(400).send('Name is required')
    if (!email) res.status(400).send('Email is required')
    if (!password) res.status(400).send('Password is required')

    const userExists = await User.findOne({ email }).exec()

    if (userExists) {
        res.status(400).send('Email already exists')
    } else {
        const user = new User({
            name,
            email,
            password
        })
        user.save()
            .then((data) => {
                res.status(201).send(data)
            })
            .catch((e) => {
                res.status(400).send(e)
            })
    }
}
async function login(req, res, next) {
    const userEmail = req.body.email
    const userPassword = req.body.password
    if (!userEmail) res.status(400).send('Email is required')
    if (!userPassword) res.status(400).send('Password is required')
    await User.findOne({ email: userEmail })
        .then((data) => {
            const { email, password } = data
            if (email == userEmail && password == userPassword) res.status(201).send(data)
            else res.status(400).send('Your password or email is incorrect. Please enter correct credentials')
        })
        .catch((e) => {
            res.status(400).send('User does not exists')
        })
}

module.exports.create = create
module.exports.login = login