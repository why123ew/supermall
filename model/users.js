const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    }
});

const Users = mongoose.model("User", schema);
// Users.create({
//         name: "lisi",
//         password: "121344"
//     }).then(() => console.log('用户创建成功'))
//     .catch(() => console.log('用户创建失败'))

module.exports = {
    Users
}