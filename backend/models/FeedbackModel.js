const mongoose=require('mongoose')

const feedbackschem=new mongoose.Schema({
    username : {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    message : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Feedback",feedbackschem)