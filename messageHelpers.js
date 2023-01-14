const dbHelpers = require("./dbHelpers.js")

const sendMessage = (req, res) => {

    let sql = `INSERT INTO messages (
      name,
      email,
      subject,
      message
      ) VALUES (?,?,?,?)`;

    let {
        name,
        email,
        subject,
        message
    } = req.body;

    let esc = [
        name,
        email,
        subject,
        message
    ];

    console.log(req.body);

    dbHelpers.create(sql, esc, res);
}  

module.exports={
sendMessage
}