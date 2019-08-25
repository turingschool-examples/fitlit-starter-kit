class SleepRepository {
  constructor(data, id) {
    this.id = id;
    this.data = data;
    this.userSleep = this.findSleepUserData()
  }

  findSleepUserData() {
    return this.data.filter(element => element.userID === this.id)
  }

  returnSleepAvg() {
    return Math.floor(this.userSleep.reduce((acc, element) => {
      return acc + element.hoursSlept}, 1) / this.userSleep.length)
  }

  returnSleepQualityAvg() {
    return Math.floor(this.userSleep.reduce((acc, element) => {
      return acc + element.sleepQuality}, 1) / this.userSleep.length)
  }

  calculateTotalAverageSleep() {
    return Math.floor(this.data.reduce((acc, element) => {
      return acc + element.hoursSlept}, 1) / this.data.length)
  }

  calculateTotalAverageSleepQuality() {
    return Math.floor(this.data.reduce((acc, element) => {
      return acc + element.sleepQuality}, 1) / this.data.length)
  }

  returnMostHoursSlept(date) {
    var dates = this.data.filter(user => user.date === date)
    var mostHours = dates.reduce((acc, user) => {
      if (user.hoursSlept > acc) {
        acc = user.hoursSlept
      }
      return acc
    }, 0)
    return dates.filter(user => user.hoursSlept === mostHours)
  }

  findUsersByWeek(startDate, endDate) {
    var sevenDays = this.data.filter(day => day.date >= startDate && day.date <= endDate);

    var sleepQuality= sevenDays.reduce((obj, user) => {
      if(!obj[user.userID]) {
        obj[user.userID] = []
      }
      obj[user.userID].push(user.sleepQuality)
      return obj
    }, {})

    return Object.keys(sleepQuality).map(key => {
      var qualityTotal = sleepQuality[key].reduce((acc, qual) => {
        acc += qual
        return acc
      }, 0)

      var qualAverage = Math.round((qualityTotal / 7) * 10) / 10;
      
      if(qualAverage > 3) {
        return parseInt(key)
      }

    }).filter(el => el !== undefined)
    
   }


}





if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}



