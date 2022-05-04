const http = require("http");
const fs = require("fs");
http
  .createServer(function (req, res) {
    console.log("Địa chỉ truy cập: " + req.url);
    // console.log(req.headers);
    console.log(typeof req.headers);
    if (req.url == "/a.html") {
      console.log("chuyển nội dung");
      res.writeHead(301, {
        Location: "http://" + req.headers["host"] + "/b.html",
      });
      res.end();
    } else {
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
    }
  })
  .listen(8080);
console.log("Server đang chạy trên cổng 8080");
