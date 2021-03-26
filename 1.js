
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
        : name != "" && position != "" && gender != "" && mail_id != "" ? console.log ('mob_number , age is empty')
        : name != "" && position != "" && mob_number != "" && mail_id != "" ? console.log ('gender , age is empty')
        : name != "" && gender != "" && mob_number != "" && mail_id != "" ? console.log ('position , age is empty')
        : position != "" && gender != "" && mob_number != "" && mail_id != "" ? console.log ('name , age is empty')
        : name != "" && position != "" && gender != "" && age != "" ? console.log ('mob_number, mail_id is empty')
        : name != "" && position != "" && mob_number != "" && age != "" ? console.log ('gender, mail_id is empty')
        : name != "" && gender != "" && mob_number != "" && age != "" ? console.log ('position, mail_id is empty')
        : position != "" && gender != "" && mob_number != "" && age != "" ? console.log ('name, mail_id is empty')
        : name != "" && position != "" && mail_id != "" && age != "" ? console.log ('gender, mob_number is empty')
        : name != "" && gender != "" && mail_id != "" && age != "" ? console.log ('position, mob_number is empty')
        : position != "" && gender != "" && mail_id != "" && age != "" ? console.log ('name, mob_number is empty')
        : name != "" && mob_number != "" && mail_id != "" && age != "" ? console.log ('position, gender is empty')
        : position != "" && mob_number != "" && mail_id != "" && age != "" ? console.log ('name, gender is empty')
        : gender != "" && mob_number != "" && mail_id != "" && age != "" ? console.log ('position, name is empty')
        : name != "" && position != "" && gender != "" ? console.log ('mob_number, mail_id, age is empty')
        : name != "" && position != "" && mob_number != "" ? console.log ('gender, mail_id, age is empty')
        : name != "" && gender != "" && mob_number != "" ? console.log ('position, mail_id, age is empty')
        : position != "" && gender != "" && mob_number != "" ? console.log ('name, mail_id, age is empty')
        : name != "" && position != "" && mail_id != "" ? console.log ('mob_number, gender, age is empty')
        : name != "" && gender != "" && mail_id != "" ? console.log ('mob_number, position, age is empty')
        : position != "" && gender != "" && mail_id != "" ? console.log ('mob_number, name, age is empty')
        : name != "" && position != "" && age != "" ? console.log ('mob_number, mail_id, gender is empty')
        : name != "" && gender != "" && age != "" ? console.log ('mob_number, mail_id, position is empty')
        : position != "" && gender != "" && age != "" ? console.log ('mob_number, mail_id, name is empty')
        : position != "" && gender != "" && age != "" ? console.log ('mob_number, mail_id, name is empty')
        : mob_number != "" && mail_id != "" && age != "" ? console.log ('name, position, gender is empty')
        : mob_number != "" && mail_id != "" && age != "" ? console.log ('name, position, gender is empty')



        : console.log('nothing changed');
}
x('','','','a3333','22','2' );

