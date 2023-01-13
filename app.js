const express = require("express");
const path = require("path");
const  applicationHelpers = require("./applicationHelpers");
const  messageHelpers = require("./messageHelpers");


const app  = express();
const port = 3000;

app.use(express.json())

app.use(express.urlencoded({extended:true}));

app.use("/static", express.static(path.join(__dirname,"public")));

app.set("view engine", "ejs");

app.get("/", (req, res)=>{
 res.render("pages/index.ejs",{hello:"Hello World!"});
});

app.get("/contact", (req, res)=>{
 res.render("pages/contact.ejs",{hello:"Hello World!"});
});

app.get("/apply", (req, res)=>{
 res.render("pages/application.ejs",{hello:"Hello World!"});
});

app.post("/applications", applicationHelpers.submitApplication);

app.post("/messages", messageHelpers.sendMessage);

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})
