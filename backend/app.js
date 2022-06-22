require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "images")));

app.get("/images/:image", (req, res) => {
  const image = req.params.image;

  res.sendFile(path.resolve(__dirname, "images", image));
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
