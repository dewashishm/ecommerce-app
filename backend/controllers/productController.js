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
            images: imagePath,
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

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if(!product) {

            return res.status(404).json({ message: "Product not found"});
        }

        res.json(product);

    } catch(error) {
        res.status(500).json({message: "error"});
    }

};


exports.getProductByCategory = async (req, res) => {
    try{
        const category = req.params.category;

        const products = await Product.find({
  categories: new RegExp(`^${category}$`, "i")
});

        res.json(products);


    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
};