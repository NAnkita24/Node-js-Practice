const express=require('express')
const dbConnect=require('./Mongodb')
const app=express()

app.use(express.json());

app.put('/',async(req,resp)=>{
    let data= await dbConnect();
     
    let result= await data.updateOne({name:"max pro 5"},{$set:{prize:100}})
    resp.send({result:"update"});

    console.log(result);
})

app.listen(5000) 