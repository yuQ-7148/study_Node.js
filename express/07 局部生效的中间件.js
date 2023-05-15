const express = require('express')
const app = express()

// 1.定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件')
    next()
}

// 2.创建路由
app.get('/', mw1, (req, res) => {
    console.log('Home page.')
})

app.get('/user', (req, res) => {
    console.log('User page.')
})

app.listen(8080, () => {
    console.log('server running at http://localhost:8080.')
})
