var express = require('express');
var router = express.Router();
router.post('/add', (req, res) => {
    //验证是否携带有效参数
    //连接数据库，写入到mydata集合中
    //返回客户端消息
})
router.post('/delete', (req, res) => {
    //删除指定id对应的数据
    //返回客户端消息
})
module.exports = router;