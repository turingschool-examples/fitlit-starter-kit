const UserActivity = require("./UserActivity");
const userActivityTestData = require("../src/data/userActivityTestData");

class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
  }

  getFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
  }

  getSleepDataPerDay(sleepData, date, detail) {
    const usersData = sleepData.filter((entry) => entry.userID === this.id);
    const entry = usersData.find((entry) => entry.date === date);
    return entry[detail];
  }

  getAvgSleepDataPerDay(sleepData, detail) {
    const usersData = sleepData.filter((entry) => entry.userID === this.id);
    const totalSleepData = usersData.reduce((total, entry) => {
      total += entry[detail];
      return total;
    }, 0);
    const average = (totalSleepData / usersData.length).toFixed(1);
    return parseFloat(average);
  }

  getSleepPerDayForWeek(sleepData, startDate, detail) {
    const userSleep = sleepData.filter((entry) => entry.userID === this.id);
    const startingDate = userSleep.find((entry) => entry.date === startDate);
    const startIndex = userSleep.indexOf(startingDate);
    let newArr = userSleep.slice(startIndex - 6, startIndex);
    newArr = newArr.reverse();
    const weekSleep = newArr.reduce((sleepForWeek, entry) => {
      sleepForWeek.push({ date: entry.date, [detail]: entry[detail] });
      return sleepForWeek;
    }, []);
    return weekSleep;
  }

  calAverageFluid(fluidsData) {
    const userFluidsInfo = fluidsData.filter((user) => user.userID === this.id);
    const average = userFluidsInfo.reduce((acc, fluid) => {
      acc += fluid.numOunces;
      return acc;
    }, 0);
    return Math.round(average / userFluidsInfo.length);
  }

  getDayFluid(fluidsData, date) {
    const userDayFluids = fluidsData.filter(
      (day) => day.date === date && day.userID === this.id
    );
    const sum = userDayFluids.reduce((acc, fluids) => {
      acc += fluids.numOunces;
      return acc;
    }, 0);
    return sum;
  }

  getWeeklyFluids(fluidsData, userDate) {
    const userInfo = fluidsData.filter((data) => data.userID === this.id);
    const findStartDate = userInfo.find((date) => date.date === userDate);
    const indexOfStart = userInfo.indexOf(findStartDate);
    const weeklyReport = userInfo.slice(indexOfStart - 6, indexOfStart);
    const weeklyFluids = weeklyReport.map((dates) => {
      return { date: dates.date, numOunces: dates.numOunces };
    });
    return weeklyFluids.reverse();
  }

  getDayMilesWalked(userActivityTestData, date) {
    let userActivity = new UserActivity(userActivityTestData[0]);

    let numberOFSteps = userActivity.numOfSteps(userActivityTestData, date);

    let userMiles = numberOFSteps / this.strideLength / 2000;
    return parseFloat(userMiles.toFixed(2));
  }
}

module.exports = User;
