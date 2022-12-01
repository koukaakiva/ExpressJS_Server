/* Using JS and NodeExpress (https://expressjs.com/) build a server that has at least 4 working endpoints that all do different things
(at least one endpoint should take in input from the client) AND the server will dish at least 2 different html pages. */

const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // res.status(200).send("Hello World");
  res.render("index");
});

app.get("/numberGuesser/:n", (req, res) => {
  res.render("numberGuesser", { number: req.params.n });
});

app.get("/random", (req, res) => {
  res.render("random", { number: Math.floor(Math.random() * 100) + 1 });
});

app.get("/educationalVideo", (req, res) => {
  res.render("educationalVideo");
});

app.listen(3000);
