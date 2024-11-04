
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import * as path from "path";
import router from "./Routes/api.js";
import {MONGODB_CONNECTION, PORT, MAX_JSON_SIZE, URL_ENCODE, WEB_CACHE, REQUEST_LIMIT_NUMBER, REQUEST_LIMIT_TIME} from "./app/config/config.js";

const app = express();

// Global Application Middleware
app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({extended: URL_ENCODE}));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());


// Rate Limiter

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Web Caching

app.set("etag", WEB_CACHE);

// MongoDB Connection
/*
You Need to connect mongodb here
*/

// set api Routes

app.use("/api",router)

// set application storage

app.use(express.static("Storage"));

// Run Your Express Back End Project

app.listen(PORT, () => {
    console.log("App running on port ",PORT)
});
