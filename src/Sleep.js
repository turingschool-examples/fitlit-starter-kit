class Sleep {
  constructor(sleepData, user) {
    this.sleepData = sleepData;
    this.currentUser = user || {id: 0, name: 'no user'};
  }

  getUserSleepData() {
    return this.sleepData.filter (sleep => sleep.userID === this.currentUser.id)
  }

  getAverageDailySleep() {
    let userSleepData = this.getUserSleepData()
    let userAverage = userSleepData.reduce((acc, userData) => {
      acc += userData.hoursSlept
      return acc
    }, 0)
    let average = (userAverage / userSleepData.length).toFixed(2)
    return parseFloat(average)
  }

  getAverageSleepQuality() {
    let userSleepData = this.getUserSleepData()
    let qualityAverage = userSleepData.reduce((acc, userData) => {
      acc += userData.sleepQuality
      return acc
    }, 0)
    let average = (qualityAverage / userSleepData.length).toFixed(2)
    return parseFloat(average)
  }

  getSleepForSpecificDay(date) {
    let userSleepData = this.getUserSleepData()
    if (date) {
      let todaysSleep = userSleepData.find(sleep => sleep.date === date)
      return todaysSleep.hoursSlept
    } else {
      return undefined
    }
  }

  getQualityForSpecificDay(date) {
    let userSleepData = this.getUserSleepData()
    if (date) {
      let todaysQuality = userSleepData.find(quality => quality.date === date)
      return todaysQuality.sleepQuality
    } else {
      return undefined
    }
  } 
  
  getOneUserWeekOfSleepData(date) {
    let sleeps = []
    let userSleepData = this.getUserSleepData()
    let todaysSleep = userSleepData.find(sleep => sleep.date === date)
    let startIndex = userSleepData.indexOf(todaysSleep)
    for (let i = 0; i < 8; i++) {
      sleeps.push(userSleepData[startIndex - i])
    }
    return sleeps
  }
  
  getWeekofHoursSlept(date) {
    let userSleepData = this.getOneUserWeekOfSleepData(date)
    let sleeps = []
    userSleepData.forEach((night) => {
       if(night !== undefined) {
          sleeps.push(night.hoursSlept)
       }
    })
    return sleeps
  }


  getWeekofSleepQuality(date) {
    let userSleepData = this.getOneUserWeekOfSleepData(date)
    let sleeps = []
    userSleepData.forEach((night) => {
       if(night !== undefined) {
          sleeps.push(night.sleepQuality)
       }
    })
    return sleeps
  }


  getAllUsersAverageSleepQuality() {
    let userSleepData = this.sleepData
    let qualityAverage = userSleepData.reduce((acc, userData) => {
      acc += userData.sleepQuality
      return acc
    }, 0)
    let average = (qualityAverage / userSleepData.length).toFixed(2)
    return parseFloat(average)
  }

  sortSleeps() {
    let userSleepData = this.sleepData
    return userSleepData.reduce((acc, entry) => {
    const userProfile = acc.find(profile => {
      return profile.userID === entry.userID
    })
    const newEntry = {date: entry.date, hoursSlept: entry.hoursSlept, sleepQuality: entry.sleepQuality}
    if (userProfile) {
      userProfile.entries.push(newEntry)
    } else {
      const newUserProfile = {userID: entry.userID, entries: [newEntry]}
      acc.push(newUserProfile)
    }
    return acc
    }, [])
  }

  getAllUsersWeekOfSleepData(date) {
    let sleeps = []
    let userSleepData = this.sleepData
    let todaysSleep = userSleepData.find(sleep => sleep.date === date)
    let startIndex = userSleepData.indexOf(todaysSleep)
    for (let i = 0; i < 8; i++) {
      sleeps.push(userSleepData[startIndex + i])
    }
    return sleeps
  }

  getBestSleepers(date) {
    const userSleepData = this.getAllUsersWeekOfSleepData(date)
    const sortedData = this.sortSleeps(userSleepData)
    const keys = Object.keys(sortedData)
    const objData = keys.map(key => {
      const obj = {}
      let sleepSum = sortedData[key].entries.reduce((acc, entry) => {
        acc += entry.sleepQuality
        return acc
      }, 0)
      let average = (sleepSum / 7).toFixed(2)
      obj.userID = sortedData[key].userID
      obj.sleepAverage = parseFloat(average)
      return obj
    })
    const sortedQuality = objData.sort((a, b) => b.sleepAverage - a.sleepAverage)
    return sortedQuality.slice(0, 3) 
  }

  getTopSleeper(date) {
    const todaysSleepInfo = this.sleepData.filter(sleep => sleep.date === date)
    const sortedHours = todaysSleepInfo.sort((a, b) => b.hoursSlept - a.hoursSlept)
    return sortedHours[0].userID
  }

  getWorstSleeper(date) {
    const todaysSleepInfo = this.sleepData.filter(sleep => sleep.date === date)
    const sortedHours = todaysSleepInfo.sort((a, b) => a.hoursSlept - b.hoursSlept)
    return sortedHours[0].userID
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}