import React, { useState } from 'react';
import PizzaList from './components/Pizzalist';
import PizzaForm from './components/PizzaForm';
import ToppingList from './components/ToppingList';
import ToppingForm from './components/ToppingForm';

const App = () => {
    const [pizzaToEdit, setPizzaToEdit] = useState(nnull); // State to hold the pizza we are editing
    const [toppingToEdit, setToppingToEdit] = useState(null); // State to hold the topping we are editing

    return (
        <div>
            {/* Passing the setpizzaToEdit to pizzaForm and pizzalist to allow editing a pizza */}
            <PizzaForm pizzaToEdit={pizzaToEdit} setPizzaToEdit={setPizzaToEdit} />
            <PizzaList setPizzaToEdit={setPizzaToEdit} />

            {/* Passing the setToppingToEdit to toppingForm and toppingList to allow editing a topping */}
            <ToppingForm toppingToEdit={toppingToEdit} setToppingToEdit={setToppingToEdit} />
            <ToppingList />
        </div>
    );
};

export default App;

// In the code above, we have created an App component that renders the PizzaForm, PizzaList, ToppingForm, and ToppingList components. The App component uses the useState hook to store the pizza and topping we are editing. The setPizzaToEdit and setToppingToEdit functions are passed down to the PizzaForm, PizzaList, ToppingForm, and ToppingList components to allow editing of pizzas and toppings. The PizzaForm component is used to create or edit pizzas, the PizzaList component displays a list of pizzas, the ToppingForm component is used to create or edit toppings, and the ToppingList component displays a list of toppings. This App component can be used as the main entry point for a pizza ordering application frontend.