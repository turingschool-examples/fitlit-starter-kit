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
    let weekDateArray = weekDate.split('/');
    let weekDateInt = weekDateArray.map(weekDate => parseInt(weekDate));
    let dateIntData = this.sleepData.map(data => {
    let stringNums = data.date.split('/');
    let nums = stringNums.map(stringNum => parseInt(stringNum));
    data.date = nums
    return data
  });
  // if (weekDateInt[3] < 8) {
  //   let num = 0 - weekDateInt[3];
  // }
    let oneWeek = dateIntData.filter(data => {
      if (data.date[1] === weekDateInt[1]) {
        return (weekDateInt[2] - 7) < data.date[2] && data.date[2] <= weekDateInt[2]
      } else if (data.date[1] < weekDateInt[1]) {
        return weekDateInt[2] < data.date[2]
      }
    });
    return oneWeek.filter(day => day.sleepQuality > 3)
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
