const cartRoutes = require("./routes/cartRoutes.js");
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');


dotenv.config();
connectDB();
const app = express();

app.use(cors({
  origin: "http://localhost:5174"
}));


app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.use('/api/auth', require("./routes/authRoutes"));
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', require("./routes/productRoutes"));
app.use("/uploads", express.static("uploads"));
app.use("/api/cart", cartRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})