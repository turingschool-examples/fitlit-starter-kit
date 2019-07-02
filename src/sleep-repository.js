class SleepRepository {
  constructor (sleepData) {
    this.sleepData = sleepData
  }

  returnUserSleepData(id) {
    return this.sleepData.filter(el => el.userID === id);
  }

  returnAverageSleep(id) {
    const found = this.sleepData.filter(el => el.userID === id)
    return found.reduce((acc, total) => acc + total.hoursSlept, 0) / found.length
  }


  returnAverageSleepForAllUsers() {
    return Math.round(10 * this.sleepData.reduce((acc, total) => acc + total.sleepQuality, 0) / this.sleepData.length) / 10
  }

  returnUserSleepQualityAveOver3(firstDate) {
    let allIds = this.sleepData.filter(el => el.date === firstDate).map(el => el.userID)
    let array1 = allIds.map(el => this.returnUserSleepData(el))
    let array2 = array1.map(el => {
      let index = this.sleepData.findIndex(el => el.date === firstDate);
      return this.sleepData.splice(index, 7);
    })
    let final = {}
    let array3 = array2.map(el => el.reduce((acc, total) => final[total.userID] = (acc + total.sleepQuality), 0))
    return Object.keys(final).filter(key => final[key] > 21).map(Number)

  }

  // returnUserSleepQualityAveOver3(firstDate) {
  //   let week = this.sleepRepository.returnAWeekOfAllUsers(firstDate)
  //   return week
  //   return week.map(el => el.reduce((acc, total) => acc + total.sleepQuality, 0))
  // }


}

module.exports = SleepRepository
