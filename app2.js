const express = require("express");

// initializing
const app = express();

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.send("<h3>home page</h3>");
});
