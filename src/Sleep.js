if (typeof module !== 'undefined') {
  userData = require('../data/users-test-data')
  sleepData = require('../data/sleep-test-data')
  User = require('./User')
  user = new User(1)
}

class Sleep {
  constructor() {
    this.data = (this.findSleepData(user.user.id));
  }
  
  findSleepData(ident) {
    return sleepData.find(user => user.userID === ident)
  }

  //For a user(identified by their userID), the average number of hours slept per day
  averageSleepPerDay() {
    return this.data.sleepData.reduce((acc, sum) => {
      acc += sum.hoursSlept
      return Math.floor(acc)
    }, 0) / this.data.sleepData.length

  }
  //For a user, their average sleep quality per day over all time
  averageSleepQualAllTime() {
    return this.data.sleepData.reduce((acc, sum) => {
      acc += sum.sleepQuality
      return Math.floor(acc)
    }, 0) / this.data.sleepData.length

  }

  //For a user, their average sleep hours per day over all time
  averageSleepHoursAllTime() {
    return this.data.sleepData.reduce((acc, sum) => {
      acc += sum.hoursSlept
      return Math.floor(acc)
    }, 0) / this.data.sleepData.length

  }

  //For a user, how many hours they slept for a specific day(identified by a date)

  hoursSleptOnDay(day) {
    return this.data.sleepData.filter(hours => hours.date === day)
      .map(hr => hr.hoursSlept).shift()
  }

  qualityOnDay(day) {
    return this.data.sleepData.filter(hours => hours.date === day)
      .map(hr => hr.sleepQuality).shift()
  }

  //For a user, how many hours slept each day over the course of a given week(7 days) - you should be able to calculate this for any week, not just the latest week

  hoursSleptGivenWeek(weekStart) {
    let firstDayIndex = this.data.sleepData.findIndex(ele => ele.date === weekStart)
    let week = this.data.sleepData.slice(firstDayIndex, firstDayIndex + 7)
      .map(hours => { 
        return {date: hours.date, hoursSlept: hours.hoursSlept}
      })
    return week
  }

  //For a user, their sleep quality each day over the course of a given week(7 days) - you should be able to calculate this for any week, not just the latest week

  sleepQualityGivenWeek(weekStart) {
    let firstDayIndex = this.data.sleepData.findIndex(ele => ele.date === weekStart)
    let week = this.data.sleepData.slice(firstDayIndex, firstDayIndex + 7)
      .map(hours => {
        return { date: hours.date, quality: hours.sleepQuality}
      })
      
    return week
  }

  //For all users, the average sleep quality

  allUsersSleepQuality() {
    let allSleepQual = sleepData.reduce((acc, sum) => {
      sum.sleepData
        .forEach(sums => {
          if (acc.indexOf(sums) === -1) {
            acc.push(sums)
          }
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