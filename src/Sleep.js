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
    },0) / this.currentUserData.length;
    let avgSleep = parseFloat(user.toFixed(2));
    return avgSleep
  }

  findHoursSleptByDate(dateString) {
    let day = this.currentUserData.find(el => el.date === dateString);
    return day.hoursSlept;
  }

  findSleepQualityByDate(dateString) {
    let day = this.currentUserData.find(el => el.date === dateString);
    return day.sleepQuality; 
  }

  function findHoursSleptEachDayOverWeek(startDate, endDate, property) {
    let answer = [];
   let week = currentUserData.filter(eachDay => {
        if (new Date(eachDay.date) >= new Date(startDate) && new Date(eachDay.date) <= new Date(endDate)){
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
}








module.exports = Sleep;

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}