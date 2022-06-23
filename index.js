import express from "express";
import dotenv from "dotenv";
import Exceptionhandler from "./utils/exceptionHandler";

dotenv.config();
const app = express();


// handle error
app.use(Exceptionhandler);

app.use((req, res, next) => {
    res.status(404).json({
        message:"Not found error"
    });
});

app.listen(process.env.PORT,()=>{
    console.log("server is running in port 3000");
});

