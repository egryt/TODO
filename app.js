const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req,res) => {
    const items = [
        {name: 'abstain', task: 'build todo'},
        {name: 'anna', task: 'add items'},
        {name: 'actor', task: 'build frontend'},
        {name: 'athra', task: 'add authentication'}
    ]
    res.render('index', { items });
})

app.get('/add-item', (req,res) => {
    res.render('add-item')
})

app.use((req,res) => {
    res.render('error')
})