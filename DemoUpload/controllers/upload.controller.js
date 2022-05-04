var fs = require('fs');
exports.getFormUpload = (req, res) => {
    res.render('./upload/upload', {
        title: 'Upload'
    });
};

exports.postUpload = (req, res) => {
    console.log(req.file , req.body);

    fs.rename(req.file.path, './public/uploads/' + req.file.originalname, (err) => {
        if (err) throw err;
        // res.redirect('/');
    });

    res.redirect("/upload");
};