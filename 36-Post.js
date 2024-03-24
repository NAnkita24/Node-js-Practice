const express=require('express')
const dbConnect=require('./Mongodb')
const app=express()

app.use(express.json());

app.post('/',async(req,resp)=>{
    let data= await dbConnect();
    let result=await data.insert(req.body)
    resp.send(result);
})

app.listen(5000)