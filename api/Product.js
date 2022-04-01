
const express = require("express");
const router = express.Router();
const axios = require('axios');

/**
 * GET product data from Nelson API
 *
 * @return product data
*/

const requestEndpoint = "http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json";

const getData = () => {
        return axios.get(requestEndpoint)
                .then(response => {
                        console.log(response.data)
                        return response.data
                })
                .catch(err => err);
}

router.get("/", async (req, res) => {
        try {
                const response = await getData();
                res.json(response);
        } catch (error) {
                console.error(error);
                return res.status(500).send("Server error");
        }
});


module.exports = router;