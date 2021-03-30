// var xhttp = new XMLHttpRequest();
// xhttp.open("GET",'http://localhost:5000/family_records/',true);
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       console.log(this.responseText);
//       // document.getElementById("demo").innerHTML =JSON.parse(this.responseText);
//     }
// }
// xhttp.send();

function showCustomer(str) {
  var xhttp;    
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("txtHint").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "http://localhost:5000/master_records/", true);
  xhttp.send();
}