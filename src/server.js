const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const content = fs.readFileSync(pathToHtmlFile, "UTF-8");
  res.send(content);
});

app.listen(3000, () => console.log("Ready on port http://localhost:3000"));
