const getAllproducts = async (req, res) => {
    res.status(200).send({ msg: "i am get All Products" });
};
const getAllproductsTesting = async (req, res) => {
    res.status(200).send({ msg: "i am get All Products Testing" });
};


module.exports = { getAllproducts, getAllproductsTesting };

