const fs = require('fs')

fs.readFile('./files/成绩.txt', 'utf8', function (err, result) {
    if (err) {
        console.log(err)
    }
    //按照空格分隔
    const arrOld = result.split(' ')
    // console.log(arrOld)

    //对每一项进行字符串替换
    const arrNew = []
    arrOld.forEach((item) => {
        arrNew.push(item.replace('=', '：'))
    })
    // console.log(arrNew)

    //合并新的字符串
    const newStr = arrNew.join('\r\n')
    console.log(newStr)

    fs.writeFile('./files//新成绩.txt', newStr, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('success')
    })
})
