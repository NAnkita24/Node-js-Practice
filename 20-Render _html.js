const express=require('express');
const  app=express();

app.get('',(req,resp)=>{
    resp.send(`<h1>Hello! This is homepage </h1> <a href="/about"> </a>`)
})

app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="name" value="${req.query.name}"/>
    <button>Click Me</button>`)
})

app.listen(5000);