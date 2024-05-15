const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = process.env.APP_SECRET


async function hashPassword(password){
    return await bcrypt.hash(password, SALT_ROUNDS);
}

async function comparePassword(storedPassword, password){
    return await bcrypt.compare(password, storedPassword);
}

function createToken(payload){
    return jwt.sign(payload, APP_SECRET)
}

function stripToken(req, res, next){
    try{
        console.log(req.headers);
        const token = req.headers['authorization'].split(' ')[1];
        console.log(token);
        if(token){
            console.log("condition passed")
            res.locals.token = token;
            return next();
        }
        console.log("Oops something must be wrong;")
        res.status(401).send({status: 'Error', msg: 'Unauthorized'})
    }catch(err){
        console.log(err);
        res.status(401).send({status: 'Error', msg: 'Strip Token Error!'})
    }
}

function verifyRights(req, res, next){
    if(res.local.payload.rights === "user+"){
        return next();
    }
    else{
        res.status(401).send({status: 'Error', msg: 'Unauthorized'})
    }
}

function verifyToken(req, res, next){
    console.log(res.locals.token, "Verify token")
    const token = res.locals.token;
    try{
        let payload = jwt.verify(token, APP_SECRET);
        console.log(payload, "payload")
        if(payload){
            res.local.payload = payload;
            return next()
        }
        console.log("The error is here")
        res.status(401).send({status: 'Error', msg: 'Unauthorized'})
    }catch(error){
        console.log(error)
        res.status(401).send({status: 'Error', msg: 'Verify token Error!'})
    }
}

module.exports = {
    hashPassword,
    comparePassword,
    createToken,
    stripToken,
    verifyToken,
    verifyRights
}