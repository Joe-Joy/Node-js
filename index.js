const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require('cors');
// var bodyParser = require('body-parser')

const app = express();
app.use(cookieParser());
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
 


const master_records = require("./routes/master_records");
const family_records = require("./routes/family_records");
const index = require("./routes/index");
// const one = require("./routes/one");

app.use("/", index);
app.use("/family_records", family_records);
app.use("/master_records", master_records);
// app.use("one", one);



app.get("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/",(req, res,next) => {
  res.send(index.html);
  next();
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
