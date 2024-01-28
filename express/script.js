const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("middleware is available");
  next();
});

app.set("view engine", "ejs");

app.use(express.static("./public"));
//static routing
app.get("/profile/jignesh", function (req, res) {
  console.log("jignesh");
  res.send("its working on");
});

app.get("/", function (req, res) {
  res.render("index", { name: "Jignesh" });
});

app.get("/error", function (req, res) {
  throw new Error("jhhbbhjbhtdfthrfghfghfghfghfgh");
});

app.get("/leetcode/proflie/:username/:location", function (req, res) {
  res.send(`hello ${req.params.username} from ${req.params.location}`);
});

app.get("profile/jignesh", function (req, res) {
  res.send("Hello World");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);
