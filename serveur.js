const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Calculatrice Node.js fonctionne !");
});

app.listen(3000, () => {
    console.log("Serveur lancé sur port 3000");
    console.log("Test webhook Jenkins");
});