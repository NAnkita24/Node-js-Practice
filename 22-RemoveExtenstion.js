const express=require('express');
const path=require('path');
const app=express();
const filepath=path.join(__dirname,'')
console.log(filepath);

app.use(express.static(filepath))

app.get('21_about.html',(_,resp) =>{
resp.sendFile(`${filepath}/21_about.html`)
})

app.get('*',(_,resp) =>{
    resp.sendFile(`${filepath}/22-nopage.html`)
    })

app.listen(5000)