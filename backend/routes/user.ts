import express from 'express'
import bodyparser from 'body-parser'

const router = express()
const app = express()
const user = require('../controllers/user')
router.use(bodyparser.json())
router.post('/create', user.create)
router.post('/login', user.login)

module.exports = router