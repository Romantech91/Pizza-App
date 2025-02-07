const Pizza = require('../models/pizza');
const Topping = require('../models/topping');

exports.createPizza = async (req, res) => {
    try {
        const pizza = new Pizza(req.body);
        await pizza.save();
        res.status(201).json(pizza);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllPizzas = async (req, res) => {
    try {
        const pizzas = await Pizza.find().populate('toppings');
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

