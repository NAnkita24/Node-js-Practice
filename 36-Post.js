const express=require('express')
const dbConnect=require('./Mongodb')
const app=express()

app.use(express.json());

app.post('/',(req,resp)=>{
    console.log(req.body);
    resp.send({name:"Nokia 10"})
})