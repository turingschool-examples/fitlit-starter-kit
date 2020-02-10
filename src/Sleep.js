class Sleep {
  constructor(usersRepository) {
    this.userID = usersRepository.id;
    this.date;
    this.hoursSlept;
    this.sleepQuality;
  }

  calculateAverageSleepTimeOverall(sleepDatas) {
    let userSleepHours;
    userSleepHours = sleepDatas.filter(sleepData =>
      sleepData.userID === this.userID).map(
        sleepData => sleepData.hoursSlept
      )
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

  findAverageSleepQualityForAllUsers(sleepDatas) {
    let allUserTotal = sleepDatas.reduce((acc, data) => {
      acc += data.sleepQuality;
      return acc;
    }, 0)
    let averageSleepQualityOverall = allUserTotal/sleepDatas.length;
    return parseFloat(averageSleepQualityOverall.toFixed(2));
  }

  findAllUserSleepQualityOverThree(sleepDatas, userDatas, dateRange) {
    // let highUserSleepQualities = [];
    // let sleepers = userDatas.filter(data => data.id === sleepDatas.userID);
    // console.log(sleepers);



  }

  findUsersMostSleepTimeByDay(sleepDatas, date) {
      let sleepDate = sleepDatas.filter(data => data.date === date);
      let longestSleeper = sleepDate.sort((a, b) => b.hoursSlept - a.hoursSlept);
      return longestSleeper[0].userID;
  }

  static findUserHighestSleepAverage(sleepDatas) {
  // find user with the highest sleep average overall //
  let hoursByID = sleepDatas.reduce((acc, sleepData) => {
    let id = sleepData.userID;
    if(acc[id] === undefined) {
      acc[id] = [0/*count*/, 0/*sleephours*/];
    }
    acc[id][1] += sleepData.hoursSlept; //total sleep hours for user
    acc[id][0]++ //total observastions
    return acc;
  }, {});
   for(let id in hoursByID) {
     hoursByID[id][1] /= hoursByID[id][0] // replacing the acc hours slept with itself divided by the count
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
