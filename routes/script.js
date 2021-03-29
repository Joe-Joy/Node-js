var xhttp = new XMLHttpRequest();
xhttp.open("GET",'http://localhost:5000/master_records/',true);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =JSON.parse(this.responseText);
    }
}
xhttp.send();
