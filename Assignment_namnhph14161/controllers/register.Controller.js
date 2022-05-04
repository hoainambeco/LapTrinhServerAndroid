const User = require("../models/user.models");
const bcrypt = require("bcrypt");
exports.register = (req, res, next) => {
    res.render('./login/register', {
        loginCSS: "/stylesheets/login.css",
        homeCSS: "/stylesheets/home.css",
        nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
        css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
        demo: "stylesheets/assets/demo/demo.css",
    })
}
exports.postRegister = async (req, res, next) => {
    if (req.body.registerp !== req.body.registercp) {
        return res.render('./login/register', {
            loginCSS: "/stylesheets/login.css",
            homeCSS: "/stylesheets/home.css",
            nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
            css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
            demo: "stylesheets/assets/demo/demo.css",
            message: "Password and Confirm Password do not match"
        })
    }
    // các xử lý validate viết tiếp ở đây

    // tạo mã pass
    // tạo chuỗi mã hóa để nối với password, chuỗi này sẽ thay đổi ngẫu nhiên
    const salt = await bcrypt.genSalt(10);
    console.log(salt)

    let objUser = {
        FullName: req.body.registerf,
        UserName: req.body.registeru,
        Password: await bcrypt.hash(req.body.registerp, salt),
        Email: req.body.registere,
        Role: 'Admin'
    }
    // ghi vào CSDL:
    await User.create(objUser, function (err) {
        if (err)
            console.log(err)
        else {
            console.log("Save DB OK")
        }

    })
    res.redirect('/login')
}
