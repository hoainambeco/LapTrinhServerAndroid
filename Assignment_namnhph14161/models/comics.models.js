// listComics = [{
//     ID: 1, Name: "Batman", Category: "Superhero", Author: "Bob Kane", NXB: "DC", UpdateDate: "01/01/2019",
// }, {
//     ID: 2, Name: "Batman", Category: "Superhero", Author: "Bob Kane", NXB: "DC", UpdateDate: "01/01/2019",
// }];
//
// function getComicsAll() {
//     return listComics;
// }
//
// module.exports = {getComicsAll};
const mongoose = require('mongoose');
const comicsSchema = new mongoose.Schema({Ten: String,AnhDaiDien: String,TheLoai:String, TacGia: String, NXB: String, NgayCapNhat: String, image_detail: [String]});
const comics = mongoose.model('comics', comicsSchema);
module.exports = comics;
