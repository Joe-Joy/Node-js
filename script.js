// // var xhttp = new XMLHttpRequest();
// // xhttp.open("GET", "http://localhost:5000/family_records/", true);
// // if ("") {
// //   document.getElementById("txtHint").innerHTML = "";
// // }
// // xhttp.onreadystatechange = function () {
// //   if (this.readyState == 4 && this.status == 200) {
// //     // console.log(this.responseText);
// //     document.getElementById("txtHint").innerHTML = this.responseText;
// //   }
// // };
// // xhttp.send();

// function showCustomer(str) {
//   var xhttp;
//   if (str == "") {
//     document.getElementById("txtHint").innerHTML = "";
//     return;
//   }
//   xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       document.getElementById("txtHint").innerHTML = this.responseText;
//     }
//   };
//   xhttp.open("GET", "http://localhost:5000/master_records/", true);
//   xhttp.send();
// }

// function familyDetails(str) {
//   var xhttp;
//   if (str == "") {
//     document.getElementById("txtHint").innerHTML = "";
//     return;
//   }
//   xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (master !== '') {
//       document.getElementById("txtHint").innerHTML = this.responseText;
//     }else if (family !== '') {
//       document.getElementById("txtHint").innerHTML = this.responseText;
//     }
//   };
//   var master ="http://localhost:5000/master_records/";
//   var family ="http://localhost:5000/family_records/";

//   xhttp.open("GET", master, true);
//   xhttp.open("GET", family, true);
//   xhttp.send(master);
//   xhttp.send(family);

// }

// document.getElementsByClassName("submit").addEventListener('click',login);
function login() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/family_records/create", true);
    xhr.onclick = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // loginResults();
           
            console.log(this.responseText);
        }else{
            console.log(error);
        }
    }
    xhr.send();
}