const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    name: String,
    active: {type: Boolean, default: true},
    family: {type: Schema.Types.ObjectId, ref: 'Family', required: true},
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    classification: {type: Schema.Types.ObjectId, ref: 'Classification'},
    usage: String
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;