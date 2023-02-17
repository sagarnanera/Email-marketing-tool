const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const User = require('../models/User');
const campScheduler = require('../schedulars/campScheduler')

const app = express();

let date = new Date(2023, 0, 26, 19, 10);

campScheduler(1008,date);

console.log(date.toLocaleString());

module.exports = app;
