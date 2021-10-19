//Libraries
import express from "express";
//import AWS from "aws-sdk";
import googleOAuth from "passport-google-oauth20";

//import {ImageModel} from "./database/allModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback"
        }))

const Router = express.Router();

//MULTER config
const storage = multer.memoryStorage();
constnupload = multer({storage});

/*
Route          /
Description     upload given images 
Params          None
Access          Public
Method          GET
*/

Router.post("/", upload.single("file"), async(req,res) => {
    try {
        try {
            const file = req.file;

            const bucketOption = {

            }
        }
      
    } catch (error) {
        return res.status(500).json({error: error.message});

    }
});

export default Router;