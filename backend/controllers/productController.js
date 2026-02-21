
const product = require("../models/product");


//GET all products
exports.getProducts = async (req, res) => {
    try{
        const products = await product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// CREATE product
exports.createProduct = async (req,res) => {
    try {
        const {title, price, image, description} = req.body;

        const product = new product({
            title,
            price,
            image,
            description
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
};