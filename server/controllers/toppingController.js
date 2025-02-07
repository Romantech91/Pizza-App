const Topping = require('../models/topping'); // Import the Topping model

// Create a new topping
exports.createTopping = async (req, res) => {
    try {
        // Check if the topping already exists
        const existingTopping = await Topping.findOne({ name: req.body.name });
    if (existingTopping) {
      return res.status(400).json({ message: 'Topping already exists' });
    }
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

// Update a topping
exports.updateToppings = async (req, res) => {
    try {
        const topping = await Topping.findByIdAndUpdate(req.params.id, req.body, { new: true }); //Find a topping by ID and update it.
        if (!topping) {
            return res.status(404).json({ message: 'Topping not found' }); //If the topping is not found, respond with an error message
        }
        res.status(200).json(topping); //Respond with the updated topping
    } catch (error) {
        res.status(400).json({ message: error.message }); //Respond with an error message
    }
};

// Delete a topping
exports.deleteToppings = async (req, res) => {
    try {
        const topping = await Topping.findByIdAndDelete(req.params.id); //Find a topping by ID and delete it
        if (!topping) {
            return res.status(404).json({ message: 'Topping not found' }); //If the topping is not found, respond with an error message
        }
        res.status(200).json({ message: 'Topping deleted successfully' }); //Respond with a success message
    } catch (error) {
        res.status(400).json({ message: error.message }); //Respond with an error message
    }
};


// Breakdown of the code above:
// the createTopping function checks if a topping with the same name already exists, creates a new topping instance with the request body, saves it to the database, and responds with the newly created topping.
// The getAllToppings function fetches all toppings from the database and responds with the toppings data.
// The updateToppings function finds a topping by ID, updates it with the request body, and responds with the updated topping.
// The deleteToppings function finds a topping by ID and deletes it before responding with a success message.