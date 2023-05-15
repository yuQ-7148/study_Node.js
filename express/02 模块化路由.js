const express = require('express')

// 1.导入路由模块
const {router} = require('./03 router.js')
// 2.注册路由模块
const app = express()

app.use('/api', router)
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1:8080')
})
