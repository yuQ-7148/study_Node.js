const fs = require('fs')

fs.writeFile('./files/22.txt', 'abc', function (err) {
    console.log(err);
})