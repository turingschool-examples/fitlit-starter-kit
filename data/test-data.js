const userSampleData = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [16, 4, 8]
  }, {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [9, 18, 24, 19]
  }, {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [19, 11, 42, 33]
  }, {
    "id": 4,
    "name": "Mae Connelly",
    "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
    "email": "Marcos_Pollich@hotmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 4000,
    "friends": [48, 7, 44, 8]
  }
]

const hydrationSampleData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  }, {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 40
  }, {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 30
  }, {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 47
  }, {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 27
  }, {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 42
  }, {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 46
  }, {
    "userID": 1,
    "date": "2019/06/22",
    "numOunces": 33
  }, {
    "userID": 1,
    "date": "2019/06/23",
    "numOunces": 20
  }, {
    "userID": 1,
    "date": "2019/06/24",
    "numOunces": 45
  }, {
    "userID": 2,
    "date": "2019/06/24",
    "numOunces": 3
  }, {
    "userID": 2,
    "date": "2019/06/23",
    "numOunces": 2
  }, {
    "userID": 2,
    "date": "2019/06/22",
    "numOunces": 4
  }
]

const sleepSampleData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  }, {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  }, {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  }, {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 5.4,
    "sleepQuality": 3
  }, {
    "userID": 1,
    "date": "2019/06/19",
    "hoursSlept": 4.1,
    "sleepQuality": 3.6
  }, {
    "userID": 1,
    "date": "2019/06/20",
    "hoursSlept": 9.6,
    "sleepQuality": 2.9
  }, {
    "userID": 1,
    "date": "2019/06/21",
    "hoursSlept": 5.1,
    "sleepQuality": 2.6
  }, {
    "userID": 1,
    "date": "2019/06/22",
    "hoursSlept": 8.1,
    "sleepQuality": 3.5
  }, {
    "userID": 1,
    "date": "2019/06/23",
    "hoursSlept": 8.9,
    "sleepQuality": 2.2
  }, {
    "userID": 1,
    "date": "2019/06/24",
    "hoursSlept": 4.4,
    "sleepQuality": 1.6
  }, {
    "userID": 2,
    "date": "2019/06/24",
    "hoursSlept": 4.9,
    "sleepQuality": 3.9
  }, {
    "userID": 2,
    "date": "2019/06/23",
    "hoursSlept": 8,
    "sleepQuality": 3.4
  }, {
    "userID": 2,
    "date": "2019/06/22",
    "hoursSlept": 10.1,
    "sleepQuality": 1.8
  }
]

const activitySampleData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  }, {
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
  }, {
    "userID": 1,
    "date": "2019/06/17",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
  }, {
    "userID": 1,
    "date": "2019/06/18",
    "numSteps": 3486,
    "minutesActive": 114,
    "flightsOfStairs": 32
  }, {
    "userID": 1,
    "date": "2019/06/19",
    "numSteps": 11374,
    "minutesActive": 213,
    "flightsOfStairs": 13
  }, {
    "userID": 1,
    "date": "2019/06/20",
    "numSteps": 14810,
    "minutesActive": 287,
    "flightsOfStairs": 18
  }, {
    "userID": 1,
    "date": "2019/06/21",
    "numSteps": 2634,
    "minutesActive": 107,
    "flightsOfStairs": 5
  }, {
    "userID": 1,
    "date": "2019/06/22",
    "numSteps": 10333,
    "minutesActive": 114,
    "flightsOfStairs": 31
  }, {
    "userID": 1,
    "date": "2019/06/23",
    "numSteps": 6389,
    "minutesActive": 41,
    "flightsOfStairs": 33
  }, {
    "userID": 1,
    "date": "2019/06/24",
    "numSteps": 8015,
    "minutesActive": 106,
    "flightsOfStairs": 37
  }, {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 11652,
    "minutesActive": 20,
    "flightsOfStairs": 24
  }, {
    "userID": 2,
    "date": "2019/06/16",
    "numSteps": 9256,
    "minutesActive": 108,
    "flightsOfStairs": 2
  }, {
    "userID": 2,
    "date": "2019/06/18",
    "numSteps": 9303,
    "minutesActive": 27,
    "flightsOfStairs": 14
  },
]

module.exports = userSampleData;
module.exports = hydrationSampleData;
module.exports = sleepSampleData;
module.exports = activitySampleData;