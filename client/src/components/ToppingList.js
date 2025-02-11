import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ToppingList = () => {
    // State to hold the toppings fetched from the backend
    const [toppings, setToppings] = useState([]); // Initialize the toppings state as an empty array
    const [loading, setLoading] = useState(true); // Initialize the loading state as true

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
            } finally {
                setLoading(false); // Set loading to false after fetching toppings
            }
        };
        fetchToppings(); // Call the fetchToppings function when the component mounts
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div>
            <h2>Topping List</h2>
            {loading ? (
                <p>Loading toppings...</p>
            ) : toppings.length > 0 ? (
            <ul>
                {/* Loop through the toppings array and display each topping */}
                {toppings.map((topping) => (
                    <li key={topping._id}>{topping.name}</li> // Use the topping's unique _id as the key
                ))}
            </ul>
            ) : (
                <p>No toppings found</p>
            )}
        </div>
    );
};

export default ToppingList;

// In the code above, we have created a ToppingList component that fetches and displays a list of toppings from the backend. The component uses the useState hook to store the toppings in the state and the loading status. The useEffect hook fetches the toppings data when the component mounts by sending a GET request to the /toppings endpoint. The fetched toppings are stored in the toppings state, and the loading status is set to false after fetching the toppings. The toppings are displayed in an unordered list using the map function to iterate over the toppings array and display each topping's name. If there are no toppings found, a message is displayed. This component can be used to display a list of toppings in the frontend of a pizza ordering application.