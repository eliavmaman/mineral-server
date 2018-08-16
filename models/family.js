const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familySchema= new Schema({
    name: String,
    active: {type: Boolean, default: true}
});

const Family = mongoose.model('Family', familySchema);

module.exports = Family;