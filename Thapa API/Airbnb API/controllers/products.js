const Product = require("../models/product")


const getAllproducts = async (req, res) => {
    const { company } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
        console.log(queryObject);
    }
    
    const myProducts = await Product.find(queryObject);
    res.status(200).json({ myProducts });
};
const getAllproductsTesting = async (req, res) => {
    const myProducts = await Product.find(req.query);
    res.status(200).json({ myProducts });

};


module.exports = { getAllproducts, getAllproductsTesting };

