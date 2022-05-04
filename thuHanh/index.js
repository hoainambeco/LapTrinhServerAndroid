import express from "express";
import { create } from "express-handlebars";
const app = express();
const port = 3000;
app.use("/static", express.static("./public"));
const hbs = create({ extname: ".hbs" });
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home",
    content: "Welcome to my website",
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
