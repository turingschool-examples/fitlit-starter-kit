class Sleep {
  constructor(usersRepository, sleepDataSet) {
    this.userID = usersRepository.id;
    this.usersSleepData = sleepDataSet;
  }

  calculateAverageSleepTimeOverall() {
    let userSleepHours = this.usersSleepData.filter(sleepData =>
      sleepData.userID === this.userID)
      .map(sleepData => sleepData.hoursSlept)

    let totalSleep = userSleepHours.reduce((acc, sleep) => {
        acc += sleep;
        return acc;
    }, 0)

    let averageSleepHours = totalSleep / userSleepHours.length;

    return parseFloat(averageSleepHours.toFixed(1));
  }

  calculateAverageSleepQualityOverall() {
    let userSleepQuality = [];

    this.usersSleepData.filter(sleepData => {
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

  findSleepTimeByDate(date) {
    let userSleepData = this.usersSleepData.filter(sleepData => sleepData.userID ===
    this.userID)
    .find(sleepData => sleepData.date === date);

    return userSleepData.hoursSlept;
  }

  findSleepQualityByDate(date){
    let userSleepData = this.usersSleepData.filter(sleepData => sleepData.userID ===
    this.userID)
    .find(sleepData => sleepData.date === date);

    return userSleepData.sleepQuality;
  }

  findAverageSleepHourByWeek(dateRange) {
    let userWeekSleep = [];
    let userSleepData = this.usersSleepData.filter(sleepData => sleepData.userID === this.userID);
    dateRange.forEach(date => {
      userSleepData.map(data => {
        if(date === data.date) {
          userWeekSleep.push({date: data.date, sleepHours: data.hoursSlept})
        }
      })
    })

    return userWeekSleep;
  }

  findAverageSleepQualityByWeek(dateRange) {
    let userWeekSleepQuality = [];
    let userSleepData = this.usersSleepData.filter(sleepData => sleepData.userID === this.userID);
    dateRange.forEach(date => {
      userSleepData.map(data => {
        if(date === data.date) {
          userWeekSleepQuality.push({date: data.date, sleepQuality: data.sleepQuality})
        }
      })
    })

    return userWeekSleepQuality;
  }

  findAverageSleepQualityForAllUsers() {
    let allUserTotal = this.usersSleepData.reduce((acc, data) => {
      acc += data.sleepQuality;
      return acc;
    }, 0)
    let averageSleepQualityOverall = allUserTotal/this.usersSleepData.length;
    return parseFloat(averageSleepQualityOverall.toFixed(2));
  }

  findAllUserSleepQualityOverThree(sleepDatas, userDatas, dateRange) {
    // let highUserSleepQualities = [];
    // let sleepers = userDatas.filter(data => data.id === sleepDatas.userID);
    // console.log(sleepers);



  }

  findUsersMostSleepTimeByDay(date) {
      let sleepDate = this.usersSleepData.filter(data => data.date === date);
      let longestSleeper = sleepDate.sort((a, b) => b.hoursSlept - a.hoursSlept);
      return longestSleeper[0].userID;
  }

  findUserHighestSleepAverage() {
  let hoursByID = this.usersSleepData.reduce((acc, sleepData) => {
    let id = sleepData.userID;
    if(acc[id] === undefined) {
      acc[id] = [0, 0];
    }
    acc[id][1] += sleepData.hoursSlept;
    acc[id][0]++
    return acc;
  }, {});
   for(let id in hoursByID) {
     hoursByID[id][1] /= hoursByID[id][0]
   }
    let idMax;
    let averageMax = 0;
    for(let id in hoursByID) {
     let average = hoursByID[id][1];
     if(average > averageMax) {
       averageMax = average;
       idMax = id;
     }
    }
    return +idMax;

  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
