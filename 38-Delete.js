const express=require('express')
const mongodb=require('mongodb')
const dbConnect=require('./Mongodb')
const app=express();

app.delete('/:id',async(req,resp)=>{
console.log(req.params.id);
let data=await dbConnect();
let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
resp.send('done')

})
app.listen(5000)