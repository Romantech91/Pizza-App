const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    toppings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Topping' }]
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;

//Breakdown of the code above:
//mongoose.Schema() is where you define the structure of your data. In this case, we have a name, description, and toppings field.
//The name field is a required string and must be unique to not have any duplicates.
//The description field is a string.
//The toppings field is an array of ObjectIds that reference the Topping model.
//mongoose.model() is where you create a model based on the schema you defined. In this case, we create a Pizza model.
//module.exports is where you export the Pizza model to be used in other parts of the application.