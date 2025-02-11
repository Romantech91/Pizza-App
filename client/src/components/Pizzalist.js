import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PizzaList = () => {
    // State to hold pizza data fetched from the backend
    const [pizzas, setPizzas] = useState([]); // state to store pizzas
    const [loading, setLoading] = useState(true); // state to store loading status

    // useEffect hook to fetch pizzas when the component mounts
    useEffect(() => {
        // Async function to fetch pizzas
        const fetchPizzas = async () => {
            try{
                // Make a GET request to the backend
                const response = await axios.get('http://localhost:3000/api/pizzas');
                setPizzas(response.data); // Update the pizzas state with the response data
            } catch (error) {
                console.error('Error fetching pizzas: ', error);
            } finally {
                setLoading(false); // Set loading to false after fetching pizzas
            }
        };
        fetchPizzas();
    }, []); // empty array dependency array means this effect funs only once when the component mounts


return (
    <div>
        <h2>Pizza List</h2>
        {loading ? (<p>Loading Pizzas...</p>) : pizzas.length > 0 ? (
        <ul>
            {/* Map over the pizzas array and display each pizza's name and description */}
            {pizzas.map((pizza) => (
                <li key={pizza._id}> {/* Pizzas unique _id used as the key */}
                    {pizza.name} - {pizza.description} {/* Display the pizza's name and description */}
                </li>
            ))}
        </ul>
) : ( <p>No pizzas found</p> )}
    </div>
);
};

export default PizzaList;


// In the code above, we have created a PizzaList component that fetches and displays a list of pizzas from the backend. The component uses the useState hook to store the pizzas in the state and the loading status. The useEffect hook fetches the pizza data when the component mounts by sending a GET request to the /pizzas endpoint. The fetched pizzas are stored in the pizzas state, and the loading status is set to false after fetching the pizzas. The pizzas are displayed in an unordered list using the map function to iterate over the pizzas array and display each pizza's name and description. If there are no pizzas found, a message is displayed. This component can be used to display a list of pizzas in the frontend of a pizza ordering application.