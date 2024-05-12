const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustSchema = new Schema({
    code: {type: Number, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String}
});

const CustCode = mongoose.model('SCode', CustSchema);

module.exports = CustCode;