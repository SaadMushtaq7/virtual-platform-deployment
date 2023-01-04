import express from 'express'
import mongoose from 'mongoose'
const app = express()
const port = 8000
const cors = require('cors')
const path = require('path')

//Route
app.get('/api', function (req, res) {
    res.send('hello world')
})

app.use(express.static(path.join(__dirname,"./frontend/build")))

app.get("*",(_,res)=>{
    res.sendFile(path.join(__dirname,"./frontend/build/index.html"),
    (err)=>{
        if(err){
            //@ts-ignore
            res.status.send(err)
        }
    }
    )
})

//MongoDB connection
mongoose.set("strictQuery", false);
mongoose
    .connect('mongodb://localhost:27017/users', {
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
