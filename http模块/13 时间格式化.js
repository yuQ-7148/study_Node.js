const moment = require('moment/moment')

const date = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(date)

const oldDate = '20230101'
const newDate = moment(oldDate).format('YYYY-MM-DD')
console.log(newDate)
