class Sleep {
  constructor(id, sleepData) {
    this.userSleep = this.getUserSleep(id, sleepData)
  }

  getUserSleep(id, sleepData) {
    return sleepData.filter(sleep => sleep.userID === id)
  }

  getDailySleepHours(date) {
    let sleepEntry = this.userSleep.filter(sleep => sleep.date === date)
    return sleepEntry.reduce((acc, sleep) => {
      acc += sleep.hoursSlept;
      return acc;
    }, 0)
  }

  getDailySleepQual(date) {
    let sleepEntry = this.userSleep.filter(sleep => sleep.date === date)
    return sleepEntry.reduce((acc, sleep) => {
      acc += sleep.sleepQuality;
      return acc;
    }, 0)
  }
  
  getAvgSleepHours() {
    let avg = this.userSleep.reduce((acc, sleep) => {
      return acc += sleep.hoursSlept / this.userSleep.length
    }, 0)

    return Number(avg.toFixed(2))
  }

  getAvgSleepQual() {
    let avg = this.userSleep.reduce((acc, sleep) => {
      return acc += sleep.sleepQuality / this.userSleep.length
    }, 0)

    return Number(avg.toFixed(1))
  }

  getWeeklySleepHours(date) {
    let sleepDate = this.userSleep.find(sleep => sleep.date === date)
    let firstDate = this.userSleep.indexOf(sleepDate);
    
    return this.userSleep
      .slice(firstDate, firstDate + 7)
      .map(sleep => sleep.hoursSlept);
  }

  getWeeklySleepQual(date) {
    let sleepDate = this.userSleep.find(sleep => sleep.date === date)
    let firstDate = this.userSleep.indexOf(sleepDate);
    
    return this.userSleep
      .slice(firstDate, firstDate + 7)
      .map(sleep => sleep.sleepQuality);
  }

  // getWeeklySleepProp(date, property) {
  //   let sleepDate = this.userSleep.find(sleep => sleep.date === date)
  //   let firstDate = this.userSleep.indexOf(sleepDate);
    
  //   return this.userSleep
  //     .slice(firstDate, firstDate+7)
  //     .map(sleep => sleep[property]);
  // }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}