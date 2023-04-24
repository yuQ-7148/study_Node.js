const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function (err, result) {
    if (err) {
        console.log('文件读取失败' + err.message)
    } else {
        console.log('文件读取成功' + result)
    }
})
