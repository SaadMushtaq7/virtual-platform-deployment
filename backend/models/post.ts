import mongoose from 'mongoose'
import { object } from 'yup'
const postSchema = new mongoose.Schema({
    postText: {
        type: String
    },
    desc: {
        type: String,
        required: false
    },
    userName: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },

    time: {
        type: String
    },
    postType: {
        icon: {
            type: String
        },
        type: {
            type: String
        }
    },

    postImage: {
        type: String
    },
    reactions: { type: Array, default: [] },
    reactionsCount: {
        type: Number
    },
    commentsCount: {
        type: Number
    },
    sharesCount: {
        type: Number
    }
})
module.exports = mongoose.model('Post', postSchema)
