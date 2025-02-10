const express = require('express'); // Import the express package
const router = express.Router(); // Create a new router using the express.Router() method
const pizzaController = require('../controllers/pizzaController'); // Import the pizza controller

// Define the routes for the pizza API

// Route to create a new pizza
router.post('/pizzas', pizzaController.createPizza); //POST request to create a new pizza

// Route to get all pizzas with toppings
router.get('/pizzas', pizzaController.getAllPizzas); //GET request to fetch all pizzas with toppings

// Route to update an existing pizza
router.put('/pizzas/:id', pizzaController.updatePizza); //PUT request to update a pizza by ID

// Route to delete a pizza
router.delete('/pizzas/:id', pizzaController.deletePizza); //DELETE request to delete a pizza by ID

module.exports = router; // Export the router to be used in the index.js file


// Breakdown of the code above:
// express.router() is used to create a new router instance that can be used to define routes for the pizza API.
// router.post('/pizzas', pizzaController.createPizza) defines a POST route to create a new pizza using the createPizza function from the pizza controller.
// router.get('/pizzas', pizzaController.getAllPizzas) defines a GET route to fetch all pizzas with toppings using the getAllPizzas function from the pizza controller.
// router.put('/pizzas/:id', pizzaController.updatePizza) defines a PUT route to update an existing pizza by ID using the updatePizza function from the pizza controller.
// router.delete('/pizzas/:id', pizzaController.deletePizza) defines a DELETE route to delete a pizza by ID using the deletePizza function from the pizza controller.
// module.exports = router; exports the router to be used in the main server file.