class Sleep {
  constructor(sleepData, userId) {
    this.currentSleepData = sleepData;
    this.userID = userId;
    this.currentUserSleepData;
    this.hoursSlept;
    this.sleepQuality;
  }

  findCurrentUserSleepData() {
    this.currentUserSleepData = this.currentSleepData.filter((userInfo) =>
      userInfo.userID === this.userID);
      return this.currentUserSleepData;
  }

  calculateAvgHoursSleptPerDayByUser() {
    let avgSleep = this.currentUserSleepData.reduce((acc, day) => {
      acc += day.hoursSlept;
      console.log(acc);
      return acc
    }, 0)/this.currentUserSleepData.length;

    return parseFloat(avgSleep.toFixed(2))
  }

  calculateAvgSleepQualityPerDayByUser() {
    let avgSleepQuality = this.currentUserSleepData.reduce((acc, day) => {
      acc += day.sleepQuality;
      console.log(acc);
      return acc
    }, 0)/this.currentUserSleepData.length;

    return parseFloat(avgSleepQuality.toFixed(2))
  }

  returnHoursSleptByUserOnSpecificDate() {

  }

  returnSleepQualityByUserOnSpecificDate() {

  }

  calculateHoursSleptEachDayByUserOverSpecificWeek() {

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
