const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand',{useNewUrlParser : true})
    .then(() =>{
    console.log("CONNECTION OPEN !!!")
    })
    .catch(err =>{
    console.log("OH BOY !!!")
    console.log(err)
    })


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/products',async (req,res) => {
    const products = await Product.find({})
    res.render('products/index',{products});
})

app.listen(3000,()=>{
    console.log("Listening on Port 3000!");
})
