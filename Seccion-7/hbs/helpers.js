var hbs = require("hbs");

// Helpper - Funciones que se disparan cuando el template lo requiera
hbs.registerHelper("getAnio", () => {
  return new Date().getFullYear();
});
