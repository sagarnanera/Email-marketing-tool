const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require('cors');
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });


const CampaignModel = require("../models/Campaign");

var router = express.Router();
router.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

router.post("/login", (req, res) => {

    try {

        

    } catch (error) {

        console.log(error);
        res.status(500).json({ success: false, errors: "server side error" });

    }

});

router.post("/register", (req, res) => {

    try {

    } catch (error) {

        console.log(error);
        res.status(500).json({ success: false, errors: "server side error" });

    }
});

module.exports = router;