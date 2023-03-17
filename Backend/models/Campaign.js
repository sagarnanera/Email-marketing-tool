const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
    CampaignName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        require: true
    },
    CampaignType: {
        type: Number,
        required: true
    },
    subjectOfCampaign: {
        type: String,
        required: true
    },
    mailBody: {
        type: String,
        required: true
    },
    receivers: {
        type: mongoose.Types.ObjectId,
        ref: "Groups",
        required: true
    },
    scheduleOn: {
        type: Date,
        required: true
    },
    CreatedOn: {
        type: Date,
        default: Date.now
    }
});

const Campaign = mongoose.model("Campaigns", CampaignSchema);

module.exports = Campaign;