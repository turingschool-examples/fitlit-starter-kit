const sampleActivityData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 2000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 3000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numSteps": 4000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/15",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 4000,
    "minutesActive": 200,
    "flightsOfStairs": 15
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 20
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numSteps": 4000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/16",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numSteps": 6000,
    "minutesActive": 150,
    "flightsOfStairs": 25
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numSteps": 7000,
    "minutesActive": 200,
    "flightsOfStairs": 5
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numSteps": 4000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/17",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "numSteps": 8000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numSteps": 9000,
    "minutesActive": 150,
    "flightsOfStairs": 15
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numSteps": 4000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/18",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numSteps": 10000,
    "minutesActive": 200,
    "flightsOfStairs": 20
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numSteps": 2000,
    "minutesActive": 100,
    "flightsOfStairs": 25
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numSteps": 4000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/19",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numSteps": 3000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numSteps": 4000,
    "minutesActive": 200,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numSteps": 4000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/20",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 15
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numSteps": 6000,
    "minutesActive": 150,
    "flightsOfStairs": 20
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numSteps": 4000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/21",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "numSteps": 7000,
    "minutesActive": 200,
    "flightsOfStairs": 25
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "numSteps": 8000,
    "minutesActive": 100,
    "flightsOfStairs": 5
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "numSteps": 4000,
    "minutesActive": 150,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/22",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "numSteps": 9000,
    "minutesActive": 150,
    "flightsOfStairs": 10
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "numSteps": 10000,
    "minutesActive": 200,
    "flightsOfStairs": 15
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "numSteps": 4000,
    "minutesActive": 100,
    "flightsOfStairs": 5
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "numSteps": 5000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
  {
    "userID": 5,
    "date": "2019/06/23",
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10
  },
]

if (typeof module !== 'undefined') {
module.exports = {sampleActivityData} 
}