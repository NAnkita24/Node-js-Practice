const express=require('express');
const  app=express();

app.get('',(req,resp)=>{
    resp.send("Hello! This is homepage")
})

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type=text placeholder="name"/,
    <button ></button>`)
})

app.listen(5000);