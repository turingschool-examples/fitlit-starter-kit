class SleepUser {
  constructor(sleepTestData) {
    this.sleepTestData = sleepTestData;
  }

  findUserInfo(id) {
    return this.sleepTestData.filter(user => user.userID === id);
  }

  findDailySleep(date, id) {
    let day = this.findUserInfo(id).find(user => user.date === date);
    return day.hoursSlept;
  }

  findDailySleepQuality(date, id) {
    let day = this.findUserInfo(id).find(user => user.date === date)
    return day.sleepQuality;
  }

  findAverageHoursSlept(startDate, endDate, id) {
    let userInfo = this.findUserInfo(id)
    let week = userInfo.filter(eachDay => {
      if(new Date(eachDay.date) >= new Date(startDate) && new Date(eachDay.date) <= new Date(endDate)){
        return eachDay
      }
    })
    
    let dailyHours = week.map(day => day.hoursSlept)
    let totalHours = dailyHours.reduce((acc, num) => {
      return acc + num;
    }, 0)
    return Math.round((totalHours / 7) * 10) / 10;
  }

  findAverageQualitySlept(startDate, endDate, id) {
    let userInfo = this.findUserInfo(id)
    let week = userInfo.filter(day => day.date >= startDate && day.date <= endDate);
    let dailyQuality = week.map(day => day.sleepQuality);
    let totalQuality= dailyQuality.reduce((acc, num) => {
      acc += num;
      return acc
    }, 0)
    return Math.round(totalQuality / 7 * 10) / 10
  }

  findSleepComparison(date, id) {
    var userSleepData = this.sleepTestData.filter(user => {
      return user.userID === id
    })
    var infoToday = userSleepData.find(day => {
      return day.date === date
    })
    var indexYesterday = userSleepData.indexOf(infoToday) - 1
    var infoYesterday = userSleepData.slice(indexYesterday, indexYesterday + 1) 
    
    var hoursSleptToday = infoToday.hoursSlept
    var hoursSleptYesterday = infoYesterday[0].hoursSlept

    if (hoursSleptToday < hoursSleptYesterday) {
      return `You slept ${Math.round((1 - (hoursSleptToday / hoursSleptYesterday)) * 100)}% less than yesteday.`
    }  else if (hoursSleptYesterday < hoursSleptToday) {
      return `You slept ${Math.round(hoursSleptYesterday / hoursSleptToday * 100)}% more than yesterday.`
    } else {
      return `You slept the same amount as you did the night before.`
    }
  }
}



if (typeof module !== 'undefined') {
  module.exports = SleepUser;
}