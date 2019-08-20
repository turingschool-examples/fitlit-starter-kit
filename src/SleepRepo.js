class SleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }

  returnAllSleepQuality() {
    return Number((this.sleepData.reduce((totalQuality, eachPerson) => {
      totalQuality += eachPerson.sleepQuality;
      return totalQuality;
    }, 0) / this.sleepData.length).toFixed(1));
  }
  
  // returnAboveAverageSleepers() {
  //   var weekOfData = this.sleepData.splice(-7)
  //   console.log(weekOfData.reduce((obj, user) => {
  //     if (!obj[user.userID]) {
  //       obj[user.userID] = weekOfData.filter(el => el.userID === user.userID).reduce((totalQuality, eachDay) => {
  //         totalQuality += eachDay.sleepQuality
  //         return totalQuality
  //       },0)
  //     } else {
  //       obj[user.userID] += user.sleepQuality
  //     }
  //     return obj
  //   }, {}))
  // }
  returnLongestSleepers(date) {
    var dateData = this.sleepData.filter(day => day.date === date)
    var sortedSleepers = dateData.sort((a,b) => b.hoursSlept - a.hoursSlept)
    return sortedSleepers.filter(day => day.hoursSlept === sortedSleepers[0].hoursSlept).map(user => user.userID)
  }
}




if (typeof module !== 'undefined') {
    module.exports = SleepRepo;
  }