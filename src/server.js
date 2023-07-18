import { createConnection } from "mysql2";
import express from "express";
var app = express();
import { json } from "body-parser";

app.use(json());

var mySql2Connection = createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecv2products",
});

mySql2Connection.connect((err) => {
  if (!err) console.log("MySql Connection Succeded");
  else
    console.log(
      "MySql Connection Failed /n Error : " + JSON / stringify(err, undefined, 2)
    );
});

app.listen(3000, () => {
  console.log("Express Server Running on Port: 3000");
});


