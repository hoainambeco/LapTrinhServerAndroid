console.log("Ứng dụng mở đầu");
const http = require("http"); // nhúng module http.
const server = http.createServer(function name(reqest, response) {
  // xem log nguoười dùng yêu cầu
  console.log(reqest.url); //xem địa chỉ
  //viết lệnh phản hồi
  //thiết lập herder phản hồi
  response.writeHead(200, "Ket noi thanh cong", {
    "Content-Type": "text/html; charset=utf-8",
  });
  // viết nội dung phản hồi
  response.write("<h1>Hello NodeJS</h1>");
  response.write("<H2>Tôi tên là Nguyễn Hoài Nam</H2>");
  response.write("<H2>Tôi verry Ngầu</H2>");
  response.end(); //kết thúc phản hồi
}); // tạo server.
server.listen(3000, "127.0.0.1", function () {
  console.log("Server dang chay tai dia chi: 127.0.0.1:3000");
}); // lắng nghe port 3000
