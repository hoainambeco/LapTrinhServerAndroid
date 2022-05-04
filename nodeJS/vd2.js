var http = require("http");
http
  .createServer((reqest, response) => {
    console.log(reqest);
    response.writeHead(200, "Ket noi thanh cong", {
      "content-type": "text/html;charset=utf-8",
    });
    response.write("<h1>Hello NodeJS</h1>");
    response.end();
  })
  .listen(2410, "127.0.0.10");
console.log("Server dang chay tai dia chi: 127.0.0.10:2410");
