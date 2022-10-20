const dotenv = require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB, {})
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(8000, () => {
  console.log("Server listen on port 8000");
});
