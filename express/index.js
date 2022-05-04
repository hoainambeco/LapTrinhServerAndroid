// const express = require("express");
import { pkg } from "express";
const express = pkg;
const app = express();
const port = 3000;
//thiết lập router cho các file tĩnh giả sử các file css cho thư mục public
app.use("/static", express.static("./public"));
//thiết lập template engine cho file html
// var exphbs = require("express-handlebars");
import { pkg1 } from "express-handlebars";
const exphbs = pkg1;
app.engine(".hbs", exphbs());
app.set("view engine", ".hbs");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("index", {});
});
// app.get("/", (req, res) => res.send("Hello World!"));
// app.post("/", (req, res) => res.send("post"));
// app.put("/", (req, res) => res.send("put"));
// app.delete("/", (req, res) => res.send("delete"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
