import express from 'express'
import bodyparser from 'body-parser'

const router = express()
const app = express()
const post = require('../controllers/post')
router.use(bodyparser.json())
router.post('/getPosts', post.getPosts)
router.post('/addPost', post.addPost)
router.get('/getAllPosts', post.getAllPosts)

module.exports = router