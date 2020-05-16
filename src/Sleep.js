class Sleep {
  constructor(sleepData, user) {
    this.sleepData = sleepData;
    this.currentUser = user;
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
  
  getWeekOfSleepData(date) {
    let sleeps = []
    let userSleepData = this.getUserSleepData()
    let todaysSleep = userSleepData.find(sleep => sleep.date === date)
    let startIndex = userSleepData.indexOf(todaysSleep)
    for (let i = 0; i < 7; i++) {
      sleeps.push(userSleepData[startIndex + i])
    }
    return sleeps
  }
  
  getWeekofHoursSlept(date) {
    let userSleepData = this.getWeekOfSleepData(date)
    let sleeps = []
    userSleepData.forEach((night) => {
       if(night !== undefined) {
          sleeps.push(night.hoursSlept)
       }
    })
    return sleeps
  }


  getWeekofSleepQuality(date) {
    let userSleepData = this.getWeekOfSleepData(date)
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


  // sortSleeps() method:
  // take in sleepData array
  // creates a new array of objects (different length) from sleepData array
  // in the objects object keys = userIDs
  // key values are an array of the objects containing that userID

    }

  //getBestSleepers()
  //sets empty bestSleepers array
  //takes in a week of sleepData(date)
  //sleepData.sortSleep()
  //with sorted array ->
    //forEach user ->
      //getAverageDailySleep
      //if avg hrs slept is >= 3 ->
        //push userID to bestSleepersArray
  //return bestSleepers





if (typeof module !== 'undefined') {
  module.exports = Sleep;
}