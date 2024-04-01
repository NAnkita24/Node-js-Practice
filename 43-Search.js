const express=require('express')
require('./Config')
const product=require('./Product')
const app=express()
app.use(express.json())

app.get('/search/:key',async(req,resp)=>{
    let data=await product.find({
      "$or":[
        {"name":{$regex:req.params.key}}
      ]
    });


})
app.listen(5000)