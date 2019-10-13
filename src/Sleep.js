
class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  calculateAverageSleep(id) {
    let perDaySleep = this.sleepData.filter((data) => id === data.userID);
    return perDaySleep.reduce((sumSoFar, data) => {
      return sumSoFar += data.hoursSlept;
    }, 0)/perDaySleep.length;
  }
  calculateAverageSleepQuality(id) {
    let perDaySleepQuality = this.sleepData.filter((data) => id === data.userID);
    return perDaySleepQuality.reduce((sumSoFar, data) => {
      return sumSoFar += data.sleepQuality;
    }, 0)/perDaySleepQuality.length;
  }
  calculateDailySleep(id, date) {
    let findSleepByDate = this.sleepData.find((data) => id === data.userID && date === data.date);
    return findSleepByDate.hoursSlept;
  }
  calculateDailySleepQuality(id, date) {
    let findSleepQualityByDate = this.sleepData.find((data) => id === data.userID && date === data.date);
    return findSleepQualityByDate.sleepQuality;
  }
  calculateWeekSleep(date, id, userRepo) {
    return userRepo.getWeekFromDate(date, id, this.sleepData).map((data) => `${data.date}: ${data.hoursSlept}`);
  }
  calculateWeekSleepQuality(date, id, userRepo) {
    return userRepo.getWeekFromDate(date, id, this.sleepData).map((data) => `${data.date}: ${data.sleepQuality}`);
  }
  calculateAllUserSleepQuality() {
    var totalSleepQuality = this.sleepData.reduce(function(sumSoFar, dataItem) {
      sumSoFar += dataItem.sleepQuality;
      return sumSoFar;
    }, 0)
    return totalSleepQuality/sleepData.length
  }
  determineBestSleeper(date, userRepo) {

    let sortedFullArray = this.sleepData.sort((a, b) => new Date(b.date) - new Date(a.date));
    let dateIndex = sortedFullArray.indexOf(sortedFullArray.find((sortedItem)=>(sortedItem.date === date)));
    let weekArray = sortedFullArray.slice(dateIndex, dateIndex + 7);
    console.log(weekArray.sort((a, b) => (b.sleepQuality - a.sleepQuality)));
    let bestSleeperId = weekArray.sort((a, b) => (b.sleepQuality - a.sleepQuality))[0].userID;
    console.log(bestSleeperId);
    return userRepo.getDataFromID(bestSleeperId).name;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
