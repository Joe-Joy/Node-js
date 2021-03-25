// // let name="ashli";
// // let position="daughter";
// // let gender = "female";
// let family_id = "";
// let mobnumber = "";
// let mailid = "";

// if (mobnumber != "" && mailid != "" && family_id != "") {console.log("mobnumber & mailid & fm values updated");} 
// else if (mobnumber != "" && mailid != "") {console.log("family ID empty");}
// else if (mailid != "" && family_id != "") {console.log("mobile id empty");}
// else if (family_id != "" && mobnumber != "") {console.log("mailId mob empty");}
// else if (mobnumber != "") {console.log("familyid mail values empty");}
// else if (mailid != "") {console.log("familyid mob values empty");}
// else if (family_id != "") {console.log("mob mail values empty");}
// else {console.log("nothing changed");}



// let age = 15;
// let result =
//     (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
// console.log(result);


function x(family_id,mailid,mobnumber) {
  return mobnumber != "" && mailid != "" && family_id != "" ? console.log("mobnumber & mailid & fm values updated")
       : mobnumber != "" && mailid != "" ? console.log("family ID empty")
       : mailid != "" && family_id != "" ? console.log("mobile id empty")
       : family_id != "" && mobnumber != "" ? console.log("mailId mob empty")
       : mobnumber != "" ? console.log("familyid mail values empty")
       : mailid != "" ? console.log("familyid mob values empty")
       : family_id != "" ? console.log("mob mail values empty")
       : console.log("nothing changed")
}

x("11","12","222");




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