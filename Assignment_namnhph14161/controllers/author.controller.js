const authorController = require("../models/author.models");
exports.getComicsList=(req,res,next)=>{
    res.render('./author/author', {author :authorController.getAuthorAll(), loginCSS: "/stylesheets/user.css"})
}
