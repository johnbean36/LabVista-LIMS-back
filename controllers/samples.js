const express = require('express');
const SampleId = require('../models/SampleId');
const CustCode = require('../models/CustCode');
const CCode = require('../models/CCode');
const Test  = require('../models/Test');
const Sample = require('../models/Sample');
const User = require('../models/User');
const SampleTest = require('../models/SampleTest');

async function idLookup(){
    let count = await SampleId.countDocuments({});
    if(count === 0){
        return 0;
    }
    let lastId = await SampleId.findOne().sort({ _id: -1 })
    if(lastId){
        let sampleId = lastId.sampleId
        return sampleId;
    }
    else{
        console.log("Error finding Sample ID")
    }
}

async function registerSample(req, res, next){
    const { sampleData } = req.body;
    let samples = [];
    let payload = res.locals.payload;
    try{
        await Promise.all(sampleData.map(async (sample)=>{
            let id = 0;
            let sampleId = 0;
            let sampleCreation;
            sampleId = await idLookup() + 1;
            id = await SampleId.create({
                sampleid: sampleId
            })
            const tests = await Promise.all(sample.tests.map(async (test)=>{
                await SampleTest.create({
                    name: test.name,
                    sampleId: id._id
                });
            }))
            sampleCreation = await Sample.create({
                sampleid: id._id,
                user: payload.id,
                customer: sample.cust_id,
                commodity: sample.ccode_id
            })
            samples.push(sampleCreation);
        }))
        res.status(201).json(samples);
    }catch(err){
        console.log(err)
        res.status(500).json({message: "There was an error registering samples.  Please check if any samples were successful"})
    }
}

async function getCust(req, res, next){
    let custList = [];
    try{
        custList = await CustCode.find({});
        res.json(custList);
    }
    catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

async function getComm(req, res, next){
    let commList = [];
    try{
        commList = await CCode.find({});
        res.json(commList)
    }catch{
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
}

async function getTest(req, res, next){
    let testList = [];
    try{
        testList = await Test.find({});
        res.json(testList);
    }
    catch{
        console.log(err);
        res.status(500).send("Internal Server Error")
    }
}





module.exports = {
    getCust,
    registerSample,
    getComm,
    getTest
}