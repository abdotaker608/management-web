const { Schema, model } = require("mongoose");

const TutorialSchema = new Schema({
    title: String,
    url: String,
    createdAt: {
        type: Date,
        default: () => new Date(Date.now()),
    },
});

const Tutorial = model("Tutorial", TutorialSchema);

module.exports = {
    Tutorial,
};
