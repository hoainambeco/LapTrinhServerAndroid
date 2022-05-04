const http = require("http");
var fs = require("fs");
const server = http.createServer(function (reqest, response) {
  console.log("reqest: ", reqest.url);
  if (reqest.url == "/vda.html") {
    fs.readFile("./vda.html", function (err, data) {
      if (err) throw err;
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data.toString("utf8"));
      return response.end();
    });
  } else {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write("trang chủ");
    response.end();
  }
});
server.listen(8080, "127.0.0.240");
