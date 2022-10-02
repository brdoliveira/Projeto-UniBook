const express = require("express");
const cors = require('cors');
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors())

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});