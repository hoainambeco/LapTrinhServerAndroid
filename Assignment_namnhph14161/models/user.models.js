const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hoainambeco:01684490544Fe@cluster0.f6gva.mongodb.net/ASM').then(r => {
    console.log('Connected to MongoDB');
}).catch(e => {
    console.log('Error: ', e);
});
const jwt = require('jsonwebtoken');
require('dotenv').config();
const chuoi_ky_tu_bi_mat = process.env.TOKEN_SEC_KEY;
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        FullName: String,
        UserName: String,
        Email: String,
        Password: String,
        Role: String,
        tokens: [{
            token: {
                type: String,
                required: true
            }
        }]
    });
userSchema.methods.generateAuthToken = async function () {
    const user = this;
    console.log(user);
    const token = jwt.sign({_id: user._id}, chuoi_ky_tu_bi_mat);
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
};
userSchema.statics.findByCredentials = async (username, password) => {
    const user = await User.findOne({UserName: username});
    if (!user) {
        throw new Error({error: 'Unable to login'});
    }
    const isMatch = await bcrypt.compare(password, user.Password);
    if (!isMatch) {
        throw new Error({error: 'Unable to login'});
    }
    return user;
};
const User = mongoose.model('user', userSchema);
module.exports = User;
