const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    title : {
        type : String
    },
    image : {
        type : String
    },
    desc : {
        type : String
    },
    // likes : {

    // },
    // userId : {

    // }

})

module.exports = mongoose.model('post',postSchema)