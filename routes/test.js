// coverting 2 arrays into one object{}
function toObjectFrom2Array(columnNameModified, columnValuesModified) {
  var insertObject = {};
  for (var i = 0; i < columnNameModified.length; ++i)
  insertObject[columnNameModified[i]] = columnValuesModified[i];
  return insertObject;
  // console.log(object);
}

function toUpdate(columnNames,columnValues) {
  var columnValuePositions = [];
  var columnNameModified = [];

  columnValuesModified = columnValues.filter((columnValue) => {
    if (columnValue !== undefined) {
      columnValuePositions.push(columnValues.indexOf(columnValue));
    }
    return columnValue !== undefined;
  });
  columnValuePositions.forEach((columnValuePosition) =>
    columnNameModified.push(columnNames[columnValuePosition])
  );
  let object = toObjectFrom2Array(columnNameModified, columnValuesModified);
  return object;


}

module.exports = {
  toObjectFrom2Array,
  toUpdate
}







// var x = ["name", "dob", "RelationShip"];
// var y = ["abc", "wwww", ""];
// var object = toUpdate(x,y);
// console.log(object);
// const columns = Object.keys(object);
// console.log(columns);
// const values = Object.values(object);
// console.log(values);
// const unique_id = "jino";






// let sqlquery = "UPDATE user SET " + columns.join(" = ? ,'") + " = ?";
// let sqlConditions = `WHERE name = '${unique_id}' `;
// const sql = sqlquery + " " + sqlConditions;
// console.log(sql, values);


// router.put("/update", (req, res) => {
//   let unique_id = req.query.unique_id;
//   let name = req.query.name;
//   let gender = req.query.gender;
//   let mob_number = req.query.mob_number;
//   let mail_id = req.query.mail_id;
//   let age = req.query.age;
//   var x  = ["name", "position", "gender", "mob_number", "mail_id", "gender"];
//   var y = ['${name}','${position}','${gender}', '${mob_number}','${mail_id}','${age}'];
//   var object = toUpdate(x,y);
//   const columns = Object.keys(object);
//   const values = Object.values(object);  
//   let sqlquery = "UPDATE master_family_records SET " + columns.join(" = ? ,'") + " = ?";
//   let sqlConditions = `WHERE name = '${unique_id}' `;
//   const sql = sqlquery + " " + sqlConditions;
//   writesql.query(sql, values,(error, results, fields) => {
//     if (error) res.send(error);
//     res.send("UPDATE SUCCESSFULLY");
//   });
// });