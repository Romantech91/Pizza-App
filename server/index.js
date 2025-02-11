const express = require('express'); // import express for server
const dotenv = require('dotenv'); // import dotenv for environment variables
dotenv.config(); // load environment variables from .env file
const mongoose = require('mongoose'); // import mongoose for MongoDB connection
const cors = require('cors'); // Cross-Origin Resource Sharing

// Set up express
const pizzaRoutes = require('./routes/pizzaRoutes.js'); // import pizza routes
const toppingRoutes = require('./routes/toppingRoutes.js'); // import topping routes
const app = express(); // create express app

// Middleware
app.use(cors()); // allows cross-origin requests from the frontend to the backend
app.use(express.json()); // parse JSON bodies

// Connect to MongoDB using mongoose and the connection string from the .env file
const MONGO_URI = 'mongodb+srv://victorroman1198:Colts18peyton@cluster0.zdpdz.mongodb.net/pizzadb?retryWrites=true&w=majority'; // get the MongoDB connection string from the .env file
mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB')) // Log a message if the connection is successful
    .catch((error) => console.error('Error connecting to MongoDB:', error)); // Log an error if the connection fails

// Use the pizza and topping routes
app.use('/api', pizzaRoutes); // use pizza routes
app.use('/api', toppingRoutes); // use topping routes

// Start the server on port 3000
const PORT = process.env.PORT || 3000; // use the port from the .env file or default to 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); // Log a message when the server starts



// In the code above, we have set up an Express server that connects to a MongoDB database using Mongoose. We have imported the pizza and topping routes and used them in the server. The server listens on port 3000 and logs a message when it starts. The server is set up to allow cross-origin requests from the frontend to the backend using the cors middleware. This server can be used to handle requests from a frontend application for a pizza ordering system.
    