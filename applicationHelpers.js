const dbHelpers = require("./dbHelpers")

const submitApplication = (req, res) => {

    let sql = `INSERT INTO applications (
        fullname,
        email,
        address,
        phone,
        course,
        applicationNo,
        paymentRef
      ) VALUES (?,?,?,?,?,?,?)`;

    let {
        fullname,
        email,
        address,
        phone,
        course,
        applicationNo,
        paymentRef
    } = req.body;

    let esc = [
        fullname,
        email,
        address,
        phone,
        course,
        applicationNo,
        paymentRef
    ];

    dbHelpers.create(sql, esc, res);
}  

module.exports={submitApplication}