const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CCodeSchema = new Schema({
    code: {type: String, required: true},
    desc: {type: String, required: true},
});

const CCode = mongoose.model('CCode', CCodeSchema);

module.exports = CCode;