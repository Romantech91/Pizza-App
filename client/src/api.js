import axios from "axios";


const API_BASE_URL = "http://localhost:3000"; 

// API call to create a new pizza
const createPizza = async (pizzaData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/pizzas`, pizzaData);
    return response.data; // Return the response data after the pizza is created
  } catch (error) {
    console.error("Error creating pizza:", error);
    throw error; // Throw error for handling in the component if needed
  }
};

// API call to fetch all pizzas with toppings
const getAllPizzas = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pizzas`);
    return response.data; // Returns the list of pizzas with their toppings
  } catch (error) {
    console.error("Error fetching pizzas:", error);
    throw error;
  }
};

// API call to update an existing pizza by ID
const updatePizza = async (pizzaId, pizzaData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/pizzas/${pizzaId}`, pizzaData);
    return response.data; // Return the updated pizza data
  } catch (error) {
    console.error("Error updating pizza:", error);
    throw error;
  }
};

// API call to delete a pizza by ID
const deletePizza = async (pizzaId) => {
  try {
    await axios.delete(`${API_BASE_URL}/pizzas/${pizzaId}`);
    return "Pizza deleted successfully"; // Return success message
  } catch (error) {
    console.error("Error deleting pizza:", error);
    throw error;
  }
};

// API call to create a new topping
const createTopping = async (toppingData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/toppings`, toppingData);
    return response.data;
  } catch (error) {
    console.error("Error creating topping:", error);
    throw error;
  }
};

// API call to fetch all toppings
const getAllToppings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/toppings`);
    return response.data;
  } catch (error) {
    console.error("Error fetching toppings:", error);
    throw error;
  }
};

// API call to update an existing topping by ID
const updateTopping = async (toppingId, toppingData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/toppings/${toppingId}`, toppingData);
    return response.data;
  } catch (error) {
    console.error("Error updating topping:", error);
    throw error;
  }
};

// API call to delete a topping by ID
const deleteTopping = async (toppingId) => {
  try {
    await axios.delete(`${API_BASE_URL}/toppings/${toppingId}`);
    return "Topping deleted successfully";
  } catch (error) {
    console.error("Error deleting topping:", error);
    throw error;
  }
};

// Export the API functions for use in components
export {
  createPizza,
  getAllPizzas,
  updatePizza,
  deletePizza,
  createTopping,
  getAllToppings,
  updateTopping,
  deleteTopping,
};


// In the code above, we have defined API functions to interact with the backend server for creating, fetching, updating, and deleting pizzas and toppings. These functions use axios to make HTTP requests to the backend API endpoints. The functions handle errors and return the response data or throw an error for handling in the component. These functions can be imported and used in React components to interact with the backend server and perform CRUD operations on pizzas and toppings.
