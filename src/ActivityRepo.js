class ActivityRepo {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  returnAverageDailyStairsClimbed(date) {
    let stairsPerDay = this.activityData.filter(day => day.date === date);

    return Number((stairsPerDay.reduce((totalStairs, day) => {
      totalStairs += day.flightsOfStairs;
      return totalStairs;
    }, 0) / stairsPerDay.length).toFixed(2));
  }

  returnAverageNumberofSteps(date) {
    let stepsPerDay = this.activityData.filter(day => day.date === date);

    return Number((stepsPerDay.reduce((totalSteps, day) => {
      totalSteps += day.numSteps;
      return totalSteps;
    }, 0) / stepsPerDay.length).toFixed(2));
  }

  returnAverageMinutesActive(date) {
    let minutesPerDay = this.activityData.filter(day => day.date === date);

    return Number((minutesPerDay.reduce((totalMinutes, day) => {
      totalMinutes += day.minutesActive;
      return totalMinutes;
    }, 0) / minutesPerDay.length).toFixed(2));
  }

  returnMostActive() {
    let person = this.activityData.sort((a, b) => b.minutesActive - a.minutesActive)[0].userID;

    return this.userData.find(user => user.id === person).name;

  }
}



if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}