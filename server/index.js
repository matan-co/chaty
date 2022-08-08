const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "..", "build");

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get("/api/hello", (req, res) => {
  res.send("Hello World");
});

app.get("/api/hello/kobi", (req, res) => {
  res.send("Hello Kobi");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log("Server is up!");
});
