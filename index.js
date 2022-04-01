const express = require('express');
const cors = require('cors');
const axios = require('axios');

// API Points
const product = require("./api/product");
const cross_selling_products = require("./api/crosssellingproducts");

const app = express();
app.use(cors());

app.use("/api/product", product);
app.use("/api/crosssellingproducts", cross_selling_products);

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

module.exports = app;
