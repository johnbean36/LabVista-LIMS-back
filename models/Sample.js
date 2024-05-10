const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
    commodity: {
        type: Schema.Types.ObjectId,
        ref: 'CCode'
    },
    tests: [{
        type: Schema.Types.ObjectId,
        ref: 'Test'
    }],
    customer: {
        type: Schema.Types.ObjectId,
        ref: "CustCode"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Sample = mongoose.model('Sample', SampleSchema);

module.exports = Sample;