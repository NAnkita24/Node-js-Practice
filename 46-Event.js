const express=require('express');
const EventEmitter =require('events')
const app=express();
const event=new EventEmitter();

let count=0;
event.on("countApi",()=>{
count++;
console.log("Api count "+count);
})

app.get('/',(req,resp)=>{
    resp.send("API called");
    event.emit("countApi")
})

app.get('/search',(req,resp)=>{
    resp.send(" search API called");
    event.emit("countApi")
})

app.listen(5000)