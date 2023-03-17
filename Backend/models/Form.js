const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    FormName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    groupIDs: {
        type: mongoose.Types.ObjectId,
        ref: "groups"
    },
    formBody: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Form = mongoose.model("Forms", FormSchema);

module.exports = Form;