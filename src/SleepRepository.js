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

  mostHoursSlept(date) {
    var dates = this.data.filter(user => user.date === date)
    var mostHours = dates.reduce((acc, user) => {
      if (user.hoursSlept > acc) {
        acc = user.hoursSlept
      }
      return acc
    }, 0)
    return dates.filter(user => user.hoursSlept === mostHours)
  }





}





if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}



