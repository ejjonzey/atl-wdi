//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// //create your donut schema:

var newDonuts = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number,
});
var DonutModel = mongoose.model('Donut', newDonuts);
// //export your donut with module.exports()
module.exports = DonutModel;