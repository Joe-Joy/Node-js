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


// function x(family_id,mailid,mobnumber) {
//   return mobnumber != "" && mailid != "" && family_id != "" ? console.log("mobnumber & mailid & fm values updated")
//        : mobnumber != "" && mailid != "" ? console.log("family ID empty")
//        : mailid != "" && family_id != "" ? console.log("mobile id empty")
//        : family_id != "" && mobnumber != "" ? console.log("mailId mob empty")
//        : mobnumber != "" ? console.log("familyid mail values empty")
//        : mailid != "" ? console.log("familyid mob values empty")
//        : family_id != "" ? console.log("mob mail values empty")
//        : console.log("nothing changed")
// }

// x("11","12","222");


function x(name,position,gender,mob_number,mail_id,age) {
  return name != "" && position != "" && gender != "" &&mob_number != "" && mail_id != "" && age != "" ? console.log ('ALL VALUES UPDATED')
        : name != "" && position != "" && gender != "" && mob_number != "" && mail_id != "" ? console.log ('age is empty')
        : name != "" && position != "" && gender != "" && mob_number != "" && age != "" ? console.log ('mail_id is empty')
        : name != "" && position != "" && gender != "" && mail_id != "" && age != "" ? console.log ('mob_number is empty')
        : name != "" && position != "" && mob_number != "" && mail_id != "" && age != "" ? console.log ('gender is empty')
        : name != "" && gender != "" && mob_number != "" && mail_id != "" && age != "" ? console.log ('position is empty')
        : position != "" && gender != "" && mob_number != "" && mail_id != "" && age != "" ? console.log ('name is empty')
        : name != "" && position != "" && gender != "" && mob_number != "" ? console.log ('mail_id , age is empty')
        : name != "" && position != "" && gender != "" && mob_number != "" ? console.log ('mail_id , age is empty')
        : console.log('nothing changed');
}
x('as','father','male','3456789765','','' );