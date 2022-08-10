const findage = require('findage');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index');
})

app.listen(5000, () => {
    console.log('App is listing on port 5000');
})


console.log(findage.fullAge("12/09/1989"));