const express = require('express'); // Import the express package
const router = express.Router(); // Create a new router using the express.Router() method
const toppingController = require('../controllers/toppingController.js'); // Import the topping controller

// Define the routes for the topping API

// Route to create a new topping
router.post('/toppings', toppingController.createTopping); //POST request to create a new topping

// Route to get all toppings
router.get('/toppings', toppingController.getAllToppings); //GET request to fetch all toppings

// Route to update an existing topping
router.put('/toppings/:id', toppingController.updateToppings); //PUT request to update a topping by ID

// Route to delete a topping
router.delete('/toppings/:id', toppingController.deleteToppings); //DELETE request to delete a topping by ID

module.exports = router; // Export the router to be used in the index.js file


// Breakdown of the code above:
// express.router() is used to create a new router instance that can be used to define routes for the topping API.
//router.post('/toppings', toppingController.createTopping) defines a POST route to create a new topping using the createTopping function from the topping controller.
//router.get('/toppings', toppingController.getAllToppings) defines a GET route to fetch all toppings using the getAllToppings function from the topping controller.
//router.put('/toppings/:id', toppingController.updateTopping) defines a PUT route to update an existing topping by ID using the updateTopping function from the topping controller.
//router.delete('/toppings/:id', toppingController.deleteTopping) defines a DELETE route to delete a topping by ID using the deleteTopping function from the topping controller.