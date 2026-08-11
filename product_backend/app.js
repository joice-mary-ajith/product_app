const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.disable("x-powered-by");

const port = process.env.PORT || 3000;

const productRoutes= require('./routes/productRoutes');
const Product= require('./models/Product');
const db= require('./config/db')
db();
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.json());
app.use('/products',productRoutes);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

