import SleepSeries from "./SleepSeries";

class User {
  constructor(userData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.userSleepData = new SleepSeries();
  }

  getFirstName() {
    let firstName = this.name.split(" ");
    return firstName[0];
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
}

export default User;
