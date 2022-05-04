const comicsModel = require("../models/comics.models");
var multer = require('multer');
var fs = require('fs');
var rimraf = require('rimraf');
const {resolve} = require("path");
exports.getComicsList = async (req, res, next) => {
    const comicsList = await comicsModel.find({});
    res.render('./comics/comics', {comics: comicsList, loginCSS: "/stylesheets/user.css"});
}
exports.getAddPhoto = async (req, res, next) => {
    res.render('./comics/addPhoto');
}
exports.postAddPhoto = async (req, res, next) => {
    function removeVietnameseTones(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
        str = str.replace(/\u02C6|\u0306|\u031B/g, "");
        str = str.trim();
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
        return str;
    }
    let condition = {_id: req.params.id};
    const comics = await comicsModel.findById(req.params.id).exec()
        .catch(err => {
            console.log(err);
        });
    if (comics == null) {
        return log("Comics not found");
    }
    console.log(req.files);
    const imageDirPath = resolve(__dirname, '../tmp');
    const files = fs.readdirSync(imageDirPath);
    const nameFolder = comics.Ten.replace(" ", '-');
    let newNameDir = removeVietnameseTones(nameFolder);
    var dir = './public/uploads/' + newNameDir;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        console.log("Create folder: " + dir);
    } else {
        console.log("Directory already exist");
    }
    let nameImages = [];
    await files.forEach((file, index) => {
        fs.renameSync(
            imageDirPath + `/${file}`,
            './public/uploads/' + newNameDir + '/' + date + "anh" + index + ".png",
            function (err) {
                if (err) {
                    console.log(err);
                }
            }
        )
    });
    const files_info = req.files;
    nameImages = files_info.map((file, index) => "/uploads/" + newNameDir + '/' + date + "anh" + index + ".png");
    req.session.listimg = nameImages;
    let comicObj = {
        Ten: comics.Ten,
        AnhDaiDien: comics.AnhDaiDien,
        TheLoai: comics.TheLoai,
        TacGia: comics.TacGia,
        NXB: comics.NXB,
        NgayCapNhat: comics.NgayCapNhat,
        image_detail: nameImages,
    }
    comicsModel.updateOne(condition, comicObj, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("Thanh cong");
        }
    });

    return res.redirect('/comics/');

}
exports.postAddComic = async (req, res, next) => {
    const objComic = new comicsModel({
        Ten: req.body.Ten,
        TheLoai: req.body.TheLoai,
        TacGia: req.body.TacGia,
        NXB: req.body.NXB,
        NgayCapNhat: req.body.NgayCapNhat,
        AnhDaiDien: req.body.anh_dai_dien,
    });
    console.log("aa" + req.body.Ten);
    await objComic.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Thêm thành công");
        }
    });
    res.redirect('/comics');
}

exports.postUpdateComics = async (req, res, next) => {
    let dieuKien = {_id: req.body.UpdateID};
    console.log(dieuKien);
    let duLieu = {
        Ten: req.body.UpdateTen,
        TheLoai: req.body.UpdateTheLoai,
        TacGia: req.body.UpdateTacGia,
        NXB: req.body.UpdateNXB,
        NgayCapNhat: req.body.UpdateNCN,
        AnhDaiDien: req.body.Upanh_dai_dien,
    };
    console.log(duLieu);
    comicsModel.updateOne(dieuKien, duLieu, function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log("Success");
        }

    });
    res.writeHead(301, {
        Location: "http://" + req.headers["host"] + "/comics"
    });
}

exports.postDeleteComics = (req, res, next) => {

    let dieu_kien = {
        _id: req.body.DpInputID
    }

    comicsModel.deleteOne(dieu_kien, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('xóa thành công')
        }
    })
    res.writeHead(301, {
        Location: "http://" + req.headers["host"] + "/comics"
    });
}
