const mongoose=require('mongoose')

const ecomSchema= new mongoose.Schema({
    
    name:String,
    brand:String,
    prize:Number
    
})

module.exports=mongoose.model('videos',ecomSchema)
