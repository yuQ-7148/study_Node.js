// 1.导入http模块
const http = require('http')

// 2.创建web服务器实例
const server = http.createServer()

// 3.为服务器实例绑定request事件，监听客户端的请求
server.on('request', (req, res) => {
    // req.url是客户端请求的URL地址
    const url = req.url
    // 设置默认的响应内容为404 Not fount
    let content = '<h1>404 Not found</h1>'
    // 判断用户请求是否为 / 或 /index.html 首页
    // 判断用户请求是否为 /about.html 关于页面
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    // 设置 Content-Type 响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
})

// 4.启动服务器
server.listen(8080, () => {
    console.log('Server running at http://127.0.0.1:8080')
})
