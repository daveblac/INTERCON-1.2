import express from "express";
import dotenv from  "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xss from "xss-clean"
import mongoSanitize  from "express-mongo-sanitize";
import dbconnection from "./dbConfig/dbConnection.js";

dotenv.config();

const app = express();

//const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8800

//MONGODB CONNECTION 
dbconnection();

//middlenames

app.use(cors());
app.use(xss());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(mongoSanitize());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extented: true}));

app.use(morgan("dev"));

app.listen(PORT, ()=>{
    console.log(`Dev Server running on port: ${PORT}`);
}) 
