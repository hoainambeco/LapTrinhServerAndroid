var fs = require('fs');
exports.getFromUpload = (req,res,next)=>{
    res.render('./from-upload');
}
exports.postFromUpload = (req,res,next)=>{
    console.log(req.file);
    console.log(req.body);
    //xử lý đổi tên file hoặc di chuyển
    fs.rename(req.file.destination + req.file.filename,'./public/uploads/'+ req.file.originalname,(err)=>{
        if(err) console.log(err);
        res.send('ok');
    });
    var myLib = require('../lib/myLib');
    let new_FileName = myLib.SpxRemoveCircuflex(req.file.originalname);
    fs.rename(req.file.destination + req.file.filename,'./public/uploads/'+ new_FileName,(err)=>{
        if(err) console.log(err);
        res.send('ok');
    });
    res.redirect('./from-upload');

}
