
    //获取当前日期
    function getDate() {
        var now = new Date()
        var year = now.getFullYear()
        var month = now.getMonth()
        var date = now.getDate()
        month++
        month = month.toString().padStart(2, '0')
        date = date.toString().padStart(2, '0')
        var defaultDate = `${year}-${month}-${date}`
        return defaultDate
    }
    //获取当前时间
    function getTime() {
        var now = new Date()
        var defaultTime = now.getHours()
        var min = now.getMinutes()
        defaultTime = defaultTime + (min / 60)
        return defaultTime
    }
