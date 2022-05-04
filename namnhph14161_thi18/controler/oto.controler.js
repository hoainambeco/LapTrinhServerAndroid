const otoModel = require('../model/oto.model');
const fs = require("fs");
exports.getindex = async (req, res) => {
    const index = await otoModel.find({});
    res.render('oto/view', {
        oto: index,
    });
}
exports.getAdd = async (req, res) => {
    res.render('oto/add');
}
exports.postindex = async (req, res) => {
    console.log(req.body, res.file);
    if(req.file.type !== 'image/jpeg'){
        return res.send('Vui lòng chọn file ảnh có đuôi jpg');
    }
    let date = Date.now();
    const fileName ='/images/'+ req.body.Maoto+ date + 'anh' + Math.floor(Math.random() * 10) + '.jpg';
    fs.rename(req.file.destination + req.file.filename,
        './public'+ fileName,
        function (err){
            if(err){
                console.log(err)
            }
        }
    )
    console.log(req.file);
    const indexObj = new otoModel({
        Maoto: req.body.Maoto,
        NhanHieu: req.body.NhanHieu,
        NamSX: req.body.NamSX,
        GiaGoc: req.body.GiaGoc,
        GiaBan: req.body.GiaBan,
        AnhDaiDien: fileName,
        }
    );
    await indexObj.save( (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Thêm thành công');
        }
    });
    res.redirect('/');
}
exports.postDelete = (req, res) => {
    let id = {_id: req.body.DpInputID};
    otoModel.deleteOne(id, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Xóa thành công');
        }
    });
    res.redirect('/');
}
exports.getEdit = async (req, res) => {
    const id = req.params.id;
    const index = await otoModel.findById(id);
    console.log(index);
    res.render('oto/edit', {
        oto: index,
    });
}
exports.postEdit = (req, res) => {
    let dk = {_id: req.body.id};
    let fileName;
    try {
        fs.rename(req.file.destination + req.file.filename,
            './public/images/' + req.file.originalname,
            function (err){
                if(err){
                    console.log(err)
                }
            }
        )
        fileName ='/images/'+ req.file.originalname;
    }
    catch (e) {
        console.log(e);
        fileName = req.body.AnhDaiDien;
    }
    let data = {
        Maoto: req.body.Maoto,
        NhanHieu: req.body.NhanHieu,
        NamSX: req.body.NamSX,
        GiaGoc: req.body.GiaGoc,
        GiaBan: req.body.GiaBan,
        AnhDaiDien: fileName,
    };
    console.log(data);
    otoModel.updateOne(dk,data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Sửa thành công');
        }
    });
    res.redirect('/');
}
exports.find = async (req, res) => {
    const search = req.body.IPsearch;
    const index = await otoModel.find({Maoto: {$regex: search}});
    console.log(index);
    res.render('oto/view', {
        oto: index,
    });
}
