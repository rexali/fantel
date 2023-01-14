const express = require("express");
const path = require("path");
const applicationHelpers = require("./applicationHelpers");
const messageHelpers = require("./messageHelpers");
const mailHelpers = require("./mailHelpers");

const app = express();
const port = 3000;

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("pages/index.ejs", { hello: "Hello World!" });
});

app.get("/contact", (req, res) => {
    res.render("pages/contact.ejs", { hello: "Hello World!" });
});

app.get("/apply", (req, res) => {
    res.render("pages/application.ejs", { hello: "Hello World!" });
});

app.post("/applications", applicationHelpers.submitApplication);

app.post("/messages", messageHelpers.sendMessage);

app.post("/sendmail", async (req, res) => {
    let {
        message,
        subject,
        email,
        name,
    } = req.body;
    let text = '';
    let format = "html";
    const html = `
        <html>
        <body>
        <h1 style="color:green;">${subject}</h1>
        <p style="font-size:18px;">
        Welcome, looking forward to taking care of your needs as soon as possible.
        </P>
        <p style="font-size:18px;">
        ${message}
        </a>
        </p>
        <p style="font-size:18px;">Sender${name},Thank you.</P>
        </body>
        </html>
        `;
    await mailHelpers.sendMail(email, subject, format, html, text);
});


app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
})
