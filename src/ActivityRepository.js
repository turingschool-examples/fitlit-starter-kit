class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData;
  }
  calculateAverageStairs(date) {
    let specificDate = this.activityData.filter(function(obj) {
      return obj.date === date
    });
    let totalStairs = specificDate.map(function(obj) {
      return obj.flightsOfStairs 
    });
    let total = totalStairs.reduce(function(acc, curVal) {
      return acc = acc + curVal
    }, 0);
    let averageStairsClimbed = total / specificDate.length;
    return Math.ceil(averageStairsClimbed);
  }

  calculateAverageSteps(date) {
    let specificDate = this.activityData.filter(function(obj) {
      return obj.date === date
    });
    let totalSteps = specificDate.map(function(obj) {
      return obj.numSteps 
    });
    let total = totalSteps.reduce(function(acc, curVal) {
      return acc = acc + curVal
    }, 0);
    let averageSteps = total / specificDate.length;
    return Math.ceil(averageSteps);
  }

  calculateAverageMinutesActive(date) {
    let specificDate = this.activityData.filter(function(obj) {
      return obj.date === date
    });
    let totalMinutes = specificDate.map(function(obj) {
      return obj.minutesActive 
    });
    let total = totalMinutes.reduce(function(acc, curVal) {
      return acc = acc + curVal
    }, 0);
    let averageMinutes = total / specificDate.length;
    return Math.ceil(averageMinutes);
  }
  
}

module.exports = ActivityRepository;