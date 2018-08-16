const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familyProductSchema = new Schema({
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    family: {type: Schema.Types.ObjectId, ref: 'Family'},
    link: String,
    active: {type: Boolean, default: true}
});

const FamilyProduct = mongoose.model('FamilyProduct', familyProductSchema);

module.exports = FamilyProduct;