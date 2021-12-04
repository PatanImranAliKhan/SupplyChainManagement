const mongoose=require('mongoose')

const supplyschema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    source : {
        type: String,
        required: true
    },
    destination : {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },
    timerequired: {
        type: String,
        required: true
    },
    product : {
        type: String,
        required: true
    },
    productsize : {
        type: String,
        required: true
    },
    amount : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
})

module.exports=mongoose.model("SupplyRequest",supplyschema)