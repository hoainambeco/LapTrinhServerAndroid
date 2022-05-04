const bcrypt = require("bcrypt");
const UserModel = require("../models/user.models");
exports.getUserList= async (req,res,next)=>{
    const listUser = await UserModel.find({});
    console.log(listUser);
    res.render('./user/user', {user :listUser, loginCSS: "/stylesheets/user.css"})
}
exports.postAddUser = async (req,res,next)=>{
    console.log(req.body);
    const listUser = await UserModel.find({});
    console.log(req.body.flexRadioDefault1);
    let role = (req.body.flexRadioDefault1 === "Admin") ? "Admin" : "User";
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    if(req.body.Password !== req.body.CPassword){
        return res.render('./user/user',{user :listUser,loginCSS: "/stylesheets/user.css",msg:'Xác nhận password không đúng', body: req.body});
    }
    const objUser = new UserModel({
        FullName: req.body.FullName,
        UserName: req.body.UserName,
        Email: req.body.Email,
        Password: await bcrypt.hash(req.body.Password,salt),
        Role: role,
    });
    await objUser.save(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Success");
        }
    });
    res.redirect('/user');
}
exports.postUpdateUser = async (req,res,next)=>{
    console.log('Request: Post /user/edit')
    console.log(req.body);
    let dieuKien = {_id: req.body.UpInputID};
    const salt = await bcrypt.genSalt(10);
    console.log(salt)
    let duLieu= {
        FullName: req.body.UpInputFullName,
        UserName: req.body.UpInputUserName,
        Email: req.body.UpInputEmail,
        Password: await bcrypt.hash(req.body.UpInputPassword,salt),
        Role: req.body.UpInputRole,
    };
    UserModel.updateOne(dieuKien, duLieu, function (err,res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Success");
        }

    });
    res.writeHead(301, {
        Location: "http://" + req.headers["host"] + "/user"
    });
}
exports.postDeleteUser = (req, res, next)=>{

    let dieu_kien = {
        _id : req.body.DpInputID
    }

    UserModel.deleteOne(dieu_kien, function (err){
        if(err)
        {
            console.log(err)
        }else
        {
            console.log('xóa thành công')
        }
    })
    res.redirect('/user');
    res.writeHead(301, {
        Location: "http://" + req.headers["host"] + "/user"
    });
}
