const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classificationSchema= new Schema({
    name: String,
    active: {type: Boolean, default: true}
});

const Classification = mongoose.model('Classification', classificationSchema);

module.exports = Classification;