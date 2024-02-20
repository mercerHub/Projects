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

const p = new Product({
    name : 'Ruby Grapefruit',
    price : 1.99,
    catagory:'fruit'
})

const dummyProducts = [
    { name: 'Apple', price: 1.99, category: 'fruit' },
    { name: 'Broccoli', price: 2.49, category: 'vegetables' },
    { name: 'Milk', price: 3.99, category: 'dairy' },
    { name: 'Banana', price: 0.99, category: 'fruit' },
    { name: 'Carrot', price: 1.29, category: 'vegetables' },
    { name: 'Cheese', price: 5.49, category: 'dairy' },
    { name: 'Orange', price: 1.49, category: 'fruit' },
    { name: 'Lettuce', price: 1.79, category: 'vegetables' },
    { name: 'Yogurt', price: 2.99, category: 'dairy' }
];

Product.insertMany(dummyProducts)
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log(err);
})
