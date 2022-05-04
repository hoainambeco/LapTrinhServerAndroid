const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hoainambeco:01684490544Fe@cluster0.f6gva.mongodb.net/Thi').then(r => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log('Error: ', e);
});
const OtoSchema = new mongoose.Schema({
    Maoto: String,
    NhanHieu: String,
    NamSX: String,
    GiaGoc: String,
    GiaBan: String,
    AnhDaiDien: String
});
const oto = mongoose.model('oto', OtoSchema);
module.exports = oto;
