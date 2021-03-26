const express = require("express");
const router = express.Router();
const writesql = require("../config/mysql-write");
const readsql = require("../config/mysql-read");
const test = require("./test");

test.family_records;

router.get("/", function (req, res) {
  var query = `call sp_fmly_map('')`;
  readsql.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

router.get("/:unique_id", function (req, res) {
  let unique_id = req.params.unique_id;
  var query = `call sp_fmly_map('${unique_id}')`;
  readsql.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

router.post("/create", (req, res) => {
  let unique_id = req.query.unique_id;
  let name = req.query.name;
  let relationship = req.query.relationship;
  let gender = req.query.gender;
  let mob_number = req.query.mob_number;
  let mail_id = req.query.mail_id;
  let age = req.query.age;
  var query = `INSERT INTO family_members(unique_id,name, relationship,gender,mob_number,mail_id,age) VALUES ('${unique_id}','${name}','${relationship}','${gender}','${mob_number}','${mail_id}','${age}')`;
  writesql.query(query, (error, results, fields) => {
    if (error) res.send(error);
    res.send("data family members inserted successfully");
  });
});


router.put("/update", (req, res) => {
  let unique_id = req.query.unique_id;
  let name = req.query.name;
  var x  = ["relationship", "gender", "mob_number", "mail_id", "gender"];
  var y = [req.query.relationship,req.query.gender, req.query.mob_number,req.query.mail_id,req.query.age]; 
  console.log(y);
  var object = test.toUpdate(x,y);
  const columns = Object.keys(object);
  const values = Object.values(object);  
  let sqlquery = "UPDATE family_members SET " + columns.join(" = ? ,") + " = ?";
  let sqlConditions = `WHERE unique_id = '${unique_id}' AND name = '${name}'`;
  const sql = sqlquery + " " + sqlConditions;
  writesql.query(sql, values,(error, results, fields) => {
    if (error) res.send(error);
    res.send("UPDATE SUCCESSFULLY");
  });
});

router.delete("/delete", (req, res) => {
  let family_id = req.query.family_id;
  var query = `DELETE  FROM family_members WHERE family_id = '${family_id}'`;
  writesql.query(query, (error, results, fields) => {
    if (error) res.send(error);
    res.send("delete sucessfully");
  });});

module.exports = router;
