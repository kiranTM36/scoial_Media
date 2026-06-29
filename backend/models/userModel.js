const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username : {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minLength : 8
    }
},{
    timestamps : true
})

userSchema.pre('save', async function next() {
    if(!this.isModified('password')) return
    this.password = await bcrypt.hash(this.password,10)
})

module.exports = mongoose.model('user',userSchema)