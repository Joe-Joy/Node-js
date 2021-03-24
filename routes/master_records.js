const express = require("express");
const router = express.Router();
const writesql = require("../config/mysql-write");
const readsql = require("../config/mysql-read");



router.get("/", function (req, res) {
  var query = "SELECT * FROM master_family_records";
  readsql.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get("/:unique_id", function (req, res) {
  let unique_id = req.params.unique_id;
  var query = `SELECT * FROM master_family_records WHERE unique_id = '${unique_id}'`;
  readsql.query(query, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});

router.post("/create", (req, res) => {
  let unique_id = "FID4";
  let name = req.query.name;
  let position = req.query.position;
  let gender = req.query.gender;
  let mob_number = req.query.mob_number;
  let mail_id = req.query.mail_id;
  let age = req.query.age;
  let query = `INSERT INTO master_family_records(unique_id,name, position,gender,mob_number,mail_id,age) VALUES ('${unique_id}','${name}','${position}','${gender}','${mob_number}','${mail_id}','${age}')`;
  writesql.query(query, (error, results, fields) => {
    if (error) res.send(error);
    res.send("data master family records inserted successfully");
  });
});

module.exports = router;
