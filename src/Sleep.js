class Sleep {
  constructor(sleepData, userId, userData) {
    this.currentSleepData = sleepData;
    this.userID = userId;
    this.currentUserSleepData;
    this.userDataForSleep = userData
  }

  findCurrentUserSleepData() {
    this.currentUserSleepData = this.currentSleepData.filter((userInfo) =>
      userInfo.userID === this.userID);

    return this.currentUserSleepData;
  }

  calculateAvgHoursSleptPerDayByUser() {
    let avgSleep = this.currentUserSleepData.reduce((acc, day) => {
      acc += day.hoursSlept;
      return acc
    }, 0) / this.currentUserSleepData.length;

    return parseFloat(avgSleep.toFixed(2))
  }

  calculateAvgSleepQualityPerDayByUser() {
    let avgSleepQuality = this.currentUserSleepData.reduce((acc, day) => {
      acc += day.sleepQuality;
      return acc
    }, 0) / this.currentUserSleepData.length;

    return parseFloat(avgSleepQuality.toFixed(2))
  }

  returnHoursSleptByUserOnSpecificDate(date) {
    let sleepDataOnSpecificDate = this.currentUserSleepData.find(userBlock => {
      return (userBlock.date === date)
    });

    return sleepDataOnSpecificDate.hoursSlept
  }

  returnSleepQualityByUserOnSpecificDate(date) {
    let sleepQualityOnSpecificDate = this.currentUserSleepData.find(userBlock => {
      return (userBlock.date === date)
    });

    return sleepQualityOnSpecificDate.sleepQuality
  }

  calculateHoursSleptEachDayByUserOverSpecificWeek() {
    let sevenDaySleepData = this.currentUserSleepData.map(day => {
      return day.hoursSlept
    });

    return sevenDaySleepData.slice(-7)
  }

  calculateEachDaysSleepQualityForUserOverSpecificWeek() {
    let sevenDaySleepQualityData = this.currentUserSleepData.map(day => {
      return day.sleepQuality
    });

    return sevenDaySleepQualityData.slice(-7)
  }

  calculateAvgSleepQualityAllUsers() {
    let avgHrsSlept = this.currentSleepData.reduce((acc, dataBlock) => {
      acc += dataBlock.hoursSlept;
      return acc
    }, 0) / this.currentSleepData.length;

    return parseFloat(avgHrsSlept.toFixed(2))
  }

  findUsersWithAvgSleepQualityMoreThanThreeOverSpecificWeek(date) {
    let indexForUserOneAtSpecificDate = this.currentSleepData.findIndex(userBlock => {
      return (userBlock.userID === 1 && userBlock.date === date)
    });

    let allUserSleepDataForSpecificWeek = this.currentSleepData.slice(indexForUserOneAtSpecificDate, (indexForUserOneAtSpecificDate + 349));
    let finalWeekObject = allUserSleepDataForSpecificWeek.reduce((acc, userBlock) => {
      if (!acc[userBlock.userID]) {
        acc[userBlock.userID] = []
      }

      return acc
    }, {});

    let keysForFinalWeekObject = Object.keys(finalWeekObject);
    let keysObject = keysForFinalWeekObject.reduce((acc, num) => {
      if (!acc[num]) {
        acc[num] = parseInt(num)
      }

      return acc
    }, {});

    allUserSleepDataForSpecificWeek.forEach(element => {
      if (element.userID === keysObject[element.userID]) {
        finalWeekObject[element.userID].push(element.sleepQuality)
      }
    });

    let finalObjectValues = Object.values(finalWeekObject);
    let averages = finalObjectValues.map(element => {
      return (element[0] + element[1] + element[2] + element[3] + element[4] + element[5] + element[6]) / 7
    });

    averages.forEach(avg => {
      finalWeekObject[averages.indexOf(avg) + 1] = parseFloat(avg.toFixed(2))
    });

    let finishedObjectKeys = Object.keys(finalWeekObject);
    let bestSleeperIds = finishedObjectKeys.filter(key => {
      return finalWeekObject[key] > 3
    });

    let parsedBestSleeperIds = bestSleeperIds.map(id => {
      return parseInt(id)
    });

    return this.userDataForSleep.reduce((acc, userBlock) => {
      if (parsedBestSleeperIds.includes(userBlock.id)) {
         acc.push(userBlock.name)
      }

      return acc
    }, []);
  }

  findUsersSleptMostHoursIdentifiedByDate(date) {
    let allSleepDataOnSpecificDay = this.currentSleepData.filter(userBlock => {
      return userBlock.date === date
    });

    let hoursSleptForAllOnSpecificDay = allSleepDataOnSpecificDay.reduce((acc, userBlock) => {
      acc.push(userBlock.hoursSlept);
      return acc
    }, []);

    let theMostHoursSlept =  Math.max(...hoursSleptForAllOnSpecificDay)
    let deepestSleepers = allSleepDataOnSpecificDay.filter(userBlock => {
      return userBlock.hoursSlept === theMostHoursSlept
    });

    let idsForDeepestSleepers = deepestSleepers.reduce((acc, userBlock) => {
      acc.push(userBlock.userID);
      return acc
    }, []);

    return this.userDataForSleep.reduce((acc, userBlock) => {
      if (idsForDeepestSleepers.includes(userBlock.id)) {
         acc.push(userBlock.name)
      }

      return acc
    }, []);
  }

  findDateUserSleptBest() {
    let sleepQualities = this.currentUserSleepData.map(userBlock => {
      return userBlock.sleepQuality
    });

    let bestSleepQuality =  Math.max(...sleepQualities);
    let blockWithBestQualitySleep = this.currentUserSleepData.find(userBlock => {
      return userBlock.sleepQuality === bestSleepQuality
    });

    return blockWithBestQualitySleep.date
  }
}
if (typeof module !== 'undefined') {
    module.exports = Sleep;
}
