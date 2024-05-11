const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleIdSchema = new Schema({
    sampleid: Number
});

const SampleId = mongoose.model('SampleId', SampleIdSchema);

module.exports = SampleId;