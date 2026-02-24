const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");


const {
    getProducts,
    createProduct
} = require("../controllers/productController");



router.get("/", getProducts);
router.post(
    "/", upload.array("image",5), createProduct);

    

module.exports = router;