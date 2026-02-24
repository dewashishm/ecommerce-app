const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const { connect } = require('mongoose');
const cors = require('cors');


dotenv.config();
connectDB();
const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));


app.use(express.json());

app.use('/api/auth', require("./routes/authRoutes"));
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', require("./routes/productRoutes"));
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})