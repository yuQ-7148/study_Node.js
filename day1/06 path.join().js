const path = require('path')
const fs = require('fs')

const pathStr = path.join(__dirname, '/a', '/b/c', '../', '/d')
console.log(pathStr)

// fs.readFile(
//     path.join(__dirname, '/files/11.txt'),
//     'utf8',
//     function (err, dataStr) {
//         if (err) {
//             return console.log(err.message)
//         }
//         console.log('success' + dataStr)
//     }
// )
