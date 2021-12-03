const mongoose=require('mongoose')

const friendschema=new mongoose.Schema({
    requestedBy : {
        type: String,
        required: true
    },
    requestedTo : {
        type: String,
        required: true
    },
    username1 : {
        type: String,
        require: true
    },
    username2: {
        type: String,
        required: true
    },
    sentDate : {
        type: String,
        required: true
    },
    acceptedDate : {
        type: String
    },
    status : {
        type: Boolean,
        default: false
    }
})

module.exports=mongoose.model('Friend',friendschema)