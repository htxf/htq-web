/**
 * Created by Administrator on 2017/4/26.
 */

export default {
  // 根据posts中每个post的date和time进行排序；比较函数
  createComparisonFunction (strDate, strTime) {
    return function (object1, object2) {
      // 用date和time先构造出一个Date对象，再获取具体日期的毫秒数
      let value1 = new Date(object1[strDate] + ' ' + object1[strTime]).getTime()
      let value2 = new Date(object2[strDate] + ' ' + object2[strTime]).getTime()
      if (value1 < value2) {
        return -1
      } else if (value1 > value2) {
        return 1
      } else {
        return 0
      }
    }
  },

// 判断post的date是否和当前日期在同一个星期内
  isSameWeek (strDate) {
    let date = new Date(strDate)
    let todayDate = new Date()
    let todayMilliseconds = todayDate.getTime()
    let todayWeekday = todayDate.getDay()
    if (todayWeekday === 0) {
      todayWeekday = 7
    }
    let mondayMilliseconds = todayMilliseconds - 86400000 * (todayWeekday - 1)
    let sundayMilliseconds = todayMilliseconds + 86400000 * (7 - todayWeekday)
    if (date.getTime() >= mondayMilliseconds && date.getTime() <= sundayMilliseconds) {
      return true
    } else {
      return false
    }
  }
}

