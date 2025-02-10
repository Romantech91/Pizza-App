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
            </form>
            );
};

export default ToppingForm;

// In the code above, we have created a ToppingForm component that allows users to create or edit toppings. The component uses the useState hook to store the name of the topping in the state. The handleSubmit function is called when the form is submitted, and it sends a POST request to create a new topping or a PUT request to update an existing topping. The form title changes based on whether we are creating a new topping or editing an existing one. The input field for the topping name is controlled by the state, and the name state is updated when the input changes. After the form is submitted, the input field is cleared. This component can be used to create or edit toppings in the frontend of a pizza ordering application.