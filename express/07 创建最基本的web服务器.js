// 1.导入 express
const express = require('express')
// 2.创建 web 服务器
const app = express()
// 3.启动 web 服务器
app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1:8080')
})
