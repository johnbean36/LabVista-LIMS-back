const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustSchema = new Schema({
    code: {type: Number, required: true},
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String}
});

const SCode = mongoose.model('SCode', SCodeSchema);

module.exports = CustCode;