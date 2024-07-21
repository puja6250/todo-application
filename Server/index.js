import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";


import route from './routes/userRoute.js';


const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("DB connected");
        if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    }
    })
    .catch(error => console.log(error));

    app.use("/api",route);

export default app;    