const mongoose=require('mongoose')

const supplyschema = new mongoose.Schema({
    source : {
        type: String,
        required: true
    },
    destination : {
        type: String,
        required: true
    }
})

module.exports=mongoose.model("SupplyRequest",supplyschema)