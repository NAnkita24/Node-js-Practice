const express=require('express');
const  app=express();

app.get('',(req,resp)=>{
    resp.send("Hello! This is homepage")
})

app.get('/about',(req,resp)=>{
    resp.send("Hello! This is about page")
})

app.listen(5000);