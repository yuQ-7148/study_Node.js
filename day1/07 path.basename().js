const path = require('path')

const fpath = '/a/b/c/d/index.html'

const fullName = path.basename(fpath)
console.log(fullName) //index.html

const fullName1 = path.basename(fpath, '.html')
console.log(fullName1) //index
