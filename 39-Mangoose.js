const mongoose=require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/e-com")

const ecomSchema= new mongoose.Schema({
    name:String,
    brand:String,
    prize:Number
})

const main=async()=>{

    const ecomModel=mongoose.model('videos',ecomSchema)
    let data=new ecomModel({name:"max 6",brand:"m6",prize:180})
    let result= await data.save()
    console.log(result);
}
//main()

const updatedb=async()=>{
    const ecomModel=mongoose.model('videos',ecomSchema)
    const data=await ecomModel.updateOne({name:"max 6"},{$set:{prize:300}})
    console.log(data);

}
updatedb()

const deletedb=async()=>{
    const ecomModel=mongoose.model('videos',ecomSchema)
    const data=await ecomModel.deleteOne({name:"m8"})
    console.log(data);
}

deletedb()

const finddb=async()=>{
    const ecomModel=mongoose.model('videos',ecomSchema)
    const data=await ecomModel.find()
    console.log(data);
}

finddb()