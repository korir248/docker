const express = require("express");
const app = express();
const axios = require("axios");
const port = 5000;
app.get("/", async (req, res) => {
  let image = await axios("https://source.unsplash.com/random");
  res.send(`<img src="${image.request.res.responseUrl}" />`);
});

app.listen(port, () => {
  console.log("Server is running on port:" + port);
});
