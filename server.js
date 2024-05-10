require("dotenv").config();
const express = require('express');
require('./config/db.connection.js');
const { PORT } = process.env;
const signupRouter = require('./routes/signup');
const signinRouter = require('./routes/signin');
const samplesRouter = require('./routes/samples');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/samples', samplesRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);


app.get("/", (req, res)=>{
    res.status(404).json({message: "Resource not found"});
})

app.listen(PORT, () => console.log(`listening on  PORT ${PORT}`));
