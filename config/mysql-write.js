 const mysql = require("mysql");

 const config = {
   host: "localhost",
   user: "user",
   password: "Password@123",
   database: "family_tree",
 };

 var writeConnection = mysql.createPool(config);
 module.exports = writeConnection;

