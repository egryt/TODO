const express = require('express');
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const Item = require('./models/items')
const app = express();
// const MONGO_URI = 'mongodb+srv://sahil:<<<pass>>>@cluster0.qvrhn.mongodb.net/'
mongodb.MongoClient.connect(MONGO_URI, {})
.then(client => {
    console.log("--connection established--", client.db("item-database").databaseName)
    db = client.db("item-database")
}).then(collections => {
    console.log("\n--existing collections--", collections)
//    return db.collection("Anime").insertMany(newSet)
    // return db.collection("Items").insertOne({name: "something", task:"jhadu"})
 
})

// mongoose.connect(mongodb).then(() => console.log('connected')).catch(err => console.log(err))
app.set('view engine', 'ejs');
app.listen(3000);


// app.get('/create-item', (req,res)=> {
//     const item = new Item({
//         name:'something',
//         task:'doable2'
//     });
//     item.save().then(result => res.send(result)).catch(err =>
//         cconsole.log(err))

// })
app.get('/', (req,res) => {
    res.redirect('/get-item');
    // const items = [
    //     {name: 'abstain', task: 'build todo'},
    //     {name: 'anna', task: 'add items'},
    //     {name: 'actor', task: 'build frontend'},
    //     {name: 'athra', task: 'add authentication'}
    // ]
    // res.render('index', { items });
})


app.get('/get-item', (req,res) => {
    Item.find().then(result => res.send(result))
    
})

app.get('/add-item', (req,res) => {
    res.render('add-item')
})

app.use((req,res) => {
    res.render('error')
})