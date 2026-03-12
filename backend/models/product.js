const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required:true
    },
    description: {
        type: String,
        required: true
    },
    categories:{
        type: String,
        required:true
    },
    rating:{
        type: Number,
        required: true
    }
}, {timestamp:true});

module.exports= mongoose.model("Product", productSchema);