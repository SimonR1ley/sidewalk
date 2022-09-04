const mongoose = require('mongoose');

const orders = mongoose.Schema({
    productName: { type: String, required: true },
    username: { type: String, required: true },
    address: { type: String, required: true },
    deliveryPrice: { type: String, required: true },
    price: { type: Number, required: true },
    mini: { type: Number, required: true },
    mid: { type: Number, required: true },
    full: { type: Number, required: true },

});

module.exports = mongoose.model('orders', orders);
// date: {
//     type: Date,
//     default: Date.now
// }