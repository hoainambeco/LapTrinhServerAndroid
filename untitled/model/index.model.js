const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hoainambeco:01684490544Fe@cluster0.f6gva.mongodb.net/Thi').then(r => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log('Error: ', e);
});
const GhichuSchema = new mongoose.Schema({TieuDe: String,NoiDung: String,AnhDaiDien:String, TrangThai: String});
const Ghichu = mongoose.model('ghichu', GhichuSchema);
module.exports = Ghichu;
