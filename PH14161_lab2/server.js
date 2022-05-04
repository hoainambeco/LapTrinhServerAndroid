const http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    console.log("Địa chỉ truy cập: " + req.url);
    switch (req.url) {
      case "/Home.html":
        fs.readFile(req.url.substring(1), function (err, data) {
          if (err) {
            res.writeHead(404, {
              "Content-Type": "text/html; charset=utf-8",
            });
            res.end("404 Not Found");
          } else {
            res.write(data.toString("utf8"));
            return res.end();
          }
        });
        break;
      case "/info.html":
        fs.readFile(req.url.substring(1), function (err, data) {
          if (err) {
            res.writeHead(404, {
              "Content-Type": "text/html; charset=utf-8",
            });
            res.end("404 Not Found");
          } else {
            res.write(data.toString("utf8"));
            return res.end();
          }
        });
        break;
      case "/contact.html":
        fs.readFile(req.url.substring(1), function (err, data) {
          if (err) {
            res.writeHead(404, {
              "Content-Type": "text/html; charset=utf-8",
            });
            res.end("404 Not Found");
          } else {
            res.write(data.toString("utf8"));
            return res.end();
          }
        });
        break;
      default:
        fs.readFile(req.url.substring(1) + "Home.html", function (err, data) {
          if (err) {
            res.writeHead(404, {
              "Content-Type": "text/html; charset=utf-8",
            });
            res.end("404 Not Found");
          } else {
            res.write(data.toString("utf8"));
            return res.end();
          }
        });
        break;
    }
  })
  .listen(2410);
