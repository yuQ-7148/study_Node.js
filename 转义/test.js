const htmlIndex = require('./index.js')

const htmlStr = '<div style="height:100px;">这是测试标签&nbsp</div>'

const res = htmlIndex.htmlEscape(htmlStr)
console.log(res)

const res1 = htmlIndex.htmlunEscape(res)
console.log(res1)
