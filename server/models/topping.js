const mongoose = require('mongoose');

const toppingSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }
});

const Topping = mongoose.model('Topping', toppingSchema);

module.exports = Topping;

//Breakdown of the code above:
//toppingSchema is where you define the structure of your data. In this case, we have a name field that is a required string and must be unique to not have any duplicates.
//mongoose.model('Topping', toppingSchema) is where you create a model based on the schema you defined. In this case, we create a Topping model.
//module.exports is where you export the Topping model to be used in other parts of the application.