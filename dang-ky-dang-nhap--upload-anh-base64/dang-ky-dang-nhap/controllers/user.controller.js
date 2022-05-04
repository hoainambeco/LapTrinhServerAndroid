const bcrypt = require('bcrypt');
const User = require('../models/user.model')
exports.getFormRegister = (req,res,next)=>{
    res.render('./user/register');
}
// hàm này phải dùng async
exports.postRegister = async (req,res,next)=>{
    console.log(req.body);
    // kiểm tra hợp lệ dữ liệu
    if(req.body.passwd != req.body.passwd2){
        return res.render('./user/register',{msg:'<b>xác nhận pass không đúng</b>'})
    }
    // các lệnh validate tiếp tự viết ở đây......
    // tạo password để mã hóa, chạy lệnh: npm install bcrypt
    const chuoi_ngau_nhien = await bcrypt.genSalt(10);
    var pass = await  bcrypt.hash(req.body.passwd, chuoi_ngau_nhien);
    // tạo đối tượng user để ghi vào CSDL
    var objUser = {
        username: req.body.username,
        passwd: pass,
        email: req.body.email,
        anh_dai_dien: req.body.anh_dai_dien // cải tiến thêm cái này
    }
    await User.create(objUser, function (err){
        if(err){
            console.log(err)  ;// có thể điều hướng ở đây
            return res.render('./user/register', {msg: 'Lỗi đăng ký: ' + err.mesage})
        }

        else
            console.log( 'Ghi CSDL thanh cong')
    })
    res.redirect('/users/login');

}


// làm đăng nhậpL
exports.getFormLogin = (req,res, next)=>{
    res.render('./user/login')
}
// chạy lệnh: npm install express-session  để làm việc với session
// sau đó vào file app.js để khai báo
exports.postLogin = async (req,res, next)=>{
    console.log(req.body)
    // tìm user trong csdl:
    var user = await User.findOne({username: req.body.username });
    if(user){
        console.log(user)
        // kiểm tra password
        var checkPass = await bcrypt.compare(req.body.passwd, user.passwd);
        if(checkPass){
            // đúng pass, ghi vào session
            req.session.userLogin = user;
            // chuyển trang khi đăng nhập thành công
            return res.redirect ('/users') // về trang danh sách tài khoản
        }else{
            // sai password
            return  res.render('./user/login',{msg: '<b>Sai password</b>'});
        }
    }else{
        // không tìm thấy user
        return  res.render('./user/login',{msg: '<b>Không tìm thấy tài khoản:' +req.body.username +' </b>'});
    }
// kết thúc đăng nhập.
}