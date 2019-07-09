class ActivityRepository {
  constructor(activityData) {
    this.activityData = activityData;
  }
  calculateAverageStairs(date) {
    let specificDate = this.activityData.filter(function(aUser) {
      return aUser.date === date
    });
    let totalStairs = specificDate.map(function(ourUser) {
      return ourUser.flightsOfStairs 
    });
    let total = totalStairs.reduce(function(sum, stairs) {
      return sum = sum + stairs
    }, 0);
    let averageStairsClimbed = total / specificDate.length;
    return Math.ceil(averageStairsClimbed);
  }

  calculateAverageSteps(date) {
    let specificDate = this.activityData.filter(function(aUser) {
      return aUser.date === date
    });
    let totalSteps = specificDate.map(function(ourUser) {
      return ourUser.numSteps 
    });
    let total = totalSteps.reduce(function(sum, steps) {
      return sum = sum + steps
    }, 0);
    let averageSteps = total / specificDate.length;
    return Math.ceil(averageSteps);
  }

  calculateAverageMinutesActive(date) {
    let specificDate = this.activityData.filter(function(aUser) {
      return aUser.date === date
    });
    let totalMinutes = specificDate.map(function(ourUser) {
      return ourUser.minutesActive 
    });
    let total = totalMinutes.reduce(function(sum, minutes) {
      return sum = sum + minutes
    }, 0);
    let averageMinutes = total / specificDate.length;
    return Math.ceil(averageMinutes);
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}