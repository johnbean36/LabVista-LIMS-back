const mongoose = require('mongoose');

const {DATABASE_URI} = process.env

mongoose.connect(DATABASE_URI);
const db = mongoose.connection;


db.on("open", ()=> console.log("You are connected to mongoose"));
db.on("close", ()=> console.log("You are disconnected from mongoose"));
db.on("error", (error)=> console.log(error));