const router = require('express').Router()
const userModel = require('../models/userModel')
const postModel = require('../models/postModel')
const multer = require('../middleware/multer')

router.post('/create',multer.single('image'), async(req, res)=> {
    try {
        const data = req.body   
        const image = req.file

        const newPost = new postModel({
            title : data.title,
            image : image ? null : image.filename,
            desc : data.desc
        })

        const response = await newPost.save()

        res.status(200).json({
            message : "New Post created Sucessfully",
            data : response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server Error"
        })
    }
})

router.get('/all', async(req, res)=> {
    try {
        const response = await postModel.find()

        if(response.length === 0){
            return res.status(404).json({
                message : "No Post Avaliable"
            })
        }

        res.status(200).json({
            messgae : "All post Fetched",
            data : response
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message : "Server Error"
        })
    }
})

router.get('/userPost/:id', async(req, res)=> {
    const response = await postModel.findOne({id : req.params.id})

    if(!response){
        return res.status(404).json({
            message : "Not Post Available"
        })
    } 

    res.status(200).json({
        message : "Post Found", 
        data : response
    })
})

module.exports = router
