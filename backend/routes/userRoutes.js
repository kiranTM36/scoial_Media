const userModel = require('../models/userModel')
const router = require('express').Router()

router.post('/signup', async(req, res)=> {
    try {
        const data = req.body

        const newUser = new userModel(data)

        const response = await newUser.save()

        res.status(200).json({
            message : "User Sign up Sucessfully✅✅",
            data : response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "Server Error"})
    }
})


module.exports = router