const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema= new Schema({
    name: String,
    active: {type: Boolean, default: true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;