const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

// 打卡内容获取方法
const getTime1 = date => {
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  if(hour < 10)
    return [month].map(formatNumber) + '月' + [day].map(formatNumber) + '日 笪文 上班' + [hour] + ':' + [minute] + '打卡，无发热'
  else
    return [month].map(formatNumber) + '月' + [day].map(formatNumber) + '日 笪文 下班' + [hour] + ':' + [minute] + '打卡，无发热'
  }

const formatNumber = n => {
  n = n.toString()
  // return n[1] ? n : '0' + n
  return n
}

module.exports = {
  formatTime: formatTime,
  getTime1: getTime1
}
