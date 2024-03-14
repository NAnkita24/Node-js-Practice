const express=require('express');
const path=require('path');
const app=express();
const filepath=path.join(__dirname,'files')
console.log(filepath);

app.use(express.static(filepath))

app.listen(5000)