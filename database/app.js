const express = require('express');
const bodyParser = require('body-parser')
const productRouter = require('./routes/products')
const userRouter = require('./routes/users')


require('dotenv').config();

const PORT = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json());

app.use('/products', productRouter);
app.use('/users', userRouter);


app.get('/', (req, res) => {
    res.send('Welcome to  the products API')
})

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: err.message
    })
})

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})