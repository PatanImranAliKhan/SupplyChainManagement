const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})

module.exports=mongoose.model('User',userschema)