const express = require("express");
const dotenv = require("dotenv");
const app = require('./src/app');
const conn = require('./DB/Dbconnect');

dotenv.config();

const port = process.env.PORT | 5000;
const host = process.env.HOST;



app.listen(port, () => {
    console.log(`Server is up : http://${host}:${port}`);
});
