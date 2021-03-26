const express = require("express");
const cookieParser = require("cookie-parser");

const master_records = require("./routes/master_records");
const family_records = require("./routes/family_records");
const index = require("./routes/index");

const app = express();
app.use(cookieParser());

app.use("/", index);
app.use("/family_records", family_records);
app.use("/master_records", master_records);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
