import React, { useState } from 'react';
import axios from 'axios';

const ToppingForm = ({ toppingToEdit, setToppingToEdit }) => {
    // State for the name of the topping (input field)
    const [name, setName] = useState(toppingToEdit ? toppingToEdit.name : ''); // if editing, prefill with topping data

    //handleSubmit function handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission (page refresh)

        const toppingData = { name }; // Create a topping object with the input data
        try {
            // Check if we are editing or adding a topping
            if (toppingToEdit) {
                await axios.put(`http://localhost:3000/api/toppings/${toppingToEdit._id}`, toppingData);
                setToppingToEdit(null); // Reset the toppingToEdit state after updating
            } else {
                // if creating, send a POST request to create a new topping
                await axios.post('http://localhost:3000/api/toppings', toppingData);
            }
            // After the form is submitted, clear the input fields
            setName('');
        } catch (error) { console.error('Error submitting topping form:', error);

        }
    };

    const handleDelete = async () => {
        if (toppingToEdit) {
            try {
                // Send a DELETE request to delete the topping by its ID
                await axios.delete(`http://localhost:3000/api/toppings/${toppingToEdit._id}`);
                setToppingToEdit(null); // Reset the toppingToEdit state after deleting
                setName(''); // Reset the name input field
            } catch (error) {
                console.error('Error deleting topping:', error); // Log any errors
            }
        }
    };

    return ( <form onSubmit={handleSubmit}> {/* Trigger handleSubmit when the form is submitted */}
                <h2>{toppingToEdit ? 'Edit Topping' : 'Create New Topping'}</h2> {/* Change the form title based on whether we are editing or creating a topping */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name} // value of input field is controlled by the state
                        onChange={(e) => setName(e.target.value)} // update the name state when the input changes
                    />
                </div>
                <button type="submit">{toppingToEdit ? 'Update Topping' : 'Create Topping'}</button> {/* Button text changes based on whether we are editing or creating a topping */}
                {toppingToEdit && (
                    <button type="button" onClick={handleDelete}>Delete Topping</button>
                )}
            </form>
            );
};

export default ToppingForm;

//Breakdown of the code above:
//The ToppingForm component is used to create or edit a topping.
//useState is used to manage the state of the topping name input field.
//The handleSubmit function is triggered when the form is submitted. It sends a POST request to create a new topping or a PUT request to update an existing topping.
//The handleDelete function is triggered when the delete button is clicked. It sends a DELETE request to delete the topping. 