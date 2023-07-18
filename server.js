const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecv2products",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.get("/products", (req, res) => {
  const query = "SELECT title, description, price, img_path FROM products";
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