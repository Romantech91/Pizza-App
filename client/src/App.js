import React, { useState } from 'react';
import PizzaList from './components/Pizzalist';
import PizzaForm from './components/PizzaForm';

const App = () => {
    const [pizzaToEdit, setPizzaToEdit] = useState(nnull); // State to hold the pizza we are editing

    return (
        <div>
            {/* Passing the setpizzaToEdit to pizzaForm and pizzalist to allow editing a pizza */}
            <PizzaForm pizzaToEdit={pizzaToEdit} setPizzaToEdit={setPizzaToEdit} />
            <PizzaList setPizzaToEdit={setPizzaToEdit} />

        </div>
    );
};

export default App;