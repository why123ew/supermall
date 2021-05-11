const mongoose = require('mongoose');
const schema2 = new mongoose.Schema({
    sex: {
        type: String
    },
    age: {
        type: String
    },
    level: {
        type: String
    },
    is: {
        type: String
    },
    where: {
        type: String
    },
    help: {
        type: String
    },
    app1: {
        type: String
    },
    good: {
        type: String
    },
    view: {
        type: String
    }
});

const Res1 = mongoose.model("Res1", schema2);
// Users.create({
//         name: "lisi",
//         password: "121344"
//     }).then(() => console.log('用户创建成功'))
//     .catch(() => console.log('用户创建失败'))

module.exports = {
    Res1
}