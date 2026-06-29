const router = require('express').Router()
const userModel = require('../models/userModel')
const postModel = require('../models/postModel')

router.post('/create', async(req, res)=> {
    try {
        const data = req.body   
        const image = req.file
    } catch (error) {
        
    }
})

module.exports = router
