const User = require('../src/User');

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
    }, 0)/this.currentUserSleepData.length;

    return parseFloat(avgSleep.toFixed(2))
  }

  calculateAvgSleepQualityPerDayByUser() {
    let avgSleepQuality = this.currentUserSleepData.reduce((acc, day) => {
      acc += day.sleepQuality;
      return acc
    }, 0)/this.currentUserSleepData.length;

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

  calculateAvgSleepQualityAllUsers() {
    let avgHrsSlept = this.currentSleepData.reduce((acc, dataBlock) => {
      acc += dataBlock.hoursSlept;
      return acc
    }, 0)/this.currentSleepData.length;

    return parseFloat(avgHrsSlept.toFixed(2))
  }

  findUsersWithAvgSleepQualityMoreThanThreeOverSpecificWeek() {
    // let firstSort = this.currentSleepData.sort((a, b) => {
    //   return a.userID - b.userID
    // });
    //
    // let secondSort = firstSort.sort((a, b) => {
    //   return a.date - b.date
    // });

    let allUserSleepDataForFinalWeek = secondSort.slice(-350);

    let finalWeekObject = allUserSleepDataForFinalWeek.reduce((acc, userBlock) => {
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

    allUserSleepDataForFinalWeek.forEach(element => {
      if (element.userID === keysObject[element.userID]) {
        finalWeekObject[element.userID].push(element.sleepQuality)
      }
    });

    console.log(finalWeekObject);

    let finalObjectValues = Object.values(finalWeekObject);
    console.log(finalObjectValues);

    let averages = finalObjectValues.map(element => {
      return (element[0] + element[1] + element[2] + element[3] + element[4] + element[5] + element[6]) / 7
    });

     console.log(averages);
    //  Array of [avg, avg, avg]

    averages.forEach(avg => {
      finalWeekObject[averages.indexOf(avg) + 1] = parseFloat(avg.toFixed(2))
    });

    console.log(finalWeekObject);




  }



    //
    // 1)  get an array of the specific week - 50 users x 7 dates = (array of 350 objects)
    // 2) reduce array into a single object with 50 properties (id), with values of an array of all sleepQualities:
    //   {
    //     1: [2.2, 3, 1.5 ,3, etc]
    //     2: [2.2, 3, 1.5 ,3, etc]
    //     3: [2.2, 3, 1.5 ,3, etc]
    //     etc
    //   }
    //   calcSleepQualityforSpecificWeek(date)


// Sort by ID then by date
// PseudoCode: OK. Make an array of all users average sleep quality for X week (7 dates)
// Figure out a way by using just day one to get the next six days from the seed
// Part two seems easier


  findUsersSleptMostHoursIdentifiedByDate(date) {
    let allSleepDataOnSpecificDay = this.currentSleepData.filter(userBlock => {
      return userBlock.date === date
    });

    let hoursSleptForAllOnSpecificDay = allSleepDataOnSpecificDay.reduce((acc, userBlock) => {
      acc.push(userBlock.hoursSlept);
      return acc
    }, []);

    var theMostHoursSlept =  Math.max(...hoursSleptForAllOnSpecificDay);

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
};
