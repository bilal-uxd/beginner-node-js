const express = require("express");

// initializing
const app = express();

//listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  // res.send("<h3>home page</h3>");
  res.sendFile("./docs/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./docs/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
  res.redirect("about");
});

//used at last
app.use((req, res) => {
  //status 404 given because it is not normal file it is used for 404 status
  res.status(404).sendFile("./docs/404.html", { root: __dirname });
});
