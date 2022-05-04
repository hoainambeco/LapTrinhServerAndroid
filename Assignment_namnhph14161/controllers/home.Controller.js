// const User = require("../models/user.models");
exports.home=(req,res,next)=>{
    res.render("home/home", {
        homeCSS: "stylesheets/home.css",
        css: "assets/css/black-dashboard.css?v=1.0.0",
        demo: "assets/demo/demo.css",
        homeJS: "assets/js/core/jquery.min.js",
        homeJS1: "/assets/js/core/popper.min.js",
        homeJS2: "assets/js/core/bootstrap.min.js",
        homeJS3: "assets/js/plugins/perfect-scrollbar.jquery.min.js",
        homeJS4: "assets/js/plugins/chartjs.min.js",
        homeJS5: "assets/js/plugins/bootstrap-notify.js",
        homeJS6: "assets/js/black-dashboard.min.js?v=1.0.0",
        homeJS7: "assets/demo/demo.js",
    });
};
