const ghiChuModel = require('../model/index.model');
const fs = require("fs");
exports.getindex = async (req, res) => {
    const index = await ghiChuModel.find({});
    res.render('Ghichu/view', {
        Index: index,
    });
}
exports.getAdd = async (req, res) => {
    res.render('Ghichu/add');
}
exports.postindex = async (req, res) => {
    console.log(req.body, res.file);
    fs.rename(req.file.destination + req.file.filename,
        './public/images/' + req.file.originalname,
        function (err){
            if(err){
                console.log(err)
            }
        }
    )
    const fileName ='/images/'+ req.file.originalname;
    const indexObj = new ghiChuModel({
            TieuDe: req.body.TieuDe,
            NoiDung: req.body.NoiDung,
            AnhDaiDien: fileName,
            TrangThai: req.body.TrangThai,
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
    ghiChuModel.deleteOne(id, (err) => {
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
    const index = await ghiChuModel.findById(id);
    console.log(index);
    res.render('Ghichu/edit', {
        Index: index,
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
        TieuDe: req.body.TieuDe,
        NoiDung: req.body.NoiDung,
        AnhDaiDien: fileName,
        TrangThai: req.body.TrangThai
    };
    ghiChuModel.updateOne(dk,data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Sửa thành công');
        }
    });
    res.redirect('/');
}
exports.postEditAction = (req, res) => {
    console.log(req.body);
    let dk = {_id: req.body.UpInputID};
    let data = {
        TieuDe: req.body.UpTieuDe,
        NoiDung: req.body.UpNoiDung,
        AnhDaiDien: req.body.UpAnhDaiDien,
        TrangThai: req.body.UpTrangThai
    };
    console.log(data);
    ghiChuModel.updateOne(dk,data, (err) => {
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
    const index = await ghiChuModel.find({TieuDe: {$regex: search}});
    console.log(index);
    res.render('Ghichu/view', {
        Index: index,
    });
}
