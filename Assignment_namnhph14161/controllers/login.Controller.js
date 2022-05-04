const User = require("../models/user.models");

const bcrypt = require("bcrypt");

exports.login = (req, res, next) => {
    res.render('./login/login', {
        loginCSS: "/stylesheets/login.css",
        homeCSS: "/stylesheets/home.css",
        nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
        css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
        demo: "stylesheets/assets/demo/demo.css",
    })
}
exports.loginPost = async (req, res, next) => {
    // console.log(req.body);
    const user = await User.findOne({UserName: req.body.loginusername});
    if (user) {
        console.log(user);
        const validPassword = await bcrypt.compare(req.body.loginpassword, user.Password);
        if (validPassword) {
            console.log("aaaa" + req.session);
            if (user.Role === "Admin") {
                req.session.user = user;
                res.redirect('/home');
            } else if (user.Role === "User") {
                res.render('./login/login', {
                    loginCSS: "/stylesheets/login.css",
                    homeCSS: "/stylesheets/home.css",
                    nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
                    css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
                    demo: "stylesheets/assets/demo/demo.css",
                    message: "You are not an Admin"
                })
            }
        } else {
            res.render('./login/login', {
                loginCSS: "/stylesheets/login.css",
                homeCSS: "/stylesheets/home.css",
                nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
                css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
                demo: "stylesheets/assets/demo/demo.css",
                message: "Invalid Password"
            })
        }
        console.log(validPassword + " " + " " + user.Password + " " + req.body.loginpassword);
    } else {
        res.render('./login/login', {
            loginCSS: "/stylesheets/login.css",
            homeCSS: "/stylesheets/home.css",
            nucleoiconsCSS: "/stylesheets/assets/nucleo-icons.css",
            css: "stylesheets/assets/css/black-dashboard.css?v=1.0.0",
            demo: "stylesheets/assets/demo/demo.css",
            message: "Invalid Username"
        })
    }
}
