const cart = require("../models/cartModel");

exports.addToCart = async (req, res) => {
    const {userId, productId} = req.body;

    try{
        const existingItem = await cart.findOne({userId, productId});

        if (existingItem) {
            existingItem.quantity += 1;
            await existingItem.save();
            return res.json(existingItem);
        }

        const newItem = new Cart({ userId, prdouctId});
        await newItem.save();

    res.json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getCartItems = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.find({ userId }).populate("productId");
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    await Cart.findOneAndDelete({ userId, productId });
    res.json({ message: "Item removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
