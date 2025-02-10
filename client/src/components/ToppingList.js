import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ToppingList = () => {
    // State to hold the toppings fetched from the backend
    const [toppings, setToppings] = usseState([]); // Initialize the toppings state as an empty array

    // useEffect hook to fetch toppings when the component mounts
    useEffect(() => {
        // Function to fetch toppings data from the backend
        const fetchToppings = async () => {
            try {
                // Sending a GET request to fetch toppings from the backend
                const response = await axios.get('http://localhost:3000/api/toppings');
                setToppings(response.data); // Storing the fetched toppings in the toppings state
            } catch (error) {
                console.error('Error fetching toppings:', error); // Log any errors
            }
        };
        fetchToppings(); // Call the fetchToppings function when the component mounts
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div>
            <h2>Topping List</h2>
            <ul>
                {/* Loop through the toppings array and display each topping */}
                {toppings.map((topping) => (
                    <li key={topping._id}>{topping.name}</li> // Use the topping's unique _id as the key
                ))}
            </ul>
        </div>
    );
};

export default ToppingList;

// In the code above, we have created a ToppingList component that fetches toppings data from the backend and displays the list of toppings. We use the useState hook to store the toppings in the state and the useEffect hook to fetch the toppings when the component mounts. The fetched toppings are displayed in an unordered list using the map function to iterate over the toppings array and display each topping's name. The key for each topping is set to the topping's unique _id. This component can be used to display a list of toppings in the frontend of a pizza ordering application.