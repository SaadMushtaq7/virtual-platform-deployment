import express from 'express'
import mongoose from 'mongoose'
const app = express()
const port = 8000
const cors = require('cors')

//Route
app.get('/api', function (req, res) {
    res.send('hello world')
})
//MongoDB connection
mongoose.set('strictQuery', true);

mongoose
    .connect('mongodb+srv://saad:1234@cluster0.rzqacqk.mongodb.net/test', {
        family: 4
    })
    .then(() => {
        console.log('Connection is established!')
    })
    .catch((e) => {
        console.log('No Connection!', e)
    })

const router = require('./routes/user')
const postRouter = require('./routes/post')
const corsOptions = {
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use('/user', router)
app.use('/post', postRouter)

//Server
app.listen(port, function () {
    console.log('Server is Up at port ', port)
})

module.exports = app