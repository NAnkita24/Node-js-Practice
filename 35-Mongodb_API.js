const express=require('express')
const dbConnect=require('./Mongodb')
const app=express()

app.get('/',async(req,resp)=>{
let db=await dbConnect();
db=await db.find().toArray();
console.log(db);
resp.send(db)
})
app.listen(5000)