const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname + "/View")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/View/about.html"));
});

app.get("/dogs", (req, res) => {
  res.sendFile(path.join(__dirname + "/View/dogs.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/View/contact.html"));
});

app.listen(3000);
console.log("Running at port 3000");
