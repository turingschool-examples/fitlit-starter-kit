class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  avgHoursSleepPerUser(id) {
    let grabUserID = this.sleepData.filter(item => item.userID === id);
    let avgHours = grabUserID.reduce((acc, item) => {
      return acc += item.hoursSlept
    }, 0);
    return parseFloat((avgHours / grabUserID.length).toFixed(2))
  }

  avgSleepQualityAllTime(id) {
    let grabUserID = this.sleepData.filter(item => item.userID === id);
    let avgSleepQuality = grabUserID.reduce((acc, item) => {
      return acc += item.sleepQuality
    }, 0);
    return avgSleepQuality / grabUserID.length;
  }

  hrsSleepForSpecificDay(id, date) {
    return this.sleepData.filter(item => item.userID === id).find(item => item.date === date).hoursSlept;
  }

  sleepQualityForSpecificDay(id, date) {
    return this.sleepData.filter(item => item.userID === id).find(item => item.date === date).sleepQuality
  }

  userHrsSleepPerWeek(id, date) {
    let findUserInstances = this.sleepData.filter(user => id === user.userID)
    let findUserIndex = findUserInstances.findIndex(day => day.date === date)
    let hoursSleepPerWeek = findUserInstances.slice(findUserIndex - 6, findUserIndex + 1)
    return hoursSleepPerWeek.reduce((acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = item.hoursSlept;
      }
      return acc
    }, {})
  }

  userSleepQualityPerWeek(id, date) {
    let findUserInstances = this.sleepData.filter(user => id === user.userID)
    let findUserIndex = findUserInstances.findIndex(day => day.date === date)
    let sleepQualityPerWeek = findUserInstances.slice(findUserIndex - 6, findUserIndex + 1)
    return sleepQualityPerWeek.reduce((acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = item.sleepQuality;
      }
      return acc
    }, {})
  }

  averageHoursOfSleepForAllUsers() {
    let averageUserSleep = this.sleepData.reduce((acc, day) => {
      return acc += day.hoursSlept 
    }, 0) / this.sleepData.length;
    return Number(averageUserSleep.toFixed(2));
  }

  averageSleepQualityNumber(date, qualitySleepNumber) {
    const uniqueUserIds = [];
    const goodSleepers = [];

    this.sleepData.forEach(user => {
      if (!uniqueUserIds.includes(user.userID)) {
        uniqueUserIds.push(user.userID);
      }
    });

    uniqueUserIds.forEach(id => {
      let grabUserInfoById = this.sleepData.filter(item => item.userID === id);
      let index = grabUserInfoById.findIndex(day => day.date === date);
      let diffWeeks = grabUserInfoById.slice(index - 6, index + 1).map(item => {
        return {userid: id, date: item.date, sleepQuality: item.sleepQuality}
      });
      
      const sleepQualityAverage = diffWeeks.reduce((acc, item) => {
        return acc += item.sleepQuality
      }, 0) / diffWeeks.length;
      
      if (sleepQualityAverage >= qualitySleepNumber) {
        goodSleepers.push(id);
      }
    })
    return goodSleepers;
  }

  userFewestHoursSlept(id) {
    let findUserInstances = this.sleepData.filter(user => id === user.userID)
    let sortedHours = findUserInstances.sort((a,b) => a.hoursSlept - b.hoursSlept)
    return sortedHours[0].hoursSlept
  }

  userMostHoursSlept(id) {
    let findUserInstances = this.sleepData.filter(user => id === user.userID)
    let sortedHours = findUserInstances.sort((a,b) => b.hoursSlept - a.hoursSlept)
    return sortedHours[0].hoursSlept
  }

  // leastHourSlept() {  
  //   let x = this.sleepData.reduce((minAcc, day) => day.hoursSlept < minAcc ? day.hoursSlept : minAcc, this.sleepData[0].hoursSlept);
  //   console.log(x)
  // }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}