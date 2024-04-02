const mongoose=require('mongoose')

const main=async()=>{
    
    await mongoose.connect("mongodb://127.0.0.1:27017/e-com")
   const ecomSchema= new mongoose.Schema({
        name:String
       
    })

    const ecomModel=mongoose.model('videos',ecomSchema)
    let data=new ecomModel({name:"m8"})
    let result= await data.save()
    console.log(result);
    
}
main()
