const express = require("express");
const path = require("path");
const  applicationHelpers = require("./applicationHelpers");
const  messageHelpers = require("./messageHelpers");


const app  = express();
const port = 3000;

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=>{

 res.send("Hello World!");
});

app.post("/applications", applicationHelpers.submitApplication);

app.post("/messages", messageHelpers.sendMessage);
