const express = require('express');
const User = require('../models/User');
const { hashPassword, comparePassword, createToken, } = require('../middleware/')

async function signUp(req,res){
    try{
        const { email, password, name } = req.body;
        let passwordDigest = await hashPassword(password);

        let existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).send("A user with that email has already been registered!")
        }else{
            const user = await User.create({
                email: email,
                name: name,
                password: passwordDigest
            })
            return res.status(201).send("User created successfully");
        }
    }catch(error){
        console.log(error)
        return res.status(500).send("User creation Error");
    }
}

async function signIn(req,res){
    try{
        const { email, password } = req.body
        let user = await User.findOne({email});
        if(user){
            let matched = comparePassword(user.password, password)
            if(matched){
                let payload = {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    rights: user.rights
                }
                let token = createToken(payload)

                return res.status(200).send({ user: payload, token });
                //return res.send({ user: payload, token });
            }
            else{
                return res.status(401).send("Invalid Password")
            }
        }
        else{
            return res.status(404).send("Invalid User")
        }
    }catch(error){
        res.status(401).send({status: 'Error', msg: 'An error has occurred'});
    }
}

module.exports = {
    signUp,
    signIn
}