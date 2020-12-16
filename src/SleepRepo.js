const Sleep = require('../src/Sleep');

class SleepRepo {
  constructor(data) {
    this.data = data.map(userData => new Sleep(userData));
  }

  returnAverageHoursSleptPerDay(userID) {
    const currentUserData = this.data.filter(data => data.id === userID);
    const totalHoursSlept = currentUserData.reduce((acc, cur) => {
      return acc + cur.hoursSlept;
    }, 0);
    const avgHoursSlept = totalHoursSlept / currentUserData.length;
    return avgHoursSlept;
  }

  returnOverallAverageSleepQuality(userID) {
    const currentUserData = this.data.filter(data => data.id === userID);
    const totalSleepQuality = currentUserData.reduce((acc, cur) => {
      return acc + cur.sleepQuality;
    }, 0);
    const avgSleepQuality = totalSleepQuality / currentUserData.length
    return avgSleepQuality;
  }

  returnWeekOfDailyHoursSlept(id, date) {
    const currentUserData = this.data.filter(userData => userData.id === id);
    const weekOfDailySleepData = [];
    const endOfWeek = currentUserData.find(userData => userData.date === date);
    const indexOfEndDate = currentUserData.indexOf(endOfWeek);
    for (let i = indexOfEndDate; i >= indexOfEndDate - 6; i--)
    {
    weekOfDailySleepData.push(currentUserData[i].hoursSlept);
    }
    return weekOfDailySleepData;
    }

  returnWeekOfDailySleepQuality(id, date) {
    const currentUserData = this.data.filter(userData => userData.id === id);
    const weekOfDailySleepQualityData = [];
    const endOfWeek = currentUserData.find(userData => userData.date === date);
    const indexOfEndDate = currentUserData.indexOf(endOfWeek);
    for (let i = indexOfEndDate; i >= indexOfEndDate - 6; i--)
    {
    weekOfDailySleepQualityData.push(currentUserData[i].sleepQuality);
    }
    return weekOfDailySleepQualityData;
  }

  returnAverageSleepQualityForAllUsers() {
    const allSleepQuality = this.data.reduce((acc, cur) => {
      return acc + cur.sleepQuality;
    }, 0);
    const avgSleepQualityForAllUsers = allSleepQuality / this.data.length;
    return avgSleepQualityForAllUsers;
  }

  returnLongestSleepers(date) {
    const hoursSleptThisDay = this.data.filter(sleep => sleep.date === date)
    const hoursSleptRankedHighToLow = hoursSleptThisDay.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    });
    const heaviestSleepers = hoursSleptRankedHighToLow.filter(heavy =>
      heavy.hoursSlept === hoursSleptRankedHighToLow[0].hoursSlept);
    const userIDsOfHeaviestSleepers = heaviestSleepers.map(id => id.id);
      return userIDsOfHeaviestSleepers;
  }

  returnUserWithSleepQualityThreeOrGreater(date) {
    const totalUserIDs = this.data.map(user => user.id);
    const allUserIDs = totalUserIDs.filter((user, index) =>
    {
    return totalUserIDs.indexOf(user) === index;
  });
    const arrayOfSleepDataPerUser = allUserIDs.map(id => this.data.filter(sleep => sleep.id === id));
    const arrayOfDates = arrayOfSleepDataPerUser[0].map(sleep => sleep.date);
    const indexOfEndDate = arrayOfDates.indexOf(date);
    const weekOfUserSleepQuality = arrayOfSleepDataPerUser.map(array => array.slice(indexOfEndDate - 6, indexOfEndDate + 1));
    const eachUsersTotalSleepQuality = weekOfUserSleepQuality.map(array => array.reduce((acc, cur) =>
    {
    return acc + cur.sleepQuality;
  }, 0));
    const avgSleepQualityPerUser = eachUsersTotalSleepQuality.map(total => total / weekOfUserSleepQuality[0].length);
    const sleepQualityThreeOrMore = avgSleepQualityPerUser.filter((sleep) => sleep > 3);
    const users3AndAbove = [];
    for (let i = 0; i < avgSleepQualityPerUser.length; i++) {
      for (let j = 0; j < sleepQualityThreeOrMore.length; j++) {
        if (sleepQualityThreeOrMore[j] === avgSleepQualityPerUser[i]) {
          const userID = i + 1;
          users3AndAbove.push(userID);
        }
      }
    }
    return users3AndAbove;
  }
  };


if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
