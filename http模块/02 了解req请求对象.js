// 1.导入http模块
const http = require('http')

// 2.创建web服务器实例
const server = http.createServer()

// 3.为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    // req.url是客户端请求的URL地址
    // req.method是客户端请求的method类型
    const str = `Your request url is ${req.url}, and requeset is ${req.method}. 测试中文`
    // 防止中文乱码，设置响应头Content-Type的值为text/html; charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 调用res.end()方法，向客户端响应一些内容
    res.end(str)
})

// 4.启动服务器
server.listen(8080, () => {
    console.log('Server running at http://127.0.0.1:8080')
})
