import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PizzaList = () => {
    // State to hold pizza data fetched from the backend
    const [pizzas, setPizzas] = useState([]); // state to store pizzas

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
            }
        };
        fetchPizzas();
    }, []); // empty array dependency array means this effect funs only once when the component mounts
}

return (
    <div>
        <h2>Pizza Lists</h2>
        <ul>
            {/* Map over the pizzas array and display each pizza's name and description */}
            {pizzas.map((pizza) => (
                <li key={pizza._id}> {/* Pizzas unique _id used as the key */}
                    {pizza.name} - {pizza.description} {/* Display the pizza's name and description */}
                </li>
            ))}
        </ul>
    </div>
)

export default PizzaList;


// Break down of the code above
// import use effect and use state hooks from react
// import axios to make http requests
// use the useState hook to store the pizzas in the state
// useEffectt fetches data from the backend when the component mounts. it uses axios to make a GET request to the /pizzas endpoint and stores the response in the pizzas state variable
// the pizzas are displayed in an unordered list using the map function to iterate over the pizzas array and display each pizza's name and description