const express = require('express')
const app = express()

// 简化全局生效的中间件
app.use(function (req, res, next) {
    const time = Date.now()
    req.startTime = time
    next()
})

app.get('/', (req, res) => {
    console.log('Home page.' + req.startTime)
})

app.get('/user', (req, res) => {
    console.log('User page.' + req.startTime)
})

app.listen(8080, () => {
    console.log('server running at http://localhost:8080.')
})
