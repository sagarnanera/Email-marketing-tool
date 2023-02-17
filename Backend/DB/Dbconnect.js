const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(
    "mongodb://localhost:27017/",
    {
        dbName: "email-marketing-tool-db",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
    },
    (err) => {
        err ? console.log(err) : console.log(
            "Connected to database")
    }
);

const conn = mongoose.connection;

module.exports = conn;