class SleepRepo {
  constructor(sleepData){
    this.sleepData = sleepData;
  }

  getUserSleepData(id) {
    return this.sleepData.filter(object => object.userID === id);
  }

  getAvgSleepQuality() {
    let totalSleepQuality = this.sleepData.reduce((acc, day) => {
      acc += day.sleepQuality;
      return acc;
    }, 0);
    let avgSleepQuality = totalSleepQuality / this.sleepData.length;
    return Math.round(avgSleepQuality * 100) / 100;
  }

  getGreatSleepersByweek(weekDate) {
    let sleepInfo = this.sleepData;
    let dataDate = sleepInfo.map(data => data.date);
    let dateIndex = dataDate.lastIndexOf(weekDate);
    let weekData = sleepInfo.slice(dateIndex - 349, dateIndex + 1);
    let weeklyUsers = weekData.filter(day => day.date === weekDate);
    let usersWithAvg = weeklyUsers.map(userWeek => {
      let userAvgQuality = weekData.reduce((acc, day) => {
        if (day.userID === userWeek.userID) {
          acc += day.sleepQuality;
        }
        return acc;
      }, 0);
      userWeek = { ...userWeek, avgSleepQuality: Math.round((userAvgQuality / 7) * 100) / 100 }
      delete userWeek.date;
      delete userWeek.hoursSlept;
      delete userWeek.sleepQuality;
      return userWeek;
    });
    return usersWithAvg.filter(user => user.avgSleepQuality > 3);
  }

  getMostSleepUserByDay(date) {
    let sleepDataByDate = this.sleepData.filter(data => data.date === date);
    let sortedsleepByDay = sleepDataByDate.sort((a, b) => b.hoursSlept - a.hoursSlept);
    return sortedsleepByDay.filter(day => day.hoursSlept === sortedsleepByDay[0].hoursSlept);
  }
}


if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
