const express = require("express");
const app = express();

var hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 3000;

// Middlewlare
app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// Config server
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Jhon Dev"
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});

// Server Start
app.listen(port, () => {
  console.log("Escuchando peticiones");
});

