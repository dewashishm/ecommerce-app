const Product = require("../models/product")


//GET all products
exports.getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};


// CREATE product
exports.createProduct = async (req,res) => {
    try {

        const {id,brand,title, price, description,categories,rating} = req.body;
        const imagePath = req.files.map(file => file.path);

        const product = new Product({
            id,
            brand,
            title,
            price,
            image: imagePath,
            description,
            categories,
            rating
        });

        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};