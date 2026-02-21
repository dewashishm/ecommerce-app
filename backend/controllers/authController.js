const jwt = require("jsonwebtoken");
const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });

        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already Exists' });
        }

        //1. Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        //2. create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        //3. Send response
        res.status(201).json({
            message: 'User registered successfully',
            userId: user._id
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server errors', error: error.message });
    }
};


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;


        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Email is wrong" });
        }

        const enteredPassword = password;
        const hashedPassword = user.password;

        const isMatch = await bcrypt.compare(enteredPassword, hashedPassword);


        if (!isMatch) {
            return res.status(401).json({ message: "Password is wrong" });

        }

        // after password is verified
        const token = jwt.sign(
            { userId: user._id },     
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }    
        );

        res.status(200).json({
            message: "Login successfull",
            token: token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });


    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};



