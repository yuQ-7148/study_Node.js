const express = require('express')
const app = express()

// 简化全局生效的中间件
app.use(function (req, res, next) {
    console.log('这是最简单的中间件函数')
    // 把流转关系，转交给下一个中间件或路由
    next()
})

app.listen(8080, () => {
    console.log('server running at http://localhost:8080.')
})
