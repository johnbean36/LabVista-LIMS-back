const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustSchema = new Schema({
    code: {type: Number, required: true},
    name: {type: String, required: true},
}, { collection: 'custcodes' });

const CustCode = mongoose.model('SCode', CustSchema);

module.exports = CustCode;
