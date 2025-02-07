const Pizza = require('../models/pizza');
const Topping = require('../models/topping');

// Create a new pizza
exports.createPizza = async (req, res) => {
    try {
        const pizza = new Pizza(req.body); // Create a new pizza instance with the request body
        await pizza.save(); // Save the pizza to the database
        res.status(201).json(pizza); // Respond with the newly created pizza
    } catch (error) {
        res.status(400).json({ message: error.message }); // Respond with an error message
    }
};

// Get all pizzas
exports.getAllPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.find().populate('toppings'); // Find all pizzas and populate the toppings field with data from the Topping model
        res.status(200).json(pizzas); // Respond with the pizzas data and a 200 status code
    } catch (error) {
        res.status(400).json({ message: error.message }); // Respond with an error message
    }
};

//Update a pizza
exports.updatePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Find a pizza by ID and update it with the request body
        if (!pizza) {
            return res.status(404).json({ message: 'Pizza not found' }); // If the pizza is not found, respond with an error message
        }
        res.status(200).json(pizza); // Respond with the updated pizza
    } catch (error) {
        res.status(400).json({ message: error.message }); // Respond with an error message
    }
}; 

// Delete a pizza
exports.deletePizza = async (req, res) => {
    try {
        const pizza = await Pizza.findByIdAndDelete(req.params.id); //Find a pizza by ID and delete it
        if (!pizza) {
            return res.status(404).json({ message: 'Pizza not found' }); // If the pizza is not found, respond with an error message
        }
        res.status(200).json({ message: 'Pizza deleted successfully' }); // Respond with a success message
    } catch (error) {
        res.status(400).json({ message: error.message }); // Respond with an error message
    }
};


// Breakdown of the code above:
// The createPizza function creates a new pizza instance with the request body, saves it to the database, and responds with the newly created pizza.
// The getAllPizzas function finds all pizzas in the database and populates the toppings field with data from the Topping model before responding with the pizzas data.
// The updatePizza function finds a pizza by ID, updates it with the request body, and responds with the updated pizza.
// The deletePizza function finds a pizza by ID and deletes it before responding with a success message.