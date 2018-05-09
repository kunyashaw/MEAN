var express = require('express');
let db;
require('../getdb').then((client) => {
    db = client.db('todobox');;
});

var router = express.Router();
router.post('/register', (req, res) => {
    //验证用户名和密码
    if (!req.body.uname || !req.body.upwd) {
        res.send({ code: 0, msg: '用户名或者密码无效' })
        return;
    }
    //连接数据库，从user集合中，检查用户名是否可用
    db.collection('user')
        .find({ uname: req.body.uname })
        .toArray((err, docs) => {
            if (docs.length == 0) {
                //如果可用,将数据插入到user集合中
                db.collection('user')
                    .insert(
                        { uname: req.body.uname, upwd: req.body.upwd },
                        (err, result) => {
                            res.send({ code: 1, msg: '注册成功' })
                        }
                    )
            } else {
                res.send(
                    {
                        code: 0,
                        msg: '用户名已被占用'
                    }
                );
            }
        })



    //返回客户端消息
})
router.post('/login', (req, res) => {
    console.log(req.body);
    //检查用户名和密码是否匹配
    db.collection('user')
        .find({ uname: req.body.uname, upwd: req.body.upwd })
        .toArray((err, docs) => {
            console.log(docs);
            if (docs.length > 0) {
                res.send({ code: 1, msg: 'login success' })
            }
            else {
                res.send({ code: 0, msg: 'login failed' })
            }
        })
    //返回客户端成功失败的消息
})
module.exports = router;