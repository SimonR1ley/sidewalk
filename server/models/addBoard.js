const mongoose = require('mongoose');

const addBoard = mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    mini: { type: Number, required: true },
    mid: { type: Number, required: true },
    full: { type: Number, required: true },
    // image: { type: String, required: true },

});

module.exports = mongoose.model('boards', addBoard);
// date: {
//     type: Date,
//     default: Date.now
// }