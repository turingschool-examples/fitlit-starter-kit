class ActivityRepository {
  constructor(data) {
    this.data = data;
  }

  returnAvgStairs(date) {
    let dayArray = this.data.filter(day => day.date === date);

    return dayArray.reduce((acc, stairs) => {
      return acc += stairs.flightsOfStairs;
    }, 0) / dayArray.length;
  };

  returnAvgSteps(date) {
    let dayArray = this.data.filter(day => day.date === date);

    return dayArray.reduce((acc, steps) => {
      return acc += steps.numSteps;
    }, 0) / dayArray.length;
  };

  returnAvgMinutesActive(date) {
    let dayArray = this.data.filter(day => day.date === date);

    return dayArray.reduce((acc, min) => {
      return acc += min.minutesActive;
    }, 0) / dayArray.length;
  };
};

if (typeof module !== "undefined") {
  module.exports = ActivityRepository;
}
