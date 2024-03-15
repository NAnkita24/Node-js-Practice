const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/profile', (req, resp) => {
    const user = {
        name: 'Ankita jagtap',
        age: 22
    }
    resp.render('profile', { user })
})

app.listen(4500)