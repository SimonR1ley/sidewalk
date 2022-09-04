const mongoose = require('mongoose');

const cart = mongoose.Schema({
    productName: { type: String, required: true },
    username: { type: String, required: true },
    // productId: { type: Number, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    mini: { type: Number, required: true },
    mid: { type: Number, required: true },
    full: { type: Number, required: true },

  

});

module.exports = mongoose.model('cart', cart);
// date: {
//     type: Date,
//     default: Date.now
// }