// 1.导入 express
const exoress = require('express')

// 2.创建路由对象
const router = express.Router()

// 3.挂在路由对象
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
