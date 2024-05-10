const mongoose = require('mongoose');
const {DATABASE_URL} = process.env

db = mongoose.connect(DATABASE_URI);
db.on("open", ()=> console.log("You are connected to mongoose"));
db.on("close", ()=> console.log("You are disconnected from mongoose"));
db.on("error", (error)=> console.log(error));