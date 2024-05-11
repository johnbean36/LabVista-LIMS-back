const express = require('express');
const SampleId = require('../models/SampleId')

async function idLookup(req, res, next){
    let count = await SampleId.countDocuments({});
    if(count === 0){
        res.send("Empty");
    }
    let lastId = await SampleId.findOne().sort({ _id: -1 })
    if(lastId){
        let sampleId = lastId.sampleId
        res.json({sampleId});
    }
    else{
        res.status(404).json({error: 'No document found'});
    }
}



module.exports = {
    idLookup
}