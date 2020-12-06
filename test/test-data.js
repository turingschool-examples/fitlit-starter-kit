let testUserData = 
[{
  "id": 1,
  "name": "Testy User",
  "address": "123 Main St, Hometown CO 80123-1234",
  "email": "my.email.address@hotmail.com",
  "strideLength": 4.3,
  "dailyStepGoal": 12340,
},
{
  "id": 2,
  "name": "Great Person",
  "address": "678 Second St, This Place IL 60188-1234",
  "email": "thisismyemail@aol.com",
  "strideLength": 3.8,
  "dailyStepGoal": 15000,
}, {
  "id": 3,
  "name": "Madame Average",
  "address": "17 S Alabaster Way, Ghost Town NV 86123-4321",
  "email": "nopassword@email.com",
  "strideLength": 3,
  "dailyStepGoal": 7000,
}]

let testActivityData = 
 [{
   "userID": 1,
   "date": "2019/06/12",
   "numSteps": 3577,
   "minutesActive": 70,
   "flightsOfStairs": 16
 },
 {
   "userID": 1,
   "date": "2019/06/13",
   "numSteps": 2500,
   "minutesActive": 60,
   "flightsOfStairs": 14
 },
 {
   "userID": 1,
   "date": "2019/06/14",
   "numSteps": 4004,
   "minutesActive": 200,
   "flightsOfStairs": 12
 },
 {
   "userID": 1,
   "date": "2019/06/15",
   "numSteps": 6900,
   "minutesActive": 85,
   "flightsOfStairs": 20
 }, 
 {
   "userID": 1,
   "date": "2019/06/16",
   "numSteps": 4200,
   "minutesActive": 69,
   "flightsOfStairs": 15
 },
 {
   "userID": 1,
   "date": "2019/06/17",
   "numSteps": 7070,
   "minutesActive": 85,
   "flightsOfStairs": 13
 }, 
 {
   "userID": 1,
   "date": "2019/06/18",
   "numSteps": 6969,
   "minutesActive": 69,
   "flightsOfStairs": 17
 },
 {
   "userID": 2,
   "date": "2019/06/12",
   "numSteps": 2030,
   "minutesActive": 100,
   "flightsOfStairs": 9
 },
 {
   "userID": 2,
   "date": "2019/06/13",
   "numSteps": 2040,
   "minutesActive": 90,
   "flightsOfStairs": 10
 },
 {
   "userID": 2,
   "date": "2019/06/14",
   "numSteps": 2050,
   "minutesActive": 100,
   "flightsOfStairs": 11
 },
 {
   "userID": 2,
   "date": "2019/06/15",
   "numSteps": 2060,
   "minutesActive": 90,
   "flightsOfStairs": 12
 }, 
 {
   "userID": 2,
   "date": "2019/06/16",
   "numSteps": 2070,
   "minutesActive": 100,
   "flightsOfStairs": 13
 },
 {
   "userID": 2,
   "date": "2019/06/17",
   "numSteps": 2080,
   "minutesActive": 150,
   "flightsOfStairs": 14
 }, 
 {
   "userID": 2,
   "date": "2019/06/18",
   "numSteps": 6969,
   "minutesActive": 160,
   "flightsOfStairs": 15
 },
 {
   "userID": 3,
   "date": "2019/06/12",
   "numSteps": 2000,
   "minutesActive": 160,
   "flightsOfStairs": 18
 },
 {
   "userID": 3,
   "date": "2019/06/13",
   "numSteps": 15000,
   "minutesActive": 420,
   "flightsOfStairs": 17
 },
 {
   "userID": 3,
   "date": "2019/06/14",
   "numSteps": 16547,
   "minutesActive": 167,
   "flightsOfStairs": 19
 },
 {
   "userID": 3,
   "date": "2019/06/15",
   "numSteps": 20600,
   "minutesActive": 290,
   "flightsOfStairs": 20
 }, 
 {
   "userID": 3,
   "date": "2019/06/16",
   "numSteps": 12345,
   "minutesActive": 355,
   "flightsOfStairs": 24
 },
 {
   "userID": 3,
   "date": "2019/06/17",
   "numSteps": 10500,
   "minutesActive": 300,
   "flightsOfStairs": 23
 }, 
 {
   "userID": 3,
   "date": "2019/06/18",
   "numSteps": 8000,
   "minutesActive": 200,
   "flightsOfStairs": 25
 }]

let testHydrationData = 
[{
  "userID": 1,
  "date": "2019/06/12",
  "numOunces": 37
},
{
  "userID": 1,
  "date": "2019/06/13",
  "numOunces": 37
},
{
  "userID": 1,
  "date": "2019/06/14",
  "numOunces": 31
},
{
  "userID": 1,
  "date": "2019/06/15",
  "numOunces": 29
},
{
  "userID": 1,
  "date": "2019/06/16",
  "numOunces": 30
},
{
  "userID": 1,
  "date": "2019/06/17",
  "numOunces": 35
},
{
  "userID": 1,
  "date": "2019/06/18",
  "numOunces": 36
},
{
  "userID": 2,
  "date": "2019/06/12",
  "numOunces": 80
},
{
  "userID": 2,
  "date": "2019/06/13",
  "numOunces": 70
},
{
  "userID": 2,
  "date": "2019/06/14",
  "numOunces": 60
},
{
  "userID": 2,
  "date": "2019/06/15",
  "numOunces": 90
},
{
  "userID": 2,
  "date": "2019/06/16",
  "numOunces": 100
},
{
  "userID": 2,
  "date": "2019/06/17",
  "numOunces": 110
},
{
  "userID": 2,
  "date": "2019/06/18",
  "numOunces": 200
},
{
  "userID": 3,
  "date": "2019/06/12",
  "numOunces": 60
},
{
  "userID": 3,
  "date": "2019/06/13",
  "numOunces": 61
},
{
  "userID": 3,
  "date": "2019/06/14",
  "numOunces": 62
},
{
  "userID": 3,
  "date": "2019/06/15",
  "numOunces": 80
},
{
  "userID": 3,
  "date": "2019/06/16",
  "numOunces": 82
},
{
  "userID": 3,
  "date": "2019/06/17",
  "numOunces": 100
},
{
  "userID": 3,
  "date": "2019/06/18",
  "numOunces": 88
}]

let testSleepData = [
  {
    "userID": 1,
    "date": "2019/06/12",
    "hoursSlept": 6.7,
    "sleepQuality": 3.1
  },
  {
    "userID": 1,
    "date": "2019/06/13",
    "hoursSlept": 6.1,
    "sleepQuality": 2.1
  }, 
  {
    "userID": 1,
    "date": "2019/06/14",
    "hoursSlept": 6.8,
    "sleepQuality": 2
  }, 
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.2,
    "sleepQuality": 2.5
  }, 
  {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 6.5,
    "sleepQuality": 2.3
  }, 
  {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 6.6,
    "sleepQuality": 2.7
  }, 
  {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 6.4,
    "sleepQuality": 3
  },
  {
    "userID": 2,
    "date": "2019/06/12",
    "hoursSlept": 7.3,
    "sleepQuality": 3.1
  },
  {
    "userID": 2,
    "date": "2019/06/13",
    "hoursSlept": 6.8,
    "sleepQuality": 3.2
  }, 
  {
    "userID": 2,
    "date": "2019/06/14",
    "hoursSlept": 6.9,
    "sleepQuality": 3.3
  }, 
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7.1,
    "sleepQuality": 3.5
  }, 
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7.5,
    "sleepQuality": 3.9
  }, 
  {
    "userID": 2,
    "date": "2019/06/17",
    "hoursSlept": 7.9,
    "sleepQuality": 2.8
  }, 
  {
    "userID": 2,
    "date": "2019/06/18",
    "hoursSlept": 8.1,
    "sleepQuality": 2.9
  },
  {
    "userID": 3,
    "date": "2019/06/12",
    "hoursSlept": 7.5,
    "sleepQuality": 3.
  },
  {
    "userID": 3,
    "date": "2019/06/13",
    "hoursSlept": 7.8,
    "sleepQuality": 2.3
  }, 
  {
    "userID": 3,
    "date": "2019/06/14",
    "hoursSlept": 7.5,
    "sleepQuality": 3.2
  }, 
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 7.8,
    "sleepQuality": 2.3
  }, 
  {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 7.5,
    "sleepQuality": 3.2
  }, 
  {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 7.8,
    "sleepQuality": 3.2
  }, 
  {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 7.5,
    "sleepQuality": 2.3
  }]