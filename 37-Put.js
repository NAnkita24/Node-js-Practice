const express=require('express')
const dbConnect=require('./Mongodb')
const app=express()

app.use(express.json());

app.put('/',async(req,resp)=>{
     let data= await dbConnect();
     
     let result= data.updateOne({name:"Redmi prime"},{$set:{prize:400}})
    resp.send({result:"update"});
})

app.listen(5000) 