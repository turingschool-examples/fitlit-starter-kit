
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
    // let sortedFullArray = this.sleepData.sort((a, b) => new Date(b.date) - new Date(a.date));
    // let dateIndex = sortedFullArray.indexOf(sortedFullArray.find((sortedItem)=>(sortedItem.date === date)));
    // let weekOfData = sortedFullArray.slice(dateIndex, dateIndex + 7);
    // console.log(weekArray.sort((a, b) => (b.sleepQuality - a.sleepQuality)));
    let userSleepObject = chosenWeekData.reduce(function(objectSoFar, dataSet) {
      if (!objectSoFar[dataSet.userID]) {
        objectSoFar[dataSet.userID] = [dataSet.sleepQuality]
      } else {
        objectSoFar[dataSet.userID].push(dataSet.sleepQuality)
      }
      return objectSoFar;
    }, {})
    console.log('user sleep object', userSleepObject);
    // let bestSleeperId = weekArray.sort((a, b) => (b.sleepQuality - a.sleepQuality))[0].userID;
    // console.log(bestSleeperId);
    // return userRepo.getDataFromID(bestSleeperId).name;
    let goodSleepers = Object.keys(userSleepObject).filter(function(key) {
      return (userSleepObject[key].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[key].length) > 3
    })
    console.log('these are the good sleepers', goodSleepers);
    return goodSleepers.map(function(sleeper){
      return userRepo.getDataFromID(parseInt(sleeper)).name;
    })
  }
  determineSleepWinner (date, userRepo) {
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

    console.log('This is the the full sleep object', userSleepObject);

    let sleepRank = Object.keys(userSleepObject).sort(function(b, a) {
      return (userSleepObject[a].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[a].length) - (userSleepObject[b].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[b].length)
    })
    console.log("this is sleepRank", sleepRank);

    let sleepRankWithData = sleepRank.map(function(sleeper){
      sleeper = {[sleeper]: userSleepObject[sleeper].reduce(function(sumSoFar, sleepQualityValue){
        sumSoFar += sleepQualityValue
        return sumSoFar;
      }, 0)/userSleepObject[sleeper].length}
      return sleeper;
    })

    console.log('this is sleep rank with data', sleepRankWithData);


    var bestSleepers = sleepRankWithData.filter(function(element){
      console.log("ELEMENT KEY", element[Object.keys(element)]);
      console.log("bEST ONE", parseInt(Object.values(sleepRankWithData[0]).join('')));
      console.log("bEST ONE 2", Object.values(sleepRankWithData[0])[0]);
      return element[Object.keys(element)] === Object.values(sleepRankWithData[0])[0]

      // element[Object.keys(element)] === parseInt(Object.values(sleepRankWithData[0]).join('')
    })

    var bestSleeperIds = bestSleepers.map(function(bestSleeper) {
      return (Object.keys(bestSleeper));
    })

    return bestSleeperIds.map(function(sleepNumber) {
      console.log('HELOOOOO', sleepNumber)
      console.log('BONJOUR', userRepo.getDataFromID(parseInt(sleepNumber)).name)
      return userRepo.getDataFromID(parseInt(sleepNumber)).name;
    })

    // return sleepRank.filter(function(sleeper) { console.log("sleeper", sleeper);
    //   userSleepObject[sleeper].reduce(
    //     function(sumSoFar, sleepQualityValue) {
    //       sumSoFar += sleepQualityValue
    //       return sumSoFar;
    //     },
    //     0
    //   ) / userSleepObject[sleeper].length === userSleepObject[sleepRank[0]].reduce(
    //     function(sumSoFar, sleepQualityValue) {
    //       sumSoFar += sleepQualityValue
    //       return sumSoFar;
    //     },
    //     0
    //   ) / userSleepObject[sleepRank[0]].length
    // })
  }
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
