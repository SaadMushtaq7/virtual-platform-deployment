const Post = require('../models/post')
import multer from 'multer'
import express from 'express'
const app = express()
import mongoose from 'mongoose'

async function addPost(req, res, next) {
    const postId = req.body.postId
    const postText = req.body.postText
    const userName = req.body.userName
    const postImage = req.body.postImage
    
    const postMeta = {
        likes: 0,
        comments: 0,
        shares: 0
    }
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return `${monthNames[date.getMonth()]} ${date.getDate()} at ${strTime}`;
  }
    const date = new Date()
    const post = new Post({
        profileImage: '/images/userImg.jpg',
        userName,
        time: formatAMPM(date),
        postType: {
            icon: 'fa-users',
            type: 'public'
        },
        postText,
        postImage,
        reactions: [],
        reactionsCount: 0,
        commentsCount: postMeta.comments,
        sharesCount: postMeta.shares
    })
    // const upload = multer({ storage: storage })
    // app.post('/media-upload', upload.single('profile-file'), function (req, res, next) {
    post.save()
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((e) => {
            console.log('req', req.body, e)

            res.status(400).send(e)
        })
    // })
}
function getPosts(req, res, next) {
    const userName = req.body.userName
    if (!userName) res.status(400).send('Username is required for fetching posts')
    Post.find({ userName })
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((e) => {
            res.status(400).send('User does not exists')
        })
}

function getAllPosts(req, res, next) {
    Post.find()
        .then((data) => {
            res.status(201).send(data)
        })
        .catch((e) => {
            res.status(400).send('No Posts found!!')
        })
}

module.exports.getPosts = getPosts
module.exports.addPost = addPost
module.exports.getAllPosts = getAllPosts