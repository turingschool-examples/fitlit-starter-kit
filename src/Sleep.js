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
}








module.exports = Sleep;

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}