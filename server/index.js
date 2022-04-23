require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
    MONGO_USER,
    MONGO_PASS,
    MONGO_AUTH_SOURCE,
    MONGO_HOST,
} = require("./config/mongo");
const { Tutorial } = require("./models/Tutorial");

const main = async () => {
    //Express App
    const app = express();

    //Connect to mongoDB
    await mongoose.connect(MONGO_HOST, {
        user: MONGO_USER,
        pass: MONGO_PASS,
        authSource: MONGO_AUTH_SOURCE,
    });

    //Configure CORS
    app.use(cors());

    //Body parsing
    app.use(express.json());

    /* Endpoints */

    app.route("/tutorials")
        .get(async (req, res) => {
            const tutorials = await Tutorial.find().lean();
            res.send(tutorials);
        })
        .post(async (req, res) => {
            const data = req.body;
            const tutorial = await Tutorial.create(data);
            res.send(tutorial);
        });

    app.listen(process.env.PORT || 8000, "0.0.0.0");
};

main();
