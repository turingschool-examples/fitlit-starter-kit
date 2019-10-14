
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
  determineBestSleepers(date, userRepo) {
    let chosenWeekData = this.sleepData.filter(function(dataItem) {
      return (new Date(date)).setDate((new Date(date)).getDate() - 7) <= new Date(dataItem.date) && new Date(dataItem.date) <= new Date(date)
    })

    let userSleepObject = chosenWeekData.reduce(function(objectSoFar, dataSet) {
      if (!objectSoFar[dataSet.userID]) {
        objectSoFar[dataSet.userID] = [dataSet.sleepQuality]
      } else {
        objectSoFar[dataSet.userID].push(dataSet.sleepQuality)
      }
      return objectSoFar;
    }, {})

    let goodSleepers = Object.keys(userSleepObject).filter(function(key) {
      return (userSleepObject[key].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[key].length) > 3
    })

    return goodSleepers.map(function(sleeper){
      return userRepo.getDataFromID(parseInt(sleeper)).name;
    })
  }
  determineSleepWinner (date, userRepo) {
    let chosenWeekData = this.sleepData.filter(function(dataItem) {
      return (new Date(date)).setDate((new Date(date)).getDate() - 7) <= new Date(dataItem.date) && new Date(dataItem.date) <= new Date(date)
    });

    let userSleepObject = chosenWeekData.reduce(function(objectSoFar, dataSet) {
      if (!objectSoFar[dataSet.userID]) {
        objectSoFar[dataSet.userID] = [dataSet.sleepQuality]
      } else {
        objectSoFar[dataSet.userID].push(dataSet.sleepQuality)
      }
      return objectSoFar;
    }, {});

    let sleepRank = Object.keys(userSleepObject).sort(function(b, a) {
      return (userSleepObject[a].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[a].length) - (userSleepObject[b].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[b].length)
    });

    let sleepRankWithData = sleepRank.map(function(sleeper){
      sleeper = {[sleeper]: userSleepObject[sleeper].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[sleeper].length}
      return sleeper;
    });

    var bestSleepers = sleepRankWithData.filter(function(element){
      return element[Object.keys(element)] === Object.values(sleepRankWithData[0])[0]
    });

    var bestSleeperIds = bestSleepers.map(function(bestSleeper) {
      return (Object.keys(bestSleeper));
    })

    return bestSleeperIds.map(function(sleepNumber) {
      return userRepo.getDataFromID(parseInt(sleepNumber)).name;
    });
  }
  determineSleepHoursWinner(date, userRepo) {
    let chosenDayData = this.sleepData.filter(function(dataItem) {
      return dataItem.date === date
    });

    let userSleepObject = chosenDayData.reduce(function(objectSoFar, dataSet) {
      if (!objectSoFar[dataSet.userID]) {
        objectSoFar[dataSet.userID] = [dataSet.hoursSlept]
      } else {
        objectSoFar[dataSet.userID].push(dataSet.hoursSlept)
      }
      return objectSoFar;
    }, {});

    let sleepRank = Object.keys(userSleepObject).sort(function(b, a) {
      return (userSleepObject[a].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[a].length) - (userSleepObject[b].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[b].length)
    });

    let sleepRankWithData = sleepRank.map(function(sleeper){
      sleeper = {[sleeper]: userSleepObject[sleeper].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[sleeper].length}
      return sleeper;
    });

    var bestSleepers = sleepRankWithData.filter(function(element){
      return element[Object.keys(element)] === Object.values(sleepRankWithData[0])[0]
    });

    var bestSleeperIds = bestSleepers.map(function(bestSleeper) {
      return (Object.keys(bestSleeper));
    })

    return bestSleeperIds.map(function(sleepNumber) {
      return userRepo.getDataFromID(parseInt(sleepNumber)).name;
    });
  }


}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
