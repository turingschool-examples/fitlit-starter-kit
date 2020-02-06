class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  calcAvgSleepHrTotalDays(userID) {
    let filteredSleep = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let sum = filteredSleep.reduce(function(total, curVal) {
      return total + curVal.hoursSlept;
    }, 0);
    return sum / filteredSleep.length;
  }
  calcAvgSleepQualityTotalDays(userID) {
    let filteredSleepQuality = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let sum = filteredSleepQuality.reduce(function(total, curVal) {
      return total + curVal.sleepQuality;
    }, 0);
    return sum / filteredSleepQuality.length;
  }
  getDailySleep(userID,date){
        let filteredSleep = this.sleepData.filter(userEntry => userEntry.userID === userID);
        return filteredSleep.find(day => day.date ===date).hoursSlept;
  }
  getDailySleepQuality(userID,date){
    let filteredSleepQuality = this.sleepData.filter(userEntry => userEntry.userID === userID);
    return filteredSleepQuality.find(day => day.date ===date).sleepQuality;
  }

  getPrevDaysSleepHrs(userID,startDate){
    let userSleepDaysData = this.getPreviousDaysData(userID,startDate);
    return userSleepDaysData.map(dailyUserSleep => dailyUserSleep.hoursSlept);
  }

  getPrevDaysSleepQuality(userID,startDate){
    let userSleepDaysData = this.getPreviousDaysData(userID,startDate);
    return userSleepDaysData.map(dailyUserSleep => dailyUserSleep.sleepQuality);
  }
  getPreviousDaysData(userID,startDate){
    let startDateParsed = new Date(startDate);
    let endDateParsed = new Date(startDate);
    endDateParsed.setDate(startDateParsed.getDate()-7);
    let userSleepData = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let userSleepDaysData = userSleepData.filter(function(sleedDayData){
      let day = new Date(sleedDayData.date);
      if(day <= startDateParsed && day >=endDateParsed){
        return true;
      }
    });
    return userSleepDaysData;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
