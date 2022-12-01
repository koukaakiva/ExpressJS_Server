const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.status(200).send("Hello World");
  res.render("index");
});

app.get("/numberGuesser/:n", (req, res) => {
  // res.status(200).send("Hello World");
  res.render("numberGuesser", { number: req.params.n });
});

app.get("/random", (req, res) => {
  // res.status(200).send("Hello World");
  res.render("random", { number: Math.floor(Math.random() * 100) + 1 });
});

app.get("/educationalVideo", (req, res) => {
  // res.status(200).send("Hello World");
  res.render("educationalVideo");
});

app.listen(3000);
