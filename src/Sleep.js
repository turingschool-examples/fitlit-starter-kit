class Sleep {
  constructor(sleepData, userId) {
    this.currentSleepData = sleepData;
    this.userID = userId;
    this.currentUserSleepData;
    // this.hoursSlept;
    // this.sleepQuality;
  }

  findCurrentUserSleepData() {
    this.currentUserSleepData = this.currentSleepData.filter((userInfo) =>
      userInfo.userID === this.userID);
      return this.currentUserSleepData;
  }

  calculateAvgHoursSleptPerDayByUser() {
    let avgSleep = this.currentUserSleepData.reduce((acc, day) => {
      acc += day.hoursSlept;
      return acc
    }, 0)/this.currentUserSleepData.length;

    return parseFloat(avgSleep.toFixed(2))
  }

  calculateAvgSleepQualityPerDayByUser() {
    let avgSleepQuality = this.currentUserSleepData.reduce((acc, day) => {
      acc += day.sleepQuality;
      return acc
    }, 0)/this.currentUserSleepData.length;

    return parseFloat(avgSleepQuality.toFixed(2))
  }

  returnHoursSleptByUserOnSpecificDate(date) {
    let sleepDataOnSpecificDate = this.currentUserSleepData.find(user => {
      return (user.date === date)
    });

    return sleepDataOnSpecificDate.hoursSlept
  }

  returnSleepQualityByUserOnSpecificDate(date) {
    let sleepQualityOnSpecificDate = this.currentUserSleepData.find(user => {
      return (user.date === date)
    });

    return sleepQualityOnSpecificDate.sleepQuality
  }

  calculateHoursSleptEachDayByUserOverSpecificWeek() {
    let sevenDaySleepData = this.currentUserSleepData.map(day => {
      return day.hoursSlept
    });

    return sevenDaySleepData.slice(-7)
  }

  calculateAvgSleepQualityAllUsers() {
    
  }

  findUsersWithAvgSleepQualityMoreThanThreeOverSpecificWeek() {

  }

  findUsersSleptMostHoursIdentifiedByDate() {

  }

  findDateUserSleptBest() {

  }
}


if (typeof module !== 'undefined') {
    module.exports = Sleep;
};
