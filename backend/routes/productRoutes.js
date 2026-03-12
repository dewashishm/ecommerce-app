const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const {
    getProducts,
    createProduct,
    getProductById,
    getProductByCategory
} = require("../controllers/productController");



router.get("/", getProducts);
router.post(
    "/", upload.array("images",5), createProduct);

router.get("/categories/:category", getProductByCategory);
router.get("/:id", getProductById);


module.exports = router;