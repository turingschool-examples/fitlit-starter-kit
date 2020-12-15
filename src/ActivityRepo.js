class ActivityRepo {
  constructor() {}
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepo;
}

/*
miles divided by stride length = # steps / mile
I can do steps * stride length to get total miles

{
  "userID": 3,
  "date": "2019/09/21",
  "numSteps": 8855,
  "minutesActive": 235,
  "flightsOfStairs": 17
}

{
  "id": 3,
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