const express = require('express');
const cors = require('cors');
const axios = require('axios');
const product = require("./api/product");
const cross_selling_products = require("./api/crosssellingproducts");

const app = express();
app.use(cors());

const requestEndpoint = "http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json";
const requestEndPointCrossProducts = "http://dump.dataplatform.shoes/20201005_frontend_assignment/cross_sell_products_for_362950.json";

const getProducts = () => {
        return axios.get(requestEndpoint)
                .then(response => {
                        console.log(response.data)
                        return response.data
                }).catch(err => err);
}

const getCrossSellingProducts = () => {
    return axios.get(requestEndPointCrossProducts)
            .then(response => {
                    console.log(response.data)
                    return response.data
            }).catch(err => err);
}

// This function runs if the http://localhost:5000/getData endpoint is requested with a GET request
//  

app.get('/CrossSellingProducts', async (req, res) => {
    const response = await getCrossSellingProducts();
    console.log(res.json(response));
});

app.use("/api/product", product);
app.use("/api/crosssellingproducts", cross_selling_products);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server Running on port ${port}`));

module.exports = app;
