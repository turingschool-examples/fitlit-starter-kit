const sampleSleepData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 10.8,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/06/15",
    "hoursSlept": 4.1,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 10.8,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/06/16",
    "hoursSlept": 4.1,
    "sleepQuality": 3.6
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 10.8,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/06/17",
    "hoursSlept": 4.1,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 10.8,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/06/18",
    "hoursSlept": 4.1,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "hoursSlept": 10.8,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/06/19",
    "hoursSlept": 4.1,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "hoursSlept": 10.8,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/06/20",
    "hoursSlept": 4.1,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "hoursSlept": 10.8,
    "sleepQuality": 4
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "hoursSlept": 5.4,
    "sleepQuality": 3
  },
  {
    "userID": 5,
    "date": "2019/06/21",
    "hoursSlept": 4.1,
    "sleepQuality": 5
  }, 
  {
    "userID": 1,
    "date": "2019/06/22",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "hoursSlept": 10.8,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/06/22",
    "hoursSlept": 4.1,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "hoursSlept": 6.1,
    "sleepQuality": 1
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "hoursSlept": 7,
    "sleepQuality": 2
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "hoursSlept": 10.8,
    "sleepQuality": 3
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 5,
    "date": "2019/06/23",
    "hoursSlept": 4.1,
    "sleepQuality": 5
  }
]

if (typeof module !== 'undefined') {
module.exports = {sampleSleepData} 
}