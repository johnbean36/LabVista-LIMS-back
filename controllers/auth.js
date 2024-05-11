const express = require('express');
const User = require('../models/User');
const { hashPassword } = require('../middleware/')

async function signup(req,res){
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

async function signin(req,res){

}

module.exports = {
    signup,
    signin
}