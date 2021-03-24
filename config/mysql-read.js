 const mysql = require("mysql");

 const config = {
   host: "localhost",
   user: "user",
   password: "Password@123",
   database: "family_tree",
   dateStrings: true,
   debug: false
 };

 var readConnection = mysql.createPool(config);
 module.exports = readConnection;