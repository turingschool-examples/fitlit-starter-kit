class ActivityRepo {
  constructor(activityData) {
    this.activityData = activityData;
  }

  allUserStairsClimbedByDate(weekStart) {
    weekStart = new Date(weekStart)
    let weekEnd = this.addDays(weekStart, 6);

    let data = this.activityData.filter(function(obj) {
      var date = new Date(obj.date);
      return date >= weekStart && date <= weekEnd;
    });

    let averageStairsClimbed = this.activityData.reduce((acc, users) => {
    acc += users.flightsOfStairs;
    return acc
    }, 0)
    return Math.round(averageStairsClimbed / this.activityData.length);

  }

  averageStepsTakenByDate(weekStart) {
    weekStart = new Date(weekStart)
    let weekEnd = this.addDays(weekStart, 6);

    let data = this.activityData.filter(function(obj) {
      var date = new Date(obj.date);
      return date >= weekStart && date <= weekEnd;
    });

    let averageStepsTaken = this.activityData.reduce((acc, users) => {
    acc += users.numSteps;
    return acc
    }, 0)
    return Math.round(averageStepsTaken / this.activityData.length);
  }

  averageMinutesActiveByDate(weekStart) {
    weekStart = new Date(weekStart)
    let weekEnd = this.addDays(weekStart, 6);

    let data = this.activityData.filter(function(obj) {
      var date = new Date(obj.date);
      return date >= weekStart && date <= weekEnd;
    });

    let averageMinutesActive = this.activityData.reduce((acc, users) => {
    acc += users.minutesActive;
    return acc
    }, 0)
    return Math.round(averageMinutesActive  / this.activityData.length);
  }

  allTimeFlightsClimbed() {
    let sortedFlights = this.activityData.sort((a, b) => {
      return b.flightsOfStairs - a.flightsOfStairs;
    })
    return sortedFlights.shift();
  }

  addDays(date, daysToAdd) {
    var newDate = new Date(date.valueOf());
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  }
}

if(typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}
