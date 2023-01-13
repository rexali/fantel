var mysql = require("mysql");

/**
 * create connection to the database
 * @param con is mysql connection using:
 * @param host hostname
 * @param user username
 * @param password password
 * @param database database name
 * @returns con object
 */

function connectDb() {

  var con = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user: "fantelng_fbsuser",
    password: "10fbs205?",
    database: "fantelng_fbs"
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return con;
}
// connectedDb();


/**
 * create insert or insert data into the database
 * @param {String} data: data to be return
 * @param {String} sql : query string
 * @param {String[]} esc  parameters to be escaped in query string
 * @returns data object
 */
function create(sql, esc, res) {
    connectDb().query(sql, esc, function (err, result, fields) {
      if (err) throw err;
      console.log("Record inserted");
      res.json(result);
    });
  }
  
  module.exports={
    create
  }