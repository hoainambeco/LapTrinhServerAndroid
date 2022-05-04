import express from "express";
import { create } from "express-handlebars";

const app = express();
const port = 3000;
const user = [
  {
    ID: 1,
    FullName: "Điện thoại",
    UserName: "HoaiNamBeco",
    Email: "Nam@gmail.com",
    Password: "123456",
    Role: "Admin",
  },
  {
    ID: 1,
    FullName: "Điện thoại",
    UserName: "HoaiNamBeco",
    Email: "Nam@gmail.com",
    Password: "123456",
    Role: "Admin",
  },
  {
    ID: 1,
    FullName: "Điện thoại",
    UserName: "HoaiNamBeco",
    Email: "Nam@gmail.com",
    Password: "123456",
    Role: "Admin",
  },
  {
    ID: 1,
    FullName: "Điện thoại",
    UserName: "HoaiNamBeco",
    Email: "Nam@gmail.com",
    Password: "123456",
    Role: "Admin",
  },
];
const comics = [
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
  {
    ID: 1,
    Name: "Điện thoại",
    Price: "1.000.000",
    Image:
      "https://cdn.tgdd.vn/Products/Images/42/212098/samsung-galaxy-s10-plus-64gb-blue-400x400.jpg",
    Description: "Điện thoại",
    Category: "Điện thoại",
    Brand: "Samsung",
    Status: "Còn hàng",
  },
];
app.use("/static", express.static("./public"));
const hbs = create({ extname: ".hbs" });
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("login", {
    loginCSS: "/static/css/login.css",
  });
});
app.get("/login", (req, res) => {
  res.render("login", {
    loginCSS: "/static/css/login.css",
  });
});
app.post("/login", (req, res) => {
  console.log(req);
  res.writeHead(301, {
    Location: "http://" + req.headers["host"] + "/home",
  });
  res.end();
});
app.get("/home", (req, res) => {
  res.render("home", {
    homeCSS: "/static/css/home.css",
    css: "static/assets/css/black-dashboard.css?v=1.0.0",
    demo: "static/assets/demo/demo.css",
    homeJS: "static/assets/js/core/jquery.min.js",
    homeJS1: "static/assets/js/core/popper.min.js",
    homeJS2: "static/assets/js/core/bootstrap.min.js",
    homeJS3: "static/assets/js/plugins/perfect-scrollbar.jquery.min.js",
    homeJS4: "static/assets/js/plugins/chartjs.min.js",
    homeJS5: "static/assets/js/plugins/bootstrap-notify.js",
    homeJS6: "static/assets/js/black-dashboard.min.js?v=1.0.0",
    homeJS7: "static/assets/demo/demo.js",
  });
});
app.get("/register", (req, res) => {
  res.render("register", {
    loginCSS: "/static/css/login.css",
  });
});
app.get("/forgot", (req, res) => {
  res.render("forgot", {
    loginCSS: "/static/css/login.css",
    homeCSS: "/static/css/home.css",
    nucleoiconsCSS: "/static/assets/nucleo-icons.css",
    css: "static/assets/css/black-dashboard.css?v=1.0.0",
    demo: "static/assets/demo/demo.css",
  });
});
app.post("/register", (req, res) => res.send("post"));
app.get("/user", (req, res) => {
  res.render("user", {
    userCSS: "/static/css/user.css",
    user: user,
  });
});
app.get("/comics", (req, res) => {
  res.render("comics", {
    userCSS: "/static/css/user.css",
    comics: comics,
  });
});
app.get("/author", (req, res) => {
  res.render("author", {
    userCSS: "/static/css/user.css",
    user: user,
  });
});
app.get("/category", (req, res) => {
  res.render("category", {
    userCSS: "/static/css/user.css",
    category: [{ ID: 1, Name: "Kinh dị" }],
  });
});
app.get("/nxb", (req, res) => {
  res.render("nxb", {
    userCSS: "/static/css/user.css",
    user: user,
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
