const express = require("express");
const cookieParser = require("cookie-parser");
var cors = require('cors');

const master_records = require("./routes/master_records");
const family_records = require("./routes/family_records");
const index = require("./routes/index");

const app = express();
app.use(cookieParser());
app.use(cors());

app.use("/", index);
app.use("/family_records", family_records);
app.use("/master_records", master_records);

app.get("/", (req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin","*");
  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
