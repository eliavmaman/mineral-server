const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usageSchema= new Schema({
    name: String,
    active: {type: Boolean, default: true}
});

const Usage = mongoose.model('Usage', usageSchema);

module.exports = Usage;