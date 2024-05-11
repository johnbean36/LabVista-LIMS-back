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
        const token = req.headers['authorization'].split(' ')[1];
        if(token){
            res.locals.token = token;
            return next();
        }
        res.status(401).send({status: 'Error', msg: 'Unauthorized'})
    }catch(err){
        console.log(err);
        res.status(401).send({status: 'Error', msg: 'Strip Token Error!'})
    }
}

function verifyToken(req, res, next){
    const { token } = res.locals;
    try{
        let payload = jwt.verify(token, APP_SECRET);
        if(payload){
            res.local.payload = payload;
            return next()
        }
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
    verifyToken
}