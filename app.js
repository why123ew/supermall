const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const session = require('express-session');
const formidable = require('formidable')

const app = express();
require('./model/connect.js');


const { Users } = require('./model/users');
const { Res1 } = require('./model/res1');




app.use(session({ secret: 'secret key' ,maxAge:'5555555'}));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
app.get('/login/status', (req, res) => {
    if (req.session && req.session.name) {
        const s = `var isLogin = true`
        res.send(s)
        console.log('登录成功')
    } else {
        res.send('var isLogin = false')
        console.log('未登录，请先登录')

    }
})


app.get('/logout', async(req, res) => {
    req.session.destroy(err => {
        if (err == null) {
            res.clearCookie('connect.sid');

            res.send('退出成功');
        } else {
            res.send('退出失败');
        }
    })
})



app.post('/zhuce', async(req, res) => {
    const { name, password } = req.body;
    let w = await Users.findOne({ name: name })
    if (w) {
        res.send('用户已存在')
    } else {
        Users.create({
            name: name,
            password: password
        }).then(() => console.log('注册成功'))
        res.redirect('/login.html');
        res.send('注册成功')
    }
})
app.post('/login1', async(req, res) => {
    const { name, password } = req.body;
    let result = await Users.findOne({ name })
    if (result) {
        if (password == result.password) {
            req.session.name = result.name;
            res.app.locals.userInfo = result;
            if (name == 'admin') {

                res.send('admin')

            } else {

                res.send('putong')
            }
           
        } else {
            res.status(400).send('用户名或密码不正确')
        }
    } else {
        res.status(400).send('用户不存在，请先注册')
    }
})
app.post('/data', (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, async(err, fields, files) => {

        const res1 = await Res1.create(fields)
        res.send('ok')
        console.log(res1)
    });

})
app.get('/res1', async(req, res) => {

    var res2 = await Res1.find()

    res.send(res2)

})

app.get('/del', async(req, res) => {
    var id = req.query.id;
    var d = await Res1.findOneAndDelete({_id:id})
    res.send('删除成功')
})
app.listen(3001);
console.log('网站服务器启动成功')