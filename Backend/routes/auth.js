const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require('cors');
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });


const userModel = require("../models/User");

// Validator functions
const validateRegisterInput = require("../validator/register");
const validateLoginInput = require("../validator/login");

var router = express.Router();
router.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

router.post("/login", (req, res) => {

    try {

        console.log(req.body);

        const { errors, isValid } = validateLoginInput(req.body);

        // Check validation
        if (!isValid) {
            return res.status(400).json({ success: false, errors });
        }
        const email = req.body.email;
        const password = req.body.password;
        // Find user by email

        userModel.findOne({ email }).then(user => {

            // Check if user exists
            if (!user) {
                return res.status(404).json({ success: false, errors: "User does not exist" });
            }
            // Check password
            bcrypt.compare(password, user.password).then(isMatch => {
                if (isMatch) {
                    // User matched
                    // Create JWT Payload
                    const payload = {
                        id: user.id,
                        name: user.name
                    };

                    const options = {
                        expires: new Date(
                            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
                        ),
                        secure: true,
                        httpOnly: true,
                    };
                    // Sign token
                    jwt.sign(
                        payload,
                        "secretkey",
                        {
                            expiresIn: 31556926 // 1 year in seconds
                        },
                        (err, token) => {
                            //set cookie
                            res.status(200).cookie("token", token, options).json({
                                success: true
                            });
                        }
                    );
                } else {
                    return res
                        .status(400)
                        .json({ success: false, errors: "Password incorrect" });
                }
            });
        });

    } catch (error) {

        console.log(error);
        res.status(500).json({ success: false, errors: "server side error" });

    }
});

router.post("/register", (req, res) => {

    try {

        // console.log(req.body);
        const { errors, isValid } = validateRegisterInput(req.body);

        if (!isValid) {
            return res.status(400).json({ success: false, errors });
        }

        userModel.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({ success: false, errors: "Email already exists" });
            } else {
                const newUser = new userModel({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    // console.log(newUser.password);
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                                console.log(user);

                                const payload = {
                                    id: user.id,
                                    name: user.name
                                };

                                const options = {
                                    expires: new Date(
                                        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
                                    ),
                                    secure: true,
                                    httpOnly: true,
                                };

                                // Sign token
                                jwt.sign(
                                    payload,
                                    "secretkey",
                                    {
                                        expiresIn: 31556926 // 1 year in seconds
                                    },
                                    (err, token) => {
                                        res.status(200).cookie("token", token, options).json({
                                            success: true
                                        })
                                    }
                                );
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({ success: false, errors: "server side error" });
                            });
                    });
                });
            }
        });
    } catch (error) {

        console.log(error);
        res.status(500).json({ success: false, errors: "server side error" });

    }
});

module.exports = router;