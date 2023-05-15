// 1.导入 express
const express = require('express')

// 2.创建路由对象
const router = express.Router()

// 3.挂载路由对象
router.get('/user/list', (req, res) => {
    res.send('Get user list.')
})

router.post('user/add', (req, res) => {
    res.send('Add new user.')
})

// 4.向外到处路由对象
module.exports = {
    router,
}
