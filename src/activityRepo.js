class ActivityRepo {
  constructor(activityData){
    this.activityData = activityData;
  }

  getUserActivityData(id) {
    return this.activityData.filter(data => data.userID === id);
  }

  calcAvgStairsClimbedByDay(date) {
    let totalFlights = this.activityData.reduce((acc, user) => {
      if (user.date === date) {
        acc += user.flightsOfStairs;
      }
      return acc;
    }, 0)
    
    return Math.round(totalFlights / 50);
  };
}


if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}