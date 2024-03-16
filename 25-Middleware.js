const express=require('express');
const reqfilter=require("./Middleware")
const app=express();
const route=express.Router();

// const reqfilter=(req,resp,next)=>{
//     if (!req.query.age) {
//         resp.send("Please provide age")
//     } 
//     else if(req.query.age<18){
//         resp.send("you can not access this page")
//     }
//     else{
//         next();

//     }
// }
// app.use(reqfilter)

route.use(reqfilter)

app.get('/',(req,resp)=>{
    resp.send("Welcome to home page")
})

app.get('/user',(req,resp) =>{
    resp.send("Welcome to  home page")
})

route.get('/about',(req,resp)=>{
    resp.send("Welcome to about page")
})

route.get('/contact',(req,resp)=>{
    resp.send("Welcome to contact page")
})

app.use('/',route)
app.listen(5000) 