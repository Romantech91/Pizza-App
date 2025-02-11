import React, { useState } from 'react'; 
import axios from 'axios';

const PizzaForm = ({ pizzaToEdit, setPizzaToEdit }) => {
    // State for pizza name and description that will be controlled inputs
    const [name, setName] = useState(pizzaToEdit ? pizzaToEdit.name : ''); // if editing, prefill with pizza data
    const [description, setDescription] = useState(pizzaToEdit ? pizzaToEdit.description : ''); // if editing, prefill with pizza data

    //Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); //Prevent the default form submission (page refresh)

        if (!name || !description) {
            alert('Please enter a name and description for the pizza'); // Alert the user if the name or description is missing
            return;
        }
        
        //Create a pizza object with the inout data and the current date
        const pizzaData = { name, description };

        try {
            // Check if we are editing or adding a pizza
            if (pizzaToEdit) {
                // if editing, send a PUT request to update the pizza by its ID
                await axios.put (`http://localhost:3000/api/pizzas/${pizzaToEdit._id}`, pizzaData);
                setPizzaToEdit(null); //Resets the pizzaToEdit state after updating
            } else {
                // If creating, send a post request to create a new pizza
                await axios.post('http://localhost:3000/api/pizzas', pizzaData);
            }
            // Optionally, you could refetch pizzas here or reset form fields
            setName(''); // Reset the name input field
            setDescription(''); // Reset the description input field
        } catch (error) {
            console.error('Error submitting pizza form:', error); // Log any errors
        }
    
};

const handleDelete = async () => {
    if (pizzaToEdit) {
        try {
            // Send a DELETE request to delete the pizza by its ID
            await axios.delete(`http://localhost:3000/api/pizzas/${pizzaToEdit._id}`);
            setPizzaToEdit(null); // Reset the pizzaToEdit state after deleting
            setName(''); // Reset the name input field
            setDescription(''); // Reset the description input field
        } catch (error) {
            console.error('Error deleting pizza:', error); // Log any errors
        }
    }
};

return (
    <form onSubmit={handleSubmit}> {/* Trigger handleSubmit when the form is submitted */}
    <h2>{pizzaToEdit ? 'Edit Pizza' : 'Create New Pizza'}</h2> {/* Change the form title based on whether we are editing or creating a pizza */}
    <div>
        <label>Name:</label>
        <input
            type="text"
            value={name} // Controlled input for pizza name
            onChange={(e) => setName(e.target.value)} // Update the name state when the input changes
            /> 
    </div>
    <div>
        <label>Description:</label>
        <input
            type="text"
            value={description} // Controlled input for pizza description
            onChange={(e) => setDescription(e.target.value)} // Updates the description state when the input changes 
            />
    </div>
    <button type="submit">{pizzaToEdit ? 'Update Pizza' : 'Create Pizza'}</button> {/* Button text changes based on whether we are editing or creating a pizza */}
    {pizzaToEdit && (
        <button type="button" onClick={handleDelete}>Delete Pizza</button>
    )}
    </form>
);
};

export default PizzaForm;

// Breakdown of the code above
// The PizzaForm component is a functional component that takes in the pizzaToEdit state and setPizzaToEdit function as props.
// The component uses the useState hook to create controlled inputs for the pizza name and description.
// The handleSubmit function is called when the form is submitted. It checks if the name and description are provided, creates a pizzaData object, and sends a POST or PUT request to the API to create or update a pizza.
// The handleDelete function is called when the "Delete Pizza" button is clicked. It sends a DELETE request to the API to delete the pizza by its ID.
// The form displays the appropriate title based on whether we are editing or creating a pizza.
// The form inputs are controlled inputs that update the name and description states when the user types in the input fields.
// The button text changes based on whether we are editing or creating a pizza.
// If we are editing a pizza, a "Delete Pizza" button is displayed that calls the handleDelete function when clicked.