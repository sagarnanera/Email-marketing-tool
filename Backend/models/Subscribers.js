const mongoose = require("mongoose");

const SubsSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: "Please provide unique email address"
    },
    contactNo: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    formId: {
        type: mongoose.Types.ObjectId,
        ref: "Forms"
    },
    groupIds: {
        type: mongoose.Types.ObjectId,
        ref: "Groups"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Subscriber = mongoose.model("subscriber", SubsSchema);

module.exports = Subscriber;