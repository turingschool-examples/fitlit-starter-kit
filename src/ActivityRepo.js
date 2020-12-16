class ActivityRepo {
  constructor(activityData, userDataset) {
    this.actData = activityData;
    this.userData = userDataset;    
  }

  findDayAndUser(id, date) {
    const day = this.actData.find(data => data.userID === id && data.date === date);
    const user = this.userData.find(data => data.id === id);
    return {
      day: day,
      user: user
    }
  }

  calculateMiles(id, date) {    
    const allData = this.findDayAndUser(id, date);
    const stride = allData.user.strideLength;
    const miles = (allData.day.numSteps * stride) / 5280;
    const formattedMiles = parseFloat(miles.toFixed(2));        
    return formattedMiles;
  }

  // calculateMinutesActive(id, endDate) {
  //   const allData = this.findDayAndUser(id, endDate);
  // }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}

/*
miles divided by stride length = # steps / mile
I can do steps * stride length to get total miles

{
  "userID": 33,
  "date": "2019/09/21",
  "numSteps": 4070,
  "minutesActive": 168,
  "flightsOfStairs": 3
}

{
  "id": 33,
  "name": "David Whitaker",
  "address": "124 Random Lane, Denver CO, 66666",
  "email": "damwhitmaybeidontknow@gmail.com",
  "strideLength": 2.6,
  "dailyStepGoal": 10000,
  "friends": [
    1,
    4
  ]
}

8855 (steps) * 2.6 (stride length) = 23023
4.360 miles
*/