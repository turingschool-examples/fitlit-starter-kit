// const SleepRepository = require("../src/sleep-repository")

class Sleep {
  constructor (currentUser ) {
    this.currentUser = currentUser
    this.rested = false
  }

  userSleepAve() {
    return this.currentUser.reduce((acc, total) => acc + total.sleepQuality, 0) / this.currentUser.length;
  }

  userHoursAve() {
    return this.currentUser.reduce((acc, total) => acc + total.hoursSlept, 0) / this.currentUser.length;
  }

  userHoursSleptForDay(specificDate) {
    return this.currentUser.find(el => el.date === specificDate).hoursSlept;
  }

  userQualitySleepForDay(specificDate) {
    return this.currentUser.find(el => el.date === specificDate).sleepQuality;
  }

  returnAWeek(firstDate) {
    let data = [...this.currentUser]
    let index = data.findIndex(el => el.date === firstDate);
    return data.splice(index, 7);
  }

  userWeeklySleep(firstDate) {
    let week = this.returnAWeek(firstDate);
    return week.map(el => el.hoursSlept)
  }

  userWeeklyQualitySleep(firstDate) {
    let week = this.returnAWeek(firstDate);
    return week.map(el => el.sleepQuality)
  }

  checkRested() {
    if ((this.userHoursAve() > 7) && (this.userSleepAve() > 3 )) {
      this.rested = true
    }
  }


}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
