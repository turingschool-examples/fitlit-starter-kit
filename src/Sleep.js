class Sleep {
  constructor(allSleepData, id) {
    this.allSleepData = allSleepData;
    this.currentUserId = id;
    this.currentUserData;
  }

  findCurrentUserData() {
    this.currentUserData = this.allSleepData.filter(user => user.userID === this.currentUserId);
    return this.currentUserData;
  }

  findUserAverageHoursSleptEachDayById() {  
    let user = this.currentUserData.reduce((sum, currentDay) => {
      sum += currentDay.hoursSlept
      return sum
    }, 0) / this.currentUserData.length;
    let avgSleep = parseFloat(user.toFixed(2));
    return avgSleep
  }

  findUserAverageSleepQualityPerDay() {  
    let user = this.currentUserData.reduce((sum, currentDay) => {
      sum += currentDay.sleepQuality
      return sum
    }, 0) / this.currentUserData.length;
    let avgQuality = parseFloat(user.toFixed(2));
    return avgQuality
  }

  findHoursSleptByDate(dateString) {
    let day = this.currentUserData.find(el => el.date === dateString);
    return day.hoursSlept;
  }

  findSleepQualityByDate(dateString) {
    let day = this.currentUserData.find(el => el.date === dateString);
    return day.sleepQuality; 
  }

  findSleepHoursOrQualityEachDayOverWeek(startDate, endDate, property) {
    let answer = [];
    let week = this.currentUserData.filter(eachDay => {
      if (new Date(eachDay.date) >= new Date(startDate) && new Date(eachDay.date) <= new Date(endDate)) {
        return eachDay
      }
    }).reduce((acc, day) => {
      if (!acc.date) {
        acc.date = day.date
      }
      if (!acc[property]) {
        acc[property] = day[property]
      }
      answer.push(acc)
      return {};
    }, {})
    return answer;
  }

  fetchAverageQualityOfSleepAllUsers() {
    const result = this.allSleepData.reduce((qualitySleep, user) => {
      qualitySleep += user.sleepQuality 
      return qualitySleep;
    }, 0)/this.allSleepData.length
    let avgQuality = parseFloat(result.toFixed(2));
    return avgQuality
  }

  findUsersSleptMostHoursBasedOnDate(dateString) {
    var date = this.allSleepData.filter(element => element.date === dateString)
    var mostSleep = date.reduce((acc, user) => {
      if(user.hoursSlept > acc) {
        acc = user.hoursSlept
      }
      return acc
    }, 0)
    return date.filter(element => element.hoursSlept === mostSleep)
  }
}









module.exports = Sleep;

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}