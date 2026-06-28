const express = require('express')
const app = express()

//Database Connection
const db = require('./db')

//models Import
const userModel = require('./models/userModel')

//routes Import
const userRoute = require('./routes/userRoutes')

app.use('/user', userRoute)

const PORT = 7777
app.listen(PORT, ()=> {
    console.log("App Started")
})