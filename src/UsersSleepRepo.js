class UsersSleepRepo {
  constructor(sleepData) {
    this.sleepData = sleepData;
    this.allUserIds = this.getAllUserIDs()
  }


  
  avgUsersSleepQualityAllTime() {
    let usersAvgHoursSleep = this.sleepData.reduce((sum, sleep) => {
      return sum += sleep.hoursSlept
    }, 0); return parseFloat((usersAvgHoursSleep  / this.sleepData.length).toFixed(2));
  }

  getAllUserIDs() {
    return this.sleepData.map(sleepObj => sleepObj.userID).filter((id, index, array) => array.indexOf(id) === index);
  }

  usersSleepQualityGreaterThreeByWeek(startDate) {
    return this.getAllUserIDs().reduce((arr, userId) => {
      let userData = this.sleepData.filter(user =>
        user.userID === userId)
      let DateIndex = userData.findIndex(day => day.date === startDate)
      let weeksData = userData.slice(DateIndex - 7);
      let weekAvg = weeksData.reduce((sum, day) => {
        return sum += day.sleepQuality
      }, 0) / weeksData.length
      if (weekAvg >= 3) {
        arr.push(userId)
      }
      return arr
    }, [])
  }

  usersMostHoursSleptByDate(date) {
    return this.sleepData.filter(sleep => date === sleep.date).sort((a, b) => a.hoursSlept - b.hoursSlept).pop().userID
  }

  //   metric_of_our_pick()  {

  //   }
  
}

if (typeof module !== 'undefined') {
  module.exports = UsersSleepRepo;
}