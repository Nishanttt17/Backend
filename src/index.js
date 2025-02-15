//require ('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB CONNECTION FAILED!!",err);
})




/*
import express from "express"
const app=express()
( async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERR : ",error);
        throw error 
       })
       app.Listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT} `);
       })

       
    }catch(error){
        console.log("ERROR : ",error)
        throw error
    }
    })()
*/