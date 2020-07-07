const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const indexHTML = path.resolve(__dirname, "./public/index.html");

const app = express();

app.use(bodyParser.json());

// Для статических файлов
app.use("/", express.static("public"));

const articles = [];

app.get("/articles/", function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  res.send(articles);
});

app.get("/articles/:id", function (req, res, next) {
  const name = req.params.id;
  if (articles.indexOf(name) < 0) {
    res.sendStatus(404);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.sendStatus(200);
  }
});

app.put("/articles/:id", function (req, res, next) {
  const name = req.params.id;
  if (articles.indexOf(name) < 0) {
    articles.push(name);
    res.sendStatus(201);
  } else {
    res.sendStatus(200);
  }
});

app.get("/*", (req, res) => res.sendFile(indexHTML));

app.listen(8080);
