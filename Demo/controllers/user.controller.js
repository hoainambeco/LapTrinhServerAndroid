const User = require("../models/user.models");
exports.getUserList=(req,res,next)=>{
    res.render('./user/list', {listUser :User.getUserAll()})
}

exports.getUserAdd=(req,res,next)=>{
    res.render('./user/add');
}
exports.postUserAdd=(req,res,next)=>{
    console.log(req.body);
    res.render('./user/add');
}
