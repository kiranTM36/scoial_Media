const userModel = require('../models/userModel')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

router.post('/login', async(req, res)=> {
    try {
        const data = req.body

        const user = await userModel.findOne({email : data.email})

        if(!user){
            return res.status(404).json({
                message : "User not Found"
            })
        }

        const isMatch = bcrypt.compare(data.password , user.password)

        if(!isMatch){
            return res.status(400).json({
                message : "Invalid Password"
            })
        }

        const token = jwt.sign({id : user._id, email : user.email},'hahaha',{
            expiresIn : '30d'
        })

        res.cookie('jwtToken', token)
        console.log(token)

        res.status(200).json({
            messaage : "Login Sucessfull"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message : "Server Error"})
    }
})

router.get('/search/:name', async(req, res)=> {
    try {
        const response = await userModel.find({ username : req.params.name})

        if(response.length === 0){
            return res.status(404).json({
            message : "User Not Avaliable"
        })
        }
        res.status(200).json({
        message : "User Found", 
        data : response
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server Error"
        })
    }
})

router.get('/allUser', async(req, res)=> {
    try {
        const response = await userModel.find()

        if(response.length === 0){
            return res.status(404).json({
                message : "user not found"
            })
        }

        res.status(200).json({
            message : "All user Found",
            data : response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server Error"
        })
    }
})

router.delete('/delete/:id', async(req, res)=> {
    try {
        const response = await userModel.findByIdAndDelete(req.params.id)

        if(!response){
            return res.status(404).json({
                messgae : "User Not found"
            })
        }

        res.status(200).json({
            message : "User Deleted Sucessfully",
            data : response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server Error"
        })
    }
})

router.patch('/edit/:id', async(req, res)=> {
    try {
        const updateData = req.body
        const response = await userModel.findByIdAndUpdate(req.params.id,data,{
            new : true
        })

        if(!response){
            return res.status(404).json({
                message : "User Not Found",
            })
        }

        res.status(200).json({
            message : "User Updated sucessfully",
            data : response
        })
    } catch (error) {
        
    }
})


module.exports = router