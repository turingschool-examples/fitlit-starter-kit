
// const sleepData = require('../subData.js/sleepSubData');
// const userData = require('../subData.js/usersSubData');
// const user = require('./User');

class Sleep {
  constructor(id, sleepData) {
    this.id = id;
    this.sleepData = sleepData;
  }

  findUser(id) {
    return this.sleepData.filter(user => user.userID === id)
  }

  findAWeek(id) {
    let user = this.findUser(id)
    return user.slice(-7);
  }
  
  findAvgHoursSlept(id) {
    let singleUserInfo = this.findUser(id)
    let avgHours = singleUserInfo.reduce((acc, hours) => {
      acc += hours.hoursSlept / singleUserInfo.length
      return acc;
    }, 0)
    return +(avgHours.toFixed(2))
  }

  findAvgSleepQuality(id) {
    let singleUserInfo = this.findUser(id)
    let avgQuality = singleUserInfo.reduce((acc, quality) => {
      acc += quality.sleepQuality / singleUserInfo.length
      return acc;
    }, 0)
    return +(avgQuality.toFixed(2))
  }

  findHoursSlept(id, date) {
    let singleDay = this.sleepData.find( day => day.date === date && day.userID === id)
    return singleDay.hoursSlept
  }

  findSleepQuality(id, date) {
    let singleDay = this.sleepData.find( day => day.date === date && day.userID === id)
    return singleDay.sleepQuality
  }

  findAnyWeek(id, date) {
    let singleUser = this.findUser(id);
    let latestDay;
    singleUser.forEach((night, index) => {
      night.date === date ? (latestDay = index) : null 
    });
    let weekly = singleUser.slice(latestDay - 6, latestDay +1)
    return weekly
  }

  findHoursSleptForWeek(id, date) {
    let weekly = this.findAnyWeek(id, date);
    let allHours = weekly.map( day => {
      return {date: day.date, hoursSlept: day.hoursSlept}
    })
    return allHours
  }

  findSleepQualityForWeek(id, date) {
    let weekly = this.findAnyWeek(id, date);
    let allSleepQuality = weekly.map( day => {
      return {date: day.date, sleepQuality: day.sleepQuality}
    })
    return allSleepQuality;
  }

  findAvgQualityForAll() {
    let totalQual = this.sleepData.reduce( (acc, quality) => {
      acc += quality.sleepQuality
      return acc
    }, 0)
    return +((totalQual / this.sleepData.length).toFixed(2))
  }

  // findAvgOverThree() {
  //  this.sleepData.date === 
    
  // }

  findUserWhoSleptMost(date) {
   let matchingDate = this.sleepData.filter( user => user.date === date);
   let mostHours = Math.max(...matchingDate.map(day => day.hoursSlept), 0);
   return matchingDate.filter(person => person.hoursSlept === mostHours);
  }

  findBestSleepQualityNight(id) {
    let num = Math.max(...this.findUser(id).map(day => day.sleepQuality))
    console.log(num)
    return this.findUser(id).filter(day => day.sleepQuality === num)
  }

}

if (typeof module !== "undefined") {
  module.exports = Sleep;
}