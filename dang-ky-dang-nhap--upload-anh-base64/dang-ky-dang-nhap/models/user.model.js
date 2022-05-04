const  mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demo_dangky_dangnhap');

const userSchema = new mongoose.Schema(
    {
        username: 'String',
        passwd: 'String',
        email:'String',
        anh_dai_dien:'String'
    },
    {
        collection:'tai_khoan'
    }
);
// export ra để sử dụng ở controller
module.exports = mongoose.model('User',userSchema);