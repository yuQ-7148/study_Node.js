// 1.导入 express
const express = require('express')
const path = require('path')
// 2.创建 web 服务器
const app = express()

// // 4.监听客户端的 get 和 post 请求，并向客户端响应具体的内容
// app.get('/user', (req, res) => {
//     // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
//     res.send({name: 'zs', age: 20, gender: 'man'})
// })

// app.post('/user', (req, res) => {
//     // 调用 express 提供的 res.send() 方法，向客户端响应一个文本字符串
//     res.send('post success')
// })

// app.get('user', (req, res) => {
//     // req.query 默认是一个空对象
//     // 客户端使用?name=2&age=20 这种查询字符串形式，发送到服务器的参数
//     // 可以通过 req.query 对象访问到
//     // req.
//     console.log(req.query)
// })

// // url 地址中,可以通过 :参数名 的形式,匹配动态参数值
// app.get('/user/:id', (req, res) => {
//     // req.params 默认是一个空对象
//     // 里面存放着通过 : 动态匹配到的参数值
//     console.log(req.params)
//     res.send(req.params)
// })

// 调用 express.static() 方法,快速的对外提供静态资源
app.use('/public', express.static(path.join(__dirname, '../public')))

// 3.启动 web 服务器
app.listen(8080, '0.0.0.0', () => {
    console.log('express server running at http://127.0.0.1:8080')
})

// 4.输入 '0.0.0.0' 发布到局域网
// app.listen(8080, '0.0.0.0', () => {
//     console.log('express server running at http://127.0.0.1:8080')
// })
