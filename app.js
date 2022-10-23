const express = require("express");
const app = express();
const user = require("./route/user");
const view = require("./route/view");
const path = require("path");

app.use(express.json());

const pug = require("pug");
const { urlencoded } = require("express");
const cors = require("cors");

app.use(cors());

app.use(express.json({ limit: "10kb" }));
app.use(urlencoded({ limit: "10kb" }));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));

app.use("/", view);
app.use("/users/", user);

app.all("*", function (req, res, next) {
  res.send(`this url has not found: ${req.originalUrl}`, 404);
});

module.exports = app;
