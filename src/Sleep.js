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

//   findUsersWithAvgSleepQualityMoreThanThreeOverSpecificWeek(date) {
//
//     calcSleepQualityforSpecificWeek(date)
//       sleepData.sort((a, b) => {
//         return a.userID - b.userID
//       });
//       sleepData.sort((a, b) => {
//         return a.date - b.date
//       });
//
//
// // Sort by ID then by date
// // PseudoCode: OK. Make an array of all users average sleep quality for X week (7 dates)
// // Figure out a way by using just day one to get the next six days from the seed
// // Part two seems easier
//   }

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

  }
}


if (typeof module !== 'undefined') {
    module.exports = Sleep;
};
