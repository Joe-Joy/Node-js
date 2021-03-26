// function getAge(birth) {
//   var today = new Date();
//   var curr_date = today.getDate();
//   var curr_month = today.getMonth() + 1;
//   var curr_year = today.getFullYear();

//   var pieces = birth.split('/');
//   console.log (pieces);
//   var birth_date = pieces[0];
//   console.log (birth_date);
//   var birth_month = pieces[1];
//   var birth_year = pieces[2];

//   if (curr_month == birth_month && curr_date >= birth_date) return parseInt(curr_year-birth_year);
//   if (curr_month == birth_month && curr_date < birth_date) return parseInt(curr_year-birth_year-1);
//   if (curr_month > birth_month) return parseInt(curr_year-birth_year);
//   if (curr_month < birth_month) return parseInt(curr_year-birth_year-1);
// }

// var age = getAge('01/07/1997');
// console.log(age);

// var now = new Date().toISOString().slice(0, 10);
// var birth = new Date('01-07-1997');
// var difference = now - birth;
// console.log (difference);
// // Dates are set from 1970, so remove that to get the year
// var age = new Date(difference).getFullYear() - 1970

