const fs = require('fs')
const path = require('path')

// \s 表示空白字符串 \S 表示非空白字符串 * 表示匹配任意次数
// 匹配<style></style>的正则
const regStyle = /<style>[\s\S]*<\/style>/

// 匹配<script></script>的正则
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './sample.html'), 'utf8', (err, dataStr) => {
    if (err) return console.log(err.message)

    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
    const r1 = regStyle.exec(htmlStr)

    const newCSS = r1[0].replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, './sample/index.css'), newCSS, (err) => {
        if (err) return console.log(err.message)
        console.log('写入成功')
    })
}

function resolveJS(htmlStr) {
    const r1 = regScript.exec(htmlStr)

    const newScript = r1[0].replace('<script>', '').replace('</script>', '')

    fs.writeFile(
        path.join(__dirname, './sample/index.js'),
        newScript,
        (err) => {
            if (err) return console.log(err.message)
            console.log('写入成功')
        }
    )
}

function resolveHTML(htmlStr) {
    const newHTML = htmlStr
        .replace(regStyle, '<link rel="stylesheet" href="./sample/index.css"/')
        .replace(regScript, '<script src="./sample//index.js"></script>')

    fs.writeFile(path.join(__dirname, './newSample.html'), newHTML, (err) => {
        if (err) return console.log(err.message)
        console.log('写入成功')
    })
}
