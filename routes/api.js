var express = require('express');
var router = express.Router();
let db;
require('../getdb').then((client) => {
    this.db = client.db('todobox');
})
var ObjectID = require('mongodb').ObjectID;

router.get('/list', (req, res) => {
    this.db.collection('mydata').find({}).toArray((err, result) => {
        if (err) {
            res.send({ code: 0, msg: err })
        }
        else {
            res.send({ code: 1, list: result });
        }
    })
})
router.get('/add', (req, res) => {
    //验证是否携带有效参数
    var content = req.query.todo;
    if (!content) {
        res.send({ code: 0, msg: '请输入有效内容' });
        return
    }
    //连接数据库，写入到mydata集合中
    this.db.collection('mydata').insert({ content }, (err, result) => {
        console.log(result);
        res.send({ code: 1, msg: result.ops[0] })
    });
    //返回客户端消息
})
router.post('/delete', (req, res) => {
    if (!req.body.id) {
        res.send({ code: 0, msg: '请传入正确的id' });
        return;
    }
    //删除指定id对应的数据
    this.db.collection('mydata').remove({ _id: new ObjectID(req.body.id) }, (err, result) => {
        if (err) {
            res.send({ code: 0, msg: err })
        }
        else {
            res.send({ code: 1, msg: 'del success' })
        }
    });

})
module.exports = router;