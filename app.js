const express = require("express");
const app = express();
const user = require("./route/user");

app.use(express.json());
app.use("/users/", user);

module.exports = app;
