const nodemailer = require("nodemailer");

/**
 * send email to users
 * @param { string } username username of the mail server
 * @param { string} password password of the mail server
 * @param { string} from where the mail is coming from
 * @param { string} to to where the mail is coming from
 * @param { string} subject the subject of the email
 * @param { string} name property name of sender of email
 * @param { string} format format of the message i.e html or text
 * @param { string} html the content of the message in html format
 * @param { string} text the content of the message in text format
 *
 * @returns result, a json string
 */
function sendMail(email, subject, format = 'html', html, text, name) {

    var transporter = nodemailer.createTransport({
        host: 'mail.fantelschool.ng',//gmail
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        }
    });

    var messageOptions = {
        envelope: {
            from: 'support@fantelschool.ng',
            to: `${email}`
        },
        raw: `From: support@fantelschool.ng
        To:${email}
        Subject:${subject}

        ${text}`
    };

    var mailOptions = {
        // from: `${process.env.USER}, {name:"Aliyu Bello",address:${process.env.USER}}`,
        from: `${name ? name : "Fantel School"} <${process.env.USER}>`,
        to: email,
        subject: subject,
        [format]: html ? html : text // or html:<html>It is easy</html>
    };

    let promise = new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                resolve(false)
            } else {
                console.log('Email sent: ' + info.response);
                resolve(true)
            }
        });
    })

    return promise;
}

module.exports = { sendMail };