let userSleepData = {}
if (typeof module !== 'undefined') {
  sleepUser = require('../data/users-test-data')
  userSleepData = require('../data/sleep-test-data')
  User = require('./User')
  user = new User(1)
} else {
  sleepUser = userData
  userSleepData = sleepData
}

class Sleep {
  constructor() {
    // console.log(user)
    this.data = (this.findSleepData(user.user.id));
    
  }
  
  findSleepData(ident) {
    return userSleepData.find(user => user.userID === ident)
  }

//For a user(identified by their userID), the average number of hours slept per day
  averageSleepPerDay() {
    return this.data.sleepData.reduce((acc, sum) => {
      acc += sum.hoursSlept
      return Math.floor(acc)
    }, 0) / this.data.sleepData.length

  }
//For a user, their average sleep quality per day over all time
  averageSleepAllTime() {
    return this.data.sleepData.reduce((acc, sum) => {
      acc += sum.sleepQuality
      return Math.floor(acc)
    }, 0) / this.data.sleepData.length

  }

//For a user, how many hours they slept for a specific day(identified by a date)

  hoursSleptOnDay(day) {
    return this.data.sleepData.filter(hours => hours.date === day).map(hr => hr.hoursSlept).shift()
  }

//For a user, how many hours slept each day over the course of a given week(7 days) - you should be able to calculate this for any week, not just the latest week

  hoursSleptGivenWeek(weekStart) {
    let firstDayIndex = this.data.sleepData.findIndex(ele => ele.date === weekStart)
    return this.data.sleepData.slice(firstDayIndex, 7).map(hours => { 
      return {date: hours.date, hoursSlept: hours.hoursSlept}
    })
  }

//For a user, their sleep quality each day over the course of a given week(7 days) - you should be able to calculate this for any week, not just the latest week

  sleepQualityGivenWeek(weekStart) {
    let firstDayIndex = this.data.sleepData.findIndex(ele => ele.date === weekStart)
    return this.data.sleepData.slice(firstDayIndex, 7).map(hours => {
      return { date: hours.date, quality: hours.sleepQuality}
    })
  }

//For all users, the average sleep quality

  allUsersSleepQuality() {
    let allSleepQual = userSleepData.reduce((acc, sum) => {
      sum.sleepData.forEach(sums => {
        if (acc.indexOf(sums) === -1)
          acc.push(sums)
      })
      return acc;
    }, [])
    return allSleepQual.reduce((accs, summed) => {
      accs += summed.sleepQuality
      return Math.floor(accs)
    }, 0) / allSleepQual.length
  }

//Find all users who average a sleep quality greater than 3 for a given week(7 days) - you should be able to calculate this for any week, not just the latest week

  allUsersGoodSleepGivenWeek(weekStart) {
    // let allSleep = userSleepData.reduce((acc, sum) => {
    //   sum.sleepData.forEach(sums => {
    //     if (acc.indexOf(sums) === -1)
    //       acc.push(sums)
    //   })
    //   return acc;
    // }, [])
    // console.log(userSleepData[0].sleepData)
    // .reduce((accs, summed) => {
    //   accs += summed.sleepQuality
    //   return accs
    // }, 0))
  }
//For a given day(identified by the date), find the users who slept the most number of hours(one or more if they tied)
  championOfSleepers(date) {

  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}