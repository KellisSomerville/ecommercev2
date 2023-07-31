const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors())

const connection = mysql.createConnection({
  // host: "database-1.cjcpjrwgzzen.us-east-2.rds.amazonaws.com",
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecv2products",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.get("/products", (req, res) => {
  const query = "SELECT * FROM products";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.setHeader("Content-Type", "application/json");
      res.json(results);
    }
  });
});

app.listen(5000, () => {
  console.log(`Express server listening on port: 5000`);
});
