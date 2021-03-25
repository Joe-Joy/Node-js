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
  let firstQuery = 'select concat("FID", MAX(family_id)+ 1) as unique_id from master_family_records';
  let name = req.query.name;
  let position = req.query.position;
  let gender = req.query.gender;
  let mob_number = req.query.mob_number;
  let mail_id = req.query.mail_id;
  let age = req.query.age;
  writesql.query(firstQuery, (error, results) => {
    if (error) console.log(error);
    let unique_id = results[0].unique_id;
    let secondQuery = `INSERT INTO master_family_records(unique_id,name,position,gender,mob_number,mail_id,age) VALUES ('${unique_id}','${name}','${position}','${gender}','${mob_number}','${mail_id}','${age}')`;
    writesql.query(secondQuery, (error, results) => {
      if (error) console.log(error);
      res.send({ 
        family_id : unique_id,
        message : 'Success'
      });
    });
  });
});









router.delete("/delete", (req, res) => {
  let family_id = req.query.family_id;
  var query = `DELETE  FROM master_family_records WHERE family_id = '${family_id}'`;
  writesql.query(query, (error, results, fields) => {
    if (error) res.send(error);
    res.send("delete sucessfully");
  });
});

module.exports = router;
