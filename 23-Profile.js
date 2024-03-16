const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/profile', (req, resp) => {
    const user = {
        name: 'Ankita jagtap',
        age: 22,
        email:'apjagtap21@gmail.com',
        skills:['c++','php','html','java']
    }
    resp.render('profile', { user })
})

app.get('/login',(req,resp)=>{
    resp.render('login')
})
app.listen(4500) 