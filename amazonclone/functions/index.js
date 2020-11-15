const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

(
  "sk_test_51HnOJJJKek0AOG2nePIVYNa1X6Ut5Vy4VjbZFaG9gPNjJU623ca6XSChZdAUfnmXRcH3IvwSpoPROqxasqMH2QIi00EC38x5xg"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/grego", (request, response) => response.status(200).send("Que pasa greguito"));

exports.apo = functions.https.onRequest(app);
