const express=require('express')
require('./Config')
const product=require('./Product')
const app=express()
app.use(express.json())

app.post('/create',(req,resp)=>{
     const data=new product(req.body)
    console.log(resp.body);
    resp.send('done');
})

app.get('/list',async(req,resp)=>{
    const data=await product.find()
    resp.send(data)
})

app.delete('/delete/:_id',async(req,resp)=>{
    console.log(req.params);
    const data=await product.deleteOne(req.params)
    resp.send("done")
})

app.put('/update/:_id',async(req,resp)=>{
    console.log(req.params);
    const data=await product.updateOne(
        req.params,
    {
        $set:req.body
    }
    )
    resp.send("done" )
})


app.listen(3609)