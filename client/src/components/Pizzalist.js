import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PizzaList = () => {
    const [pizzas, setPizzas] = useState([]); // state to store pizzas

    // fetch pizzas from the server
    useEffect(() => {
        const fetchPizzas = async () => {
            try{
                const response = await axios.get('http://localhost:5000/api/pizzas');
                setPizzas(response.data); // Set the fetched pizzas to state
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
            {pizzas.map((pizza) => (
                <li key={pizza._id}>
                    {pizza.name} - {pizza.description}
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