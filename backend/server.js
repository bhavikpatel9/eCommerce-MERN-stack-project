const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost/eCommerce_db")

const db = mongoose.connection

db.on("error",()=>{
    console.log("error while connecting to database")
})

db.once("open",()=>{
    console.log("successfully connected to database")
})

app.get("/",(req,res)=>{
    res.send("welcome to the ecommerce backend")
})

// Import route files
const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const cartItemRoutes = require('./routes/cart.routes');

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart-items', cartItemRoutes);

app.listen(3000,()=>{
    console.log("server started...")
})