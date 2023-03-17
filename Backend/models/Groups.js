const mongoose = require("mongoose");

const GroupsSchema = new mongoose.Schema({
    grpName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Group = mongoose.model("Groups", GroupsSchema);

module.exports = Group;