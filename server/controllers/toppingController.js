const Topping = require('../models/topping'); // Import the Topping model

// Create a new topping
exports.createTopping = async (req, res) => {
    try {
        const topping = new Topping(req.body); // Create a new topping instance with the request body
        await topping.save(); // Save the topping to the database
        res.status(201).json(topping); // Respond with the newly created topping
    } catch (error) {
        res.status(400).json({ message: error.message }); // Respond with an error message
    }
};

// Get all toppings
exports.getAllToppings = async (req, res) => {
    try{
        const toppings = await Topping.find(); //Fetch all toppings from the database
        res.status(200).json(toppings); //Respond with the toppings data and a 200 status code
    } catch (error) {
        res.status(400).json({ message: error.message }); //Respond with an error message
    }
};

