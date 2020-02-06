class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  calcAvgSleepHrTotalDays(userID) {
    let filteredSleep = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let totalSleep = filteredSleep.reduce(function(runningTotal, curVal) {
      return runningTotal + curVal.hoursSlept;
    }, 0);
    return totalSleep / filteredSleep.length;
  }
  calcAvgSleepQualityTotalDays(userID) {
    let filteredSleepQuality = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let totalQuality = filteredSleepQuality.reduce(function(runningTotal, curVal) {
      return runningTotal + curVal.sleepQuality;
    }, 0);
    return totalQuality / filteredSleepQuality.length;
  }
  getDailySleep(userID, date) {
    let filteredSleep = this.sleepData.filter(userEntry => userEntry.userID === userID);
    return filteredSleep.find(day => day.date === date).hoursSlept;
  }
  getDailySleepQuality(userID, date) {
    let filteredSleepQuality = this.sleepData.filter(userEntry => userEntry.userID === userID);
    return filteredSleepQuality.find(day => day.date === date).sleepQuality;
  }

  getPrevDaysSleepHrs(userID, startDate) {
    let userSleepDaysData = this.getPreviousDaysData(userID, startDate);
    return userSleepDaysData.map(dailyUserSleep => dailyUserSleep.hoursSlept);
  }

  getPrevDaysSleepQuality(userID, startDate) {
    let userSleepDaysData = this.getPreviousDaysData(userID, startDate);
    return userSleepDaysData.map(dailyUserSleep => dailyUserSleep.sleepQuality);
  }
  getPreviousDaysData(userID, startDate) {
    let startDateParsed = new Date(startDate);
    let endDateParsed = new Date(startDate);
    endDateParsed.setDate(startDateParsed.getDate() - 7);
    let userSleepData = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let userSleepDaysData = userSleepData.filter(function(sleedDayData) {
      let day = new Date(sleedDayData.date);
      if (day <= startDateParsed && day >= endDateParsed) {
        return true;
      }
    });
    return userSleepDaysData;
  }
  calcAverageSleepQuality() {
    let totalSleepQuality = this.sleepData.reduce(function(total, curVal) {
      return total + curVal.sleepQuality;
    }, 0);
    return totalSleepQuality / this.sleepData.length;
  }

  findAllGreatSleepers(startDate) {
    let startDateParsed = new Date(startDate);
    let endDateParsed = new Date(startDate);
    endDateParsed.setDate(startDateParsed.getDate() - 7);
    let usersSleepPastWeek = this.sleepData.filter(function(sleedDayData) {
      let day = new Date(sleedDayData.date);
      if (day <= startDateParsed && day >= endDateParsed && sleedDayData.sleepQuality > 3) {
        return true;
      }
    });
    return usersSleepPastWeek;
  }
  findLongestSleepers(startDate) {
    let dailyUsers = this.sleepData.filter((element) => element.date = startDate);
    let longestSleeper = dailyUsers.sort((a, b) => b.hoursSlept - a.hoursSlept);
    return longestSleeper.filter((element) => longestSleeper[0].hoursSlept === element.hoursSlept)

  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
