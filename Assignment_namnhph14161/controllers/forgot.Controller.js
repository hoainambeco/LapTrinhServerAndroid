const bcrypt = require("bcrypt");
const UserModel = require("../models/user.models");
exports.forgot = (req, res, next) => {
    res.render('./login/forgot', {
        loginCSS: "/stylesheets/login.css",
        homeCSS: "/stylesheets/home.css",
        nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
        css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
        demo: "stylesheets/assets/demo/demo.css",
    })
}
exports.postForgot = async (req, res, next) => {
    const ForgotUser = await UserModel.findOne({UserName: req.body.RUserName});
    const id = ForgotUser._id.toString();
    if (ForgotUser) {
        let dieuKien = {_id:ForgotUser._id.toString()};
        console.log(dieuKien);
        const salt = await bcrypt.genSalt(10);
        if (req.body.RPassword !== req.body.RCPassword) {
            return res.render('./login/forgot', {
                loginCSS: "/stylesheets/login.css",
                homeCSS: "/stylesheets/home.css",
                nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
                css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
                demo: "stylesheets/assets/demo/demo.css",
                error: "Mật khẩu không trùng khớp"
            })
        }
        if (req.body.REmail !== ForgotUser.Email) {
            return res.render('./login/forgot', {
                loginCSS: "/stylesheets/login.css",
                homeCSS: "/stylesheets/home.css",
                nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
                css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
                demo: "stylesheets/assets/demo/demo.css",
                message: "Email không trùng khớp"
            })
        }
        const objUser = new UserModel({
            FullName: req.body.RFirstNam,
            UserName: req.body.RUserName,
            Email: req.body.REmail,
            Password: await bcrypt.hash(req.body.RPassword, salt),
            Role: ForgotUser.Role,
        });
        UserModel.updateOne(dieuKien, objUser, function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log("Success");
                res.redirect('/login');
            }
        });
    } else {
        return res.render('./login/forgot', {
            loginCSS: "/stylesheets/login.css",
            homeCSS: "/stylesheets/home.css",
            nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
            css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
            demo: "stylesheets/assets/demo/demo.css",
            message2: "Tài khoản không tồn tại"
        })
    }
}
