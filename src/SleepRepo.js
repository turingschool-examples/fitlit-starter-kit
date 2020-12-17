// const Sleep = require('../src/Sleep');

class SleepRepo {
  constructor(data) {
    this.data = data.map(userData => new Sleep(userData));
  }

  returnAvgData(id, propertyName) {
    const filteredData = this.data.filter(data => data.id === id);
    const total = filteredData.reduce((total, data) => {
      return total + data[propertyName];
    }, 0);

    const average = total / filteredData.length;
    return average;
  }

  returnAverageHoursSleptPerDay(id) {
    return this.returnAvgData(id, 'hoursSlept');
  }

  returnOverallAverageSleepQuality(id) {
    return this.returnAvgData(id, 'sleepQuality');
  }

  returnWeeklyData(id, date, propertyName) {
    const currentUserData = this.data.filter(userData => userData.id === id);
    const indexOfEndDate = currentUserData.findIndex(userData => userData.date === date);
    const weekData = currentUserData.slice(0, indexOfEndDate + 1);
    const weekOfDailyDataNeeded = [];
    weekData.forEach(userData => weekOfDailyDataNeeded.push(userData[propertyName]));
    return weekOfDailyDataNeeded;
  }

  returnWeekOfDailyHoursSlept(id, date) {
    return this.returnWeeklyData(id, date, 'hoursSlept');
  }

  returnWeekOfDailySleepQuality(id, date) {
    return this.returnWeeklyData(id, date, 'sleepQuality');
  }

  returnAverageSleepQualityForAllUsers() {
    const allSleepQuality = this.data.reduce((acc, cur) => {
      return acc + cur.sleepQuality;
    }, 0);
    const avgSleepQualityForAllUsers = parseFloat((allSleepQuality / this.data.length).toFixed(2));
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

  prepareWeekData(date) {
    const leastAndGreatest = { least: this.data[0].id, greatest: this.data[this.data.length - 1].id };
    const startingDateDigits = parseInt(date.slice(-2)) - 6;
    const startingDate = date.slice(0, 8) + startingDateDigits;
    const lastIndex = this.data.findIndex(data => data.id === leastAndGreatest.greatest && data.date === date);
    const firstIndex = this.data.findIndex(data => data.id === leastAndGreatest.least && data.date === startingDate);
    const targetWeek = this.data.slice(firstIndex, lastIndex + 1);
    return {
      week: targetWeek,
      greatest: leastAndGreatest.greatest
    }
  }

  returnUsersWithSleepQualityThreeOrGreater(date) {
    const targetWeekData = this.prepareWeekData(date);
    const week = targetWeekData.week;
    return week.reduce((usersWhoSleptGreat, data) => {
      const totalSleepQuality = week.reduce((quality, newData) => {
        if (data.id === newData.id) {
          quality += newData.sleepQuality;
        }

        return quality;
      }, 0);

      const avgSleepQuality = totalSleepQuality / (week.length / targetWeekData.greatest);
      if (avgSleepQuality >= 3 && !usersWhoSleptGreat.includes(data.id)) {
        usersWhoSleptGreat.push(data.id);
      }

      return usersWhoSleptGreat;
    }, []);
  }
};


if (typeof module !== 'undefined') {
  module.exports = SleepRepo;
}
