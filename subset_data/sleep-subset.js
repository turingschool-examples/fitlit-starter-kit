const sleepData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 2.2
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "hoursSlept": 7,
    "sleepQuality": 4.7
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "hoursSlept": 10.8,
    "sleepQuality": 4.7
  },
  {
    "userID": 4,
    "date": "2019/06/15",
    "hoursSlept": 5.4,
    "sleepQuality": 3
  },
  {
    "userID": 5,
    "date": "2019/06/15",
    "hoursSlept": 4.1,
    "sleepQuality": 3.6
  },
  {
    "userID": 6,
    "date": "2019/06/15",
    "hoursSlept": 9.6,
    "sleepQuality": 2.9
  },
  {
    "userID": 7,
    "date": "2019/06/15",
    "hoursSlept": 5.1,
    "sleepQuality": 2.6
  },
  {
    "userID": 8,
    "date": "2019/06/15",
    "hoursSlept": 8.1,
    "sleepQuality": 3.5
  },
  {
    "userID": 9,
    "date": "2019/06/15",
    "hoursSlept": 8.9,
    "sleepQuality": 2.2
  },
  {
    "userID": 10,
    "date": "2019/06/15",
    "hoursSlept": 4.4,
    "sleepQuality": 1.6
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "hoursSlept": 8,
    "sleepQuality": 2.6
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "hoursSlept": 5.7,
    "sleepQuality": 3
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "hoursSlept": 5.3,
    "sleepQuality": 4.9
  },
  {
    "userID": 4,
    "date": "2019/06/17",
    "hoursSlept": 5.7,
    "sleepQuality": 1.1
  },
  {
    "userID": 5,
    "date": "2019/06/17",
    "hoursSlept": 10.5,
    "sleepQuality": 3.7
  },
  {
    "userID": 6,
    "date": "2019/06/17",
    "hoursSlept": 9.7,
    "sleepQuality": 1.4
  },
  {
    "userID": 7,
    "date": "2019/06/17",
    "hoursSlept": 9.9,
    "sleepQuality": 4.1
  },
  {
    "userID": 8,
    "date": "2019/06/17",
    "hoursSlept": 9.2,
    "sleepQuality": 2.2
  },
  {
    "userID": 9,
    "date": "2019/06/17",
    "hoursSlept": 7.2,
    "sleepQuality": 2.2
  },
  {
    "userID": 10,
    "date": "2019/06/17",
    "hoursSlept": 4.3,
    "sleepQuality": 3.6
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "hoursSlept": 10.4,
    "sleepQuality": 3.1
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "hoursSlept": 10.8,
    "sleepQuality": 3.2
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "hoursSlept": 9.8,
    "sleepQuality": 2.6
  },
  {
    "userID": 4,
    "date": "2019/06/18",
    "hoursSlept": 5.9,
    "sleepQuality": 2.5
  },
  {
    "userID": 5,
    "date": "2019/06/18",
    "hoursSlept": 5.2,
    "sleepQuality": 4.1
  },
  {
    "userID": 6,
    "date": "2019/06/18",
    "hoursSlept": 5.5,
    "sleepQuality": 4
  },
  {
    "userID": 7,
    "date": "2019/06/18",
    "hoursSlept": 5.5,
    "sleepQuality": 1.4
  },
  {
    "userID": 8,
    "date": "2019/06/18",
    "hoursSlept": 8.2,
    "sleepQuality": 2.4
  },
  {
    "userID": 9,
    "date": "2019/06/18",
    "hoursSlept": 5.5,
    "sleepQuality": 2.4
  },
  {
    "userID": 10,
    "date": "2019/06/18",
    "hoursSlept": 7,
    "sleepQuality": 3.8
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "hoursSlept": 10.7,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "hoursSlept": 9.6,
    "sleepQuality": 2.5
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "hoursSlept": 7.2,
    "sleepQuality": 3.4
  },
  {
    "userID": 4,
    "date": "2019/06/19",
    "hoursSlept": 5.2,
    "sleepQuality": 2.3
  },
  {
    "userID": 5,
    "date": "2019/06/19",
    "hoursSlept": 4.8,
    "sleepQuality": 3.4
  },
  {
    "userID": 6,
    "date": "2019/06/19",
    "hoursSlept": 9.3,
    "sleepQuality": 2
  },
  {
    "userID": 7,
    "date": "2019/06/19",
    "hoursSlept": 5.1,
    "sleepQuality": 4.4
  },
  {
    "userID": 8,
    "date": "2019/06/19",
    "hoursSlept": 10.8,
    "sleepQuality": 4.3
  },
  {
    "userID": 9,
    "date": "2019/06/19",
    "hoursSlept": 10.4,
    "sleepQuality": 2.6
  },
  {
    "userID": 10,
    "date": "2019/06/19",
    "hoursSlept": 5.3,
    "sleepQuality": 3.1
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "hoursSlept": 9.3,
    "sleepQuality": 1.2
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "hoursSlept": 10.1,
    "sleepQuality": 2.4
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "hoursSlept": 9.4,
    "sleepQuality": 1.2
  },
  {
    "userID": 4,
    "date": "2019/06/20",
    "hoursSlept": 8.3,
    "sleepQuality": 1.9
  },
  {
    "userID": 5,
    "date": "2019/06/20",
    "hoursSlept": 10.1,
    "sleepQuality": 3.5
  },
  {
    "userID": 6,
    "date": "2019/06/20",
    "hoursSlept": 8.9,
    "sleepQuality": 1.8
  },
  {
    "userID": 7,
    "date": "2019/06/20",
    "hoursSlept": 7.1,
    "sleepQuality": 4.9
  },
  {
    "userID": 8,
    "date": "2019/06/20",
    "hoursSlept": 6.8,
    "sleepQuality": 2.8
  },
  {
    "userID": 9,
    "date": "2019/06/20",
    "hoursSlept": 9.8,
    "sleepQuality": 3.9
  },
  {
    "userID": 10,
    "date": "2019/06/20",
    "hoursSlept": 5.5,
    "sleepQuality": 1.1
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "hoursSlept": 7.8,
    "sleepQuality": 4.2
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "hoursSlept": 4.3,
    "sleepQuality": 4.8
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "hoursSlept": 8.9,
    "sleepQuality": 3.7
  },
  {
    "userID": 4,
    "date": "2019/06/21",
    "hoursSlept": 10.6,
    "sleepQuality": 2.7
  },
  {
    "userID": 5,
    "date": "2019/06/21",
    "hoursSlept": 9.6,
    "sleepQuality": 4.1
  },
  {
    "userID": 6,
    "date": "2019/06/21",
    "hoursSlept": 5.6,
    "sleepQuality": 3.2
  },
  {
    "userID": 7,
    "date": "2019/06/21",
    "hoursSlept": 7.5,
    "sleepQuality": 3.3
  },
  {
    "userID": 8,
    "date": "2019/06/21",
    "hoursSlept": 10.2,
    "sleepQuality": 3
  },
  {
    "userID": 9,
    "date": "2019/06/21",
    "hoursSlept": 7.7,
    "sleepQuality": 2.9
  },
  {
    "userID": 10,
    "date": "2019/06/21",
    "hoursSlept": 4.5,
    "sleepQuality": 2.5
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "hoursSlept": 7,
    "sleepQuality": 3
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "hoursSlept": 4.8,
    "sleepQuality": 3.3
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "hoursSlept": 9.8,
    "sleepQuality": 2.1
  },
  {
    "userID": 4,
    "date": "2019/06/22",
    "hoursSlept": 7.7,
    "sleepQuality": 1.5
  },
  {
    "userID": 5,
    "date": "2019/06/22",
    "hoursSlept": 8.1,
    "sleepQuality": 1.3
  },
  {
    "userID": 6,
    "date": "2019/06/22",
    "hoursSlept": 9.3,
    "sleepQuality": 4.9
  },
  {
    "userID": 7,
    "date": "2019/06/22",
    "hoursSlept": 7.5,
    "sleepQuality": 4.3
  },
  {
    "userID": 8,
    "date": "2019/06/22",
    "hoursSlept": 8.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 9,
    "date": "2019/06/22",
    "hoursSlept": 7.2,
    "sleepQuality": 2.5
  },
  {
    "userID": 10,
    "date": "2019/06/22",
    "hoursSlept": 9,
    "sleepQuality": 1.7
  },
  {
    "userID": 1,
    "date": "2019/06/23",
    "hoursSlept": 7.8,
    "sleepQuality": 1.5
  },
  {
    "userID": 2,
    "date": "2019/06/23",
    "hoursSlept": 8,
    "sleepQuality": 4.9
  },
  {
    "userID": 3,
    "date": "2019/06/23",
    "hoursSlept": 4.7,
    "sleepQuality": 3.9
  },
  {
    "userID": 4,
    "date": "2019/06/23",
    "hoursSlept": 9.9,
    "sleepQuality": 2.6
  },
  {
    "userID": 5,
    "date": "2019/06/23",
    "hoursSlept": 5.1,
    "sleepQuality": 1.6
  },
  {
    "userID": 6,
    "date": "2019/06/23",
    "hoursSlept": 8.5,
    "sleepQuality": 4.2
  },
  {
    "userID": 7,
    "date": "2019/06/23",
    "hoursSlept": 9,
    "sleepQuality": 3.6
  },
  {
    "userID": 8,
    "date": "2019/06/23",
    "hoursSlept": 4.6,
    "sleepQuality": 1.8
  },
  {
    "userID": 9,
    "date": "2019/06/23",
    "hoursSlept": 4.1,
    "sleepQuality": 3.8
  },
  {
    "userID": 10,
    "date": "2019/06/23",
    "hoursSlept": 7.8,
    "sleepQuality": 4.7
  },
  {
    "userID": 1,
    "date": "2019/06/24",
    "hoursSlept": 8,
    "sleepQuality": 1.3
  },
  {
    "userID": 2,
    "date": "2019/06/24",
    "hoursSlept": 10.8,
    "sleepQuality": 1
  },
  {
    "userID": 3,
    "date": "2019/06/24",
    "hoursSlept": 9.3,
    "sleepQuality": 1.8
  },
  {
    "userID": 4,
    "date": "2019/06/24",
    "hoursSlept": 5,
    "sleepQuality": 3.5
  },
  {
    "userID": 5,
    "date": "2019/06/24",
    "hoursSlept": 6.8,
    "sleepQuality": 2.1
  },
  {
    "userID": 6,
    "date": "2019/06/24",
    "hoursSlept": 4.4,
    "sleepQuality": 2.1
  },
  {
    "userID": 7,
    "date": "2019/06/24",
    "hoursSlept": 10,
    "sleepQuality": 2.4
  },
  {
    "userID": 8,
    "date": "2019/06/24",
    "hoursSlept": 5.6,
    "sleepQuality": 3.8
  },
  {
    "userID": 9,
    "date": "2019/06/24",
    "hoursSlept": 7.2,
    "sleepQuality": 1.4
  },
  {
    "userID": 10,
    "date": "2019/06/24",
    "hoursSlept": 4.2,
    "sleepQuality": 5
  },
  {
    "userID": 1,
    "date": "2019/06/25",
    "hoursSlept": 5.1,
    "sleepQuality": 3.7
  },
  {
    "userID": 2,
    "date": "2019/06/25",
    "hoursSlept": 9.7,
    "sleepQuality": 1.3
  },
  {
    "userID": 3,
    "date": "2019/06/25",
    "hoursSlept": 6.4,
    "sleepQuality": 4.9
  },
  {
    "userID": 4,
    "date": "2019/06/25",
    "hoursSlept": 7.2,
    "sleepQuality": 2.4
  },
  {
    "userID": 5,
    "date": "2019/06/25",
    "hoursSlept": 6.3,
    "sleepQuality": 4.4
  },
  {
    "userID": 6,
    "date": "2019/06/25",
    "hoursSlept": 8.7,
    "sleepQuality": 4.9
  },
  {
    "userID": 7,
    "date": "2019/06/25",
    "hoursSlept": 8.4,
    "sleepQuality": 2.9
  },
  {
    "userID": 8,
    "date": "2019/06/25",
    "hoursSlept": 7.1,
    "sleepQuality": 1.6
  },
  {
    "userID": 9,
    "date": "2019/06/25",
    "hoursSlept": 4.5,
    "sleepQuality": 1.1
  },
  {
    "userID": 10,
    "date": "2019/06/25",
    "hoursSlept": 6.2,
    "sleepQuality": 3.2
  },
  {
    "userID": 1,
    "date": "2019/06/26",
    "hoursSlept": 7.7,
    "sleepQuality": 2.4
  },
  {
    "userID": 2,
    "date": "2019/06/26",
    "hoursSlept": 9.3,
    "sleepQuality": 2.6
  },
  {
    "userID": 3,
    "date": "2019/06/26",
    "hoursSlept": 6.1,
    "sleepQuality": 1.5
  },
  {
    "userID": 4,
    "date": "2019/06/26",
    "hoursSlept": 10.5,
    "sleepQuality": 5
  },
  {
    "userID": 5,
    "date": "2019/06/26",
    "hoursSlept": 9.9,
    "sleepQuality": 1.8
  },
  {
    "userID": 6,
    "date": "2019/06/26",
    "hoursSlept": 9,
    "sleepQuality": 2
  },
  {
    "userID": 7,
    "date": "2019/06/26",
    "hoursSlept": 9.7,
    "sleepQuality": 2.8
  },
  {
    "userID": 8,
    "date": "2019/06/26",
    "hoursSlept": 6.5,
    "sleepQuality": 4.2
  },
  {
    "userID": 9,
    "date": "2019/06/26",
    "hoursSlept": 4.3,
    "sleepQuality": 1
  },
  {
    "userID": 10,
    "date": "2019/06/26",
    "hoursSlept": 9.4,
    "sleepQuality": 2.3
  },
  {
    "userID": 1,
    "date": "2019/06/27",
    "hoursSlept": 9.4,
    "sleepQuality": 4.6
  },
  {
    "userID": 2,
    "date": "2019/06/27",
    "hoursSlept": 9,
    "sleepQuality": 1.3
  },
  {
    "userID": 3,
    "date": "2019/06/27",
    "hoursSlept": 4.3,
    "sleepQuality": 4.2
  },
  {
    "userID": 4,
    "date": "2019/06/27",
    "hoursSlept": 4.3,
    "sleepQuality": 2.9
  },
  {
    "userID": 5,
    "date": "2019/06/27",
    "hoursSlept": 4.5,
    "sleepQuality": 3.9
  },
  {
    "userID": 6,
    "date": "2019/06/27",
    "hoursSlept": 5.5,
    "sleepQuality": 2
  },
  {
    "userID": 7,
    "date": "2019/06/27",
    "hoursSlept": 5.1,
    "sleepQuality": 2.8
  },
  {
    "userID": 8,
    "date": "2019/06/27",
    "hoursSlept": 10.3,
    "sleepQuality": 4.6
  },
  {
    "userID": 9,
    "date": "2019/06/27",
    "hoursSlept": 5.2,
    "sleepQuality": 2.5
  },
  {
    "userID": 10,
    "date": "2019/06/27",
    "hoursSlept": 7.1,
    "sleepQuality": 4.7
  },
  {
    "userID": 1,
    "date": "2019/06/28",
    "hoursSlept": 7.6,
    "sleepQuality": 4.7
  },
  {
    "userID": 2,
    "date": "2019/06/28",
    "hoursSlept": 5.2,
    "sleepQuality": 4.9
  },
  {
    "userID": 3,
    "date": "2019/06/28",
    "hoursSlept": 4.3,
    "sleepQuality": 3.7
  },
  {
    "userID": 4,
    "date": "2019/06/28",
    "hoursSlept": 6.4,
    "sleepQuality": 4.2
  },
  {
    "userID": 5,
    "date": "2019/06/28",
    "hoursSlept": 5.5,
    "sleepQuality": 1.5
  },
  {
    "userID": 6,
    "date": "2019/06/28",
    "hoursSlept": 8.3,
    "sleepQuality": 2.7
  },
  {
    "userID": 7,
    "date": "2019/06/28",
    "hoursSlept": 5.9,
    "sleepQuality": 2.4
  },
  {
    "userID": 8,
    "date": "2019/06/28",
    "hoursSlept": 6.1,
    "sleepQuality": 1.7
  },
  {
    "userID": 9,
    "date": "2019/06/28",
    "hoursSlept": 7.2,
    "sleepQuality": 1.4
  },
  {
    "userID": 10,
    "date": "2019/06/28",
    "hoursSlept": 5.5,
    "sleepQuality": 2
  }
];
  
if (typeof module !== 'undefined') {
  module.exports = sleepData;
}