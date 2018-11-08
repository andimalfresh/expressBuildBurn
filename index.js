const express = require("express");
const data = require("./data.json");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.send({ data });
});

app.get("./:rating", (req, res, next) => {
  const { rating } = req.params;
  const matching = data.filter(item => rating == item.rating);
  res.send({ snacks: matching });
  next();
});

app.post("/snackPOST", (req, res, next) => {
  data.push(req.body);
  res.send({ responce: req.body });
});

app.listen(port);
