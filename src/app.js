const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello from hello DevTinder");
});

app.use("/product", (req, res) => {
  res.send("Hello from product DevTinder");
});

app.use("/", (req, res) => {
  res.send("Hello from homepage DevTinder");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000....");
});
