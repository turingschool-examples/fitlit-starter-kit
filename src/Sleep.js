class Sleep {
  constructor(usersRepository) {
    this.userID = usersRepository.id;
    this.date;
    this.hoursSlept;
    this.sleepQuality;
  }

  calculateAverageSleepTimeOverall(sleepDatas) {
    let userSleepHours = [];
    sleepDatas.filter(sleepData => {
      if(sleepData.userID === this.userID) {
        userSleepHours.push(sleepData.hoursSlept)
      }
    })
    let totalSleep = userSleepHours.reduce((acc, sleep) => {
        acc += sleep;
        return acc;
    }, 0)
    let averageSleepHours = totalSleep / userSleepHours.length;
    return parseFloat(averageSleepHours.toFixed(1));
  }

  calculateAverageSleepQualityOverall(sleepDatas) {
    let userSleepQuality = [];
    sleepDatas.filter(sleepData => {
      if(sleepData.userID === this.userID) {
        userSleepQuality.push(sleepData.sleepQuality)
      }
    })
    let totalSleepQuality = userSleepQuality.reduce((acc, sleep) => {
        acc += sleep;
        return acc;
    }, 0)
    let averageSleepQuality = totalSleepQuality / userSleepQuality.length;
    return parseFloat(averageSleepQuality.toFixed(1));
  }

  findSleepTimeByDate(sleepDatas, date) {
    let userSleepData = sleepDatas.filter(sleepData => sleepData.userID ===
    this.userID).find(sleepData => sleepData.date === date);
    return userSleepData.hoursSlept;
  }

  findSleepQualityByDate(sleepDatas, date){
    let userSleepData = sleepDatas.filter(sleepData => sleepData.userID ===
    this.userID).find(sleepData => sleepData.date === date);
    return userSleepData.sleepQuality;
  }

  findAverageSleepHourByWeek(sleepDatas, dateRange) {
    let userWeekSleep = [];
    let userSleepData = sleepDatas.filter(sleepData => sleepData.userID === this.userID);
    dateRange.forEach(date => {
      userSleepData.map(data => {
        if(date === data.date) {
          userWeekSleep.push({date: data.date, sleepHours: data.hoursSlept})
        }
      })
    })

    return userWeekSleep;
  }

  findAverageSleepQualityByWeek(sleepDatas, dateRange) {
    let userWeekSleepQuality = [];
    let userSleepData = sleepDatas.filter(sleepData => sleepData.userID === this.userID);
    dateRange.forEach(date => {
      userSleepData.map(data => {
        if(date === data.date) {
          userWeekSleepQuality.push({date: data.date, sleepQuality: data.sleepQuality})
        }
      })
    })

    return userWeekSleepQuality;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
