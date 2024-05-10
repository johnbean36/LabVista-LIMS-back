const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SCodeSchema = new Schema({
    code: {type: Number, required: true},
    name: {type: String, required: true},
});

const SCode = mongoose.model('SCode', SCodeSchema);

module.exports = SCode;