const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SampleSchema = new Schema({
    commodity: {
        type: Schema.Types.ObjectId,
        ref: 'CCode'
    },
    tests: [{
        type: Schema.Types.ObjectId,
        ref: 'SampleTest'
    }],
    customer: {
        type: Schema.Types.ObjectId,
        ref: "CustCode"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    sampleid: {
        type: Schema.Types.ObjectId,
        ref: 'SampleId'
    },
    logindate: {
        type: String,
        required: true
    },
    validated: {
        type: Boolean
    }
}, {timestamps: true});

const Sample = mongoose.model('Sample', SampleSchema);

module.exports = Sample;