const express = require('express');
const SampleId = require('../models/SampleId')
const CustCode = require('../models/CustCode')

/*async function idLookup(req, res, next){
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
}*/

async function registerSample(req, res, next){
    const { sampleData } = req.body;

}

async function getCust(req, res, next){
    let custlist = [];
    try{
        custlist = await CustCode.find({});
        res.json(custlist);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}



module.exports = {
    getCust,
    registerSample,
    getComm
}