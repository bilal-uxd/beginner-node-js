const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //set header content type
  // res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html");

  res.write(`<head><link rel="stylesheet" href="#"></head>`);
  res.write("<h3>hello world</h3>");
  res.write("<h3>hello world 2</h3>");

  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
