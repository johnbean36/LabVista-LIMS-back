const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleTestSchema = new Schema({
    name: {type: String, required: true},
    result: {type: Number},
    sampleId: { type: Schema.Types.ObjectId, ref: 'SampleId'}
});

const SampleTest = mongoose.model('SampleTest', SampleTestSchema);

module.exports = SampleTest;