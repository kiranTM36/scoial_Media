const express = require('express')
const app = express()
const cors = require('cors')

//Database Connection
const db = require('./db')

//models Import
const userModel = require('./models/userModel')
const postModel = require('./models/postModel')

//routes Import
const userRoute = require('./routes/userRoutes')
const postRoute = require('./routes/postRoute')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/user', userRoute)
app.use('/post', postRoute)

const PORT = 7777
app.listen(PORT, ()=> {
    console.log("App Started")
})