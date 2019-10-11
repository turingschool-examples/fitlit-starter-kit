const sleepDataSample = [
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
    "userID": 11,
    "date": "2019/06/15",
    "hoursSlept": 4.9,
    "sleepQuality": 3.9
  },
  {
    "userID": 12,
    "date": "2019/06/15",
    "hoursSlept": 8,
    "sleepQuality": 3.4
  },
  {
    "userID": 13,
    "date": "2019/06/15",
    "hoursSlept": 10.1,
    "sleepQuality": 1.8
  },
  {
    "userID": 14,
    "date": "2019/06/15",
    "hoursSlept": 6.9,
    "sleepQuality": 1.2
  },
  {
    "userID": 15,
    "date": "2019/06/15",
    "hoursSlept": 4.6,
    "sleepQuality": 2.9
  },
  {
    "userID": 16,
    "date": "2019/06/15",
    "hoursSlept": 6.1,
    "sleepQuality": 3.5
  },
  {
    "userID": 17,
    "date": "2019/06/15",
    "hoursSlept": 4.7,
    "sleepQuality": 4
  },
  {
    "userID": 18,
    "date": "2019/06/15",
    "hoursSlept": 10.1,
    "sleepQuality": 1.3
  },
  {
    "userID": 19,
    "date": "2019/06/15",
    "hoursSlept": 7.9,
    "sleepQuality": 1.6
  },
  {
    "userID": 20,
    "date": "2019/06/15",
    "hoursSlept": 5.9,
    "sleepQuality": 1.6
  },
  {
    "userID": 21,
    "date": "2019/06/15",
    "hoursSlept": 9.6,
    "sleepQuality": 1
  },
  {
    "userID": 22,
    "date": "2019/06/15",
    "hoursSlept": 9,
    "sleepQuality": 3.1
  },
  {
    "userID": 23,
    "date": "2019/06/15",
    "hoursSlept": 10.4,
    "sleepQuality": 2.8
  },
  {
    "userID": 24,
    "date": "2019/06/15",
    "hoursSlept": 10.4,
    "sleepQuality": 3.1
  },
  {
    "userID": 25,
    "date": "2019/06/15",
    "hoursSlept": 4.6,
    "sleepQuality": 1.2
  },
  {
    "userID": 26,
    "date": "2019/06/15",
    "hoursSlept": 6.2,
    "sleepQuality": 3.9
  },
  {
    "userID": 27,
    "date": "2019/06/15",
    "hoursSlept": 5,
    "sleepQuality": 3.4
  },
  {
    "userID": 28,
    "date": "2019/06/15",
    "hoursSlept": 6.4,
    "sleepQuality": 2.6
  },
  {
    "userID": 29,
    "date": "2019/06/15",
    "hoursSlept": 6.9,
    "sleepQuality": 3.5
  },
  {
    "userID": 30,
    "date": "2019/06/15",
    "hoursSlept": 5.7,
    "sleepQuality": 2.4
  },
  {
    "userID": 31,
    "date": "2019/06/15",
    "hoursSlept": 5,
    "sleepQuality": 3.6
  },
  {
    "userID": 32,
    "date": "2019/06/15",
    "hoursSlept": 6.6,
    "sleepQuality": 4.4
  },
  {
    "userID": 33,
    "date": "2019/06/15",
    "hoursSlept": 9.5,
    "sleepQuality": 4.2
  },
  {
    "userID": 34,
    "date": "2019/06/15",
    "hoursSlept": 9.4,
    "sleepQuality": 4.4
  },
  {
    "userID": 35,
    "date": "2019/06/15",
    "hoursSlept": 7.5,
    "sleepQuality": 4.7
  },
  {
    "userID": 36,
    "date": "2019/06/15",
    "hoursSlept": 5,
    "sleepQuality": 2.5
  },
  {
    "userID": 37,
    "date": "2019/06/15",
    "hoursSlept": 10.1,
    "sleepQuality": 4.7
  },
  {
    "userID": 38,
    "date": "2019/06/15",
    "hoursSlept": 6,
    "sleepQuality": 2.9
  },
  {
    "userID": 39,
    "date": "2019/06/15",
    "hoursSlept": 9.3,
    "sleepQuality": 1.5
  },
  {
    "userID": 40,
    "date": "2019/06/15",
    "hoursSlept": 7.5,
    "sleepQuality": 2.5
  },
  {
    "userID": 41,
    "date": "2019/06/15",
    "hoursSlept": 4.6,
    "sleepQuality": 4.6
  },
  {
    "userID": 42,
    "date": "2019/06/15",
    "hoursSlept": 8.2,
    "sleepQuality": 2.8
  },
  {
    "userID": 43,
    "date": "2019/06/15",
    "hoursSlept": 4.6,
    "sleepQuality": 2.1
  },
  {
    "userID": 44,
    "date": "2019/06/15",
    "hoursSlept": 7.3,
    "sleepQuality": 4.3
  },
  {
    "userID": 45,
    "date": "2019/06/15",
    "hoursSlept": 9.9,
    "sleepQuality": 3
  },
  {
    "userID": 46,
    "date": "2019/06/15",
    "hoursSlept": 10.6,
    "sleepQuality": 1.4
  },
  {
    "userID": 47,
    "date": "2019/06/15",
    "hoursSlept": 4.7,
    "sleepQuality": 4.5
  },
  {
    "userID": 48,
    "date": "2019/06/15",
    "hoursSlept": 4.5,
    "sleepQuality": 1.2
  },
  {
    "userID": 49,
    "date": "2019/06/15",
    "hoursSlept": 4.6,
    "sleepQuality": 1.7
  },
  {
    "userID": 50,
    "date": "2019/06/15",
    "hoursSlept": 8.5,
    "sleepQuality": 4.1
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "hoursSlept": 4.1,
    "sleepQuality": 3.8
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "hoursSlept": 7.5,
    "sleepQuality": 3.8
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "hoursSlept": 10.7,
    "sleepQuality": 3.4
  },
  {
    "userID": 4,
    "date": "2019/06/16",
    "hoursSlept": 8.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 5,
    "date": "2019/06/16",
    "hoursSlept": 7.4,
    "sleepQuality": 2.4
  },
  {
    "userID": 6,
    "date": "2019/06/16",
    "hoursSlept": 5.3,
    "sleepQuality": 4.3
  },
  {
    "userID": 7,
    "date": "2019/06/16",
    "hoursSlept": 10,
    "sleepQuality": 4.5
  },
  {
    "userID": 8,
    "date": "2019/06/16",
    "hoursSlept": 6.8,
    "sleepQuality": 3
  },
  {
    "userID": 9,
    "date": "2019/06/16",
    "hoursSlept": 9.1,
    "sleepQuality": 1.2
  },
  {
    "userID": 10,
    "date": "2019/06/16",
    "hoursSlept": 8,
    "sleepQuality": 4.4
  },
  {
    "userID": 11,
    "date": "2019/06/16",
    "hoursSlept": 8.2,
    "sleepQuality": 2
  },
  {
    "userID": 12,
    "date": "2019/06/16",
    "hoursSlept": 7.5,
    "sleepQuality": 1.3
  },
  {
    "userID": 13,
    "date": "2019/06/16",
    "hoursSlept": 5.1,
    "sleepQuality": 3.8
  },
  {
    "userID": 14,
    "date": "2019/06/16",
    "hoursSlept": 5.9,
    "sleepQuality": 2.9
  },
  {
    "userID": 15,
    "date": "2019/06/16",
    "hoursSlept": 9,
    "sleepQuality": 3.2
  },
  {
    "userID": 16,
    "date": "2019/06/16",
    "hoursSlept": 8.7,
    "sleepQuality": 4.1
  },
  {
    "userID": 17,
    "date": "2019/06/16",
    "hoursSlept": 5.9,
    "sleepQuality": 2.1
  },
  {
    "userID": 18,
    "date": "2019/06/16",
    "hoursSlept": 5.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 19,
    "date": "2019/06/16",
    "hoursSlept": 5.5,
    "sleepQuality": 1.2
  },
  {
    "userID": 20,
    "date": "2019/06/16",
    "hoursSlept": 4.3,
    "sleepQuality": 1.4
  },
  {
    "userID": 21,
    "date": "2019/06/16",
    "hoursSlept": 4.8,
    "sleepQuality": 1.3
  },
  {
    "userID": 22,
    "date": "2019/06/16",
    "hoursSlept": 5,
    "sleepQuality": 3.2
  },
  {
    "userID": 23,
    "date": "2019/06/16",
    "hoursSlept": 9.5,
    "sleepQuality": 4.7
  },
  {
    "userID": 24,
    "date": "2019/06/16",
    "hoursSlept": 7.6,
    "sleepQuality": 4.1
  },
  {
    "userID": 25,
    "date": "2019/06/16",
    "hoursSlept": 6.9,
    "sleepQuality": 3.1
  },
  {
    "userID": 26,
    "date": "2019/06/16",
    "hoursSlept": 7.8,
    "sleepQuality": 1.5
  },
  {
    "userID": 27,
    "date": "2019/06/16",
    "hoursSlept": 6.3,
    "sleepQuality": 2.7
  },
  {
    "userID": 28,
    "date": "2019/06/16",
    "hoursSlept": 6,
    "sleepQuality": 4.4
  },
  {
    "userID": 29,
    "date": "2019/06/16",
    "hoursSlept": 10.9,
    "sleepQuality": 2
  },
  {
    "userID": 30,
    "date": "2019/06/16",
    "hoursSlept": 10.8,
    "sleepQuality": 2.5
  },
  {
    "userID": 31,
    "date": "2019/06/16",
    "hoursSlept": 9.7,
    "sleepQuality": 1.5
  },
  {
    "userID": 32,
    "date": "2019/06/16",
    "hoursSlept": 7,
    "sleepQuality": 4.8
  },
  {
    "userID": 33,
    "date": "2019/06/16",
    "hoursSlept": 10.1,
    "sleepQuality": 3.8
  },
  {
    "userID": 34,
    "date": "2019/06/16",
    "hoursSlept": 4.9,
    "sleepQuality": 1.8
  },
  {
    "userID": 35,
    "date": "2019/06/16",
    "hoursSlept": 6.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 36,
    "date": "2019/06/16",
    "hoursSlept": 8,
    "sleepQuality": 1.5
  },
  {
    "userID": 37,
    "date": "2019/06/16",
    "hoursSlept": 10.4,
    "sleepQuality": 3.8
  },
  {
    "userID": 38,
    "date": "2019/06/16",
    "hoursSlept": 8.6,
    "sleepQuality": 4.4
  },
  {
    "userID": 39,
    "date": "2019/06/16",
    "hoursSlept": 10.7,
    "sleepQuality": 2.3
  },
  {
    "userID": 40,
    "date": "2019/06/16",
    "hoursSlept": 5.1,
    "sleepQuality": 3.2
  },
  {
    "userID": 41,
    "date": "2019/06/16",
    "hoursSlept": 9.8,
    "sleepQuality": 1.5
  },
  {
    "userID": 42,
    "date": "2019/06/16",
    "hoursSlept": 10.3,
    "sleepQuality": 4.8
  },
  {
    "userID": 43,
    "date": "2019/06/16",
    "hoursSlept": 11,
    "sleepQuality": 2.3
  },
  {
    "userID": 44,
    "date": "2019/06/16",
    "hoursSlept": 10.1,
    "sleepQuality": 1.2
  },
  {
    "userID": 45,
    "date": "2019/06/16",
    "hoursSlept": 8.1,
    "sleepQuality": 2.3
  },
  {
    "userID": 46,
    "date": "2019/06/16",
    "hoursSlept": 8.4,
    "sleepQuality": 2.2
  },
  {
    "userID": 47,
    "date": "2019/06/16",
    "hoursSlept": 6.7,
    "sleepQuality": 4.9
  },
  {
    "userID": 48,
    "date": "2019/06/16",
    "hoursSlept": 7.4,
    "sleepQuality": 4.9
  },
  {
    "userID": 49,
    "date": "2019/06/16",
    "hoursSlept": 7.1,
    "sleepQuality": 1.1
  },
  {
    "userID": 50,
    "date": "2019/06/16",
    "hoursSlept": 7.2,
    "sleepQuality": 1.5
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
    "userID": 11,
    "date": "2019/06/17",
    "hoursSlept": 7.7,
    "sleepQuality": 1.9
  },
  {
    "userID": 12,
    "date": "2019/06/17",
    "hoursSlept": 10.4,
    "sleepQuality": 1
  },
  {
    "userID": 13,
    "date": "2019/06/17",
    "hoursSlept": 4.5,
    "sleepQuality": 1.2
  },
  {
    "userID": 14,
    "date": "2019/06/17",
    "hoursSlept": 9.3,
    "sleepQuality": 4.8
  },
  {
    "userID": 15,
    "date": "2019/06/17",
    "hoursSlept": 8.6,
    "sleepQuality": 4.1
  },
  {
    "userID": 16,
    "date": "2019/06/17",
    "hoursSlept": 6.7,
    "sleepQuality": 4.8
  },
  {
    "userID": 17,
    "date": "2019/06/17",
    "hoursSlept": 8,
    "sleepQuality": 3.6
  },
  {
    "userID": 18,
    "date": "2019/06/17",
    "hoursSlept": 7.9,
    "sleepQuality": 1.5
  },
  {
    "userID": 19,
    "date": "2019/06/17",
    "hoursSlept": 9.5,
    "sleepQuality": 2
  },
  {
    "userID": 20,
    "date": "2019/06/17",
    "hoursSlept": 6.3,
    "sleepQuality": 2.4
  },
  {
    "userID": 21,
    "date": "2019/06/17",
    "hoursSlept": 8.4,
    "sleepQuality": 2.8
  },
  {
    "userID": 22,
    "date": "2019/06/17",
    "hoursSlept": 9.6,
    "sleepQuality": 1.5
  },
  {
    "userID": 23,
    "date": "2019/06/17",
    "hoursSlept": 9.5,
    "sleepQuality": 2.8
  },
  {
    "userID": 24,
    "date": "2019/06/17",
    "hoursSlept": 10.5,
    "sleepQuality": 3.7
  },
  {
    "userID": 25,
    "date": "2019/06/17",
    "hoursSlept": 6.1,
    "sleepQuality": 1.3
  },
  {
    "userID": 26,
    "date": "2019/06/17",
    "hoursSlept": 4.4,
    "sleepQuality": 2.3
  },
  {
    "userID": 27,
    "date": "2019/06/17",
    "hoursSlept": 7.3,
    "sleepQuality": 2.2
  },
  {
    "userID": 28,
    "date": "2019/06/17",
    "hoursSlept": 9.1,
    "sleepQuality": 4.8
  },
  {
    "userID": 29,
    "date": "2019/06/17",
    "hoursSlept": 10.3,
    "sleepQuality": 4.1
  },
  {
    "userID": 30,
    "date": "2019/06/17",
    "hoursSlept": 4.3,
    "sleepQuality": 2.6
  },
  {
    "userID": 31,
    "date": "2019/06/17",
    "hoursSlept": 9.8,
    "sleepQuality": 1.4
  },
  {
    "userID": 32,
    "date": "2019/06/17",
    "hoursSlept": 9.1,
    "sleepQuality": 1.9
  },
  {
    "userID": 33,
    "date": "2019/06/17",
    "hoursSlept": 4.5,
    "sleepQuality": 3.7
  },
  {
    "userID": 34,
    "date": "2019/06/17",
    "hoursSlept": 9.5,
    "sleepQuality": 1.2
  },
  {
    "userID": 35,
    "date": "2019/06/17",
    "hoursSlept": 8.9,
    "sleepQuality": 4.9
  },
  {
    "userID": 36,
    "date": "2019/06/17",
    "hoursSlept": 5.6,
    "sleepQuality": 4.5
  },
  {
    "userID": 37,
    "date": "2019/06/17",
    "hoursSlept": 9.9,
    "sleepQuality": 4.8
  },
  {
    "userID": 38,
    "date": "2019/06/17",
    "hoursSlept": 6.7,
    "sleepQuality": 3.6
  },
  {
    "userID": 39,
    "date": "2019/06/17",
    "hoursSlept": 8.3,
    "sleepQuality": 4.6
  },
  {
    "userID": 40,
    "date": "2019/06/17",
    "hoursSlept": 4.6,
    "sleepQuality": 3.6
  },
  {
    "userID": 41,
    "date": "2019/06/17",
    "hoursSlept": 7.3,
    "sleepQuality": 1.1
  },
  {
    "userID": 42,
    "date": "2019/06/17",
    "hoursSlept": 10.3,
    "sleepQuality": 1.4
  },
  {
    "userID": 43,
    "date": "2019/06/17",
    "hoursSlept": 8.1,
    "sleepQuality": 2
  },
  {
    "userID": 44,
    "date": "2019/06/17",
    "hoursSlept": 4.9,
    "sleepQuality": 2.9
  },
  {
    "userID": 45,
    "date": "2019/06/17",
    "hoursSlept": 9.1,
    "sleepQuality": 1.5
  },
  {
    "userID": 46,
    "date": "2019/06/17",
    "hoursSlept": 6.8,
    "sleepQuality": 1.3
  },
  {
    "userID": 47,
    "date": "2019/06/17",
    "hoursSlept": 7.4,
    "sleepQuality": 1.4
  },
  {
    "userID": 48,
    "date": "2019/06/17",
    "hoursSlept": 7.1,
    "sleepQuality": 1.7
  },
  {
    "userID": 49,
    "date": "2019/06/17",
    "hoursSlept": 5.1,
    "sleepQuality": 3.2
  },
  {
    "userID": 50,
    "date": "2019/06/17",
    "hoursSlept": 7.6,
    "sleepQuality": 4
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
    "userID": 11,
    "date": "2019/06/18",
    "hoursSlept": 6.3,
    "sleepQuality": 4.5
  },
  {
    "userID": 12,
    "date": "2019/06/18",
    "hoursSlept": 7.4,
    "sleepQuality": 1.6
  },
  {
    "userID": 13,
    "date": "2019/06/18",
    "hoursSlept": 5,
    "sleepQuality": 1.9
  },
  {
    "userID": 14,
    "date": "2019/06/18",
    "hoursSlept": 8.4,
    "sleepQuality": 2
  },
  {
    "userID": 15,
    "date": "2019/06/18",
    "hoursSlept": 6.3,
    "sleepQuality": 2.9
  },
  {
    "userID": 16,
    "date": "2019/06/18",
    "hoursSlept": 6.5,
    "sleepQuality": 1.1
  },
  {
    "userID": 17,
    "date": "2019/06/18",
    "hoursSlept": 9.7,
    "sleepQuality": 1.2
  },
  {
    "userID": 18,
    "date": "2019/06/18",
    "hoursSlept": 10.3,
    "sleepQuality": 2.6
  },
  {
    "userID": 19,
    "date": "2019/06/18",
    "hoursSlept": 10.6,
    "sleepQuality": 4.3
  },
  {
    "userID": 20,
    "date": "2019/06/18",
    "hoursSlept": 8.1,
    "sleepQuality": 1.4
  },
  {
    "userID": 21,
    "date": "2019/06/18",
    "hoursSlept": 7.7,
    "sleepQuality": 4.2
  },
  {
    "userID": 22,
    "date": "2019/06/18",
    "hoursSlept": 5.8,
    "sleepQuality": 1.3
  },
  {
    "userID": 23,
    "date": "2019/06/18",
    "hoursSlept": 6.7,
    "sleepQuality": 2.5
  },
  {
    "userID": 24,
    "date": "2019/06/18",
    "hoursSlept": 10.4,
    "sleepQuality": 4.9
  },
  {
    "userID": 25,
    "date": "2019/06/18",
    "hoursSlept": 9.7,
    "sleepQuality": 3.6
  },
  {
    "userID": 26,
    "date": "2019/06/18",
    "hoursSlept": 5.1,
    "sleepQuality": 4.9
  },
  {
    "userID": 27,
    "date": "2019/06/18",
    "hoursSlept": 7.9,
    "sleepQuality": 4
  },
  {
    "userID": 28,
    "date": "2019/06/18",
    "hoursSlept": 5.6,
    "sleepQuality": 2.4
  },
  {
    "userID": 29,
    "date": "2019/06/18",
    "hoursSlept": 7.6,
    "sleepQuality": 1.1
  },
  {
    "userID": 30,
    "date": "2019/06/18",
    "hoursSlept": 6.3,
    "sleepQuality": 2.6
  },
  {
    "userID": 31,
    "date": "2019/06/18",
    "hoursSlept": 7.6,
    "sleepQuality": 4.9
  },
  {
    "userID": 32,
    "date": "2019/06/18",
    "hoursSlept": 7.7,
    "sleepQuality": 2.7
  },
  {
    "userID": 33,
    "date": "2019/06/18",
    "hoursSlept": 5.4,
    "sleepQuality": 3.2
  },
  {
    "userID": 34,
    "date": "2019/06/18",
    "hoursSlept": 4.2,
    "sleepQuality": 4.5
  },
  {
    "userID": 35,
    "date": "2019/06/18",
    "hoursSlept": 5.5,
    "sleepQuality": 3.1
  },
  {
    "userID": 36,
    "date": "2019/06/18",
    "hoursSlept": 6.3,
    "sleepQuality": 2.9
  },
  {
    "userID": 37,
    "date": "2019/06/18",
    "hoursSlept": 9.5,
    "sleepQuality": 2.1
  },
  {
    "userID": 38,
    "date": "2019/06/18",
    "hoursSlept": 4.8,
    "sleepQuality": 4.5
  },
  {
    "userID": 39,
    "date": "2019/06/18",
    "hoursSlept": 6.5,
    "sleepQuality": 4.7
  },
  {
    "userID": 40,
    "date": "2019/06/18",
    "hoursSlept": 8,
    "sleepQuality": 2.4
  },
  {
    "userID": 41,
    "date": "2019/06/18",
    "hoursSlept": 8.1,
    "sleepQuality": 2.3
  },
  {
    "userID": 42,
    "date": "2019/06/18",
    "hoursSlept": 5.1,
    "sleepQuality": 2.7
  },
  {
    "userID": 43,
    "date": "2019/06/18",
    "hoursSlept": 7.5,
    "sleepQuality": 1.8
  },
  {
    "userID": 44,
    "date": "2019/06/18",
    "hoursSlept": 9.3,
    "sleepQuality": 1.3
  },
  {
    "userID": 45,
    "date": "2019/06/18",
    "hoursSlept": 9.7,
    "sleepQuality": 2.3
  },
  {
    "userID": 46,
    "date": "2019/06/18",
    "hoursSlept": 10.4,
    "sleepQuality": 3.3
  },
  {
    "userID": 47,
    "date": "2019/06/18",
    "hoursSlept": 10.5,
    "sleepQuality": 4.3
  },
  {
    "userID": 48,
    "date": "2019/06/18",
    "hoursSlept": 6.2,
    "sleepQuality": 1.4
  },
  {
    "userID": 49,
    "date": "2019/06/18",
    "hoursSlept": 9,
    "sleepQuality": 4
  },
  {
    "userID": 50,
    "date": "2019/06/18",
    "hoursSlept": 5.7,
    "sleepQuality": 1.8
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
    "userID": 11,
    "date": "2019/06/19",
    "hoursSlept": 5.6,
    "sleepQuality": 1.1
  },
  {
    "userID": 12,
    "date": "2019/06/19",
    "hoursSlept": 8.3,
    "sleepQuality": 1.4
  },
  {
    "userID": 13,
    "date": "2019/06/19",
    "hoursSlept": 4.9,
    "sleepQuality": 1.1
  },
  {
    "userID": 14,
    "date": "2019/06/19",
    "hoursSlept": 5.8,
    "sleepQuality": 2.6
  },
  {
    "userID": 15,
    "date": "2019/06/19",
    "hoursSlept": 4.1,
    "sleepQuality": 2.5
  },
  {
    "userID": 16,
    "date": "2019/06/19",
    "hoursSlept": 10.9,
    "sleepQuality": 3.5
  },
  {
    "userID": 17,
    "date": "2019/06/19",
    "hoursSlept": 4.3,
    "sleepQuality": 1.6
  },
  {
    "userID": 18,
    "date": "2019/06/19",
    "hoursSlept": 5,
    "sleepQuality": 1.8
  },
  {
    "userID": 19,
    "date": "2019/06/19",
    "hoursSlept": 6.7,
    "sleepQuality": 2.5
  },
  {
    "userID": 20,
    "date": "2019/06/19",
    "hoursSlept": 9.9,
    "sleepQuality": 3.6
  },
  {
    "userID": 21,
    "date": "2019/06/19",
    "hoursSlept": 8.9,
    "sleepQuality": 4
  },
  {
    "userID": 22,
    "date": "2019/06/19",
    "hoursSlept": 9.4,
    "sleepQuality": 4.5
  },
  {
    "userID": 23,
    "date": "2019/06/19",
    "hoursSlept": 10,
    "sleepQuality": 4.7
  },
  {
    "userID": 24,
    "date": "2019/06/19",
    "hoursSlept": 9.6,
    "sleepQuality": 4.5
  },
  {
    "userID": 25,
    "date": "2019/06/19",
    "hoursSlept": 7.6,
    "sleepQuality": 4.7
  },
  {
    "userID": 26,
    "date": "2019/06/19",
    "hoursSlept": 9,
    "sleepQuality": 1.7
  },
  {
    "userID": 27,
    "date": "2019/06/19",
    "hoursSlept": 8.1,
    "sleepQuality": 4.9
  },
  {
    "userID": 28,
    "date": "2019/06/19",
    "hoursSlept": 9.5,
    "sleepQuality": 4.4
  },
  {
    "userID": 29,
    "date": "2019/06/19",
    "hoursSlept": 9.3,
    "sleepQuality": 2.1
  },
  {
    "userID": 30,
    "date": "2019/06/19",
    "hoursSlept": 7.7,
    "sleepQuality": 1.1
  },
  {
    "userID": 31,
    "date": "2019/06/19",
    "hoursSlept": 10.7,
    "sleepQuality": 2.8
  },
  {
    "userID": 32,
    "date": "2019/06/19",
    "hoursSlept": 7.7,
    "sleepQuality": 4.1
  },
  {
    "userID": 33,
    "date": "2019/06/19",
    "hoursSlept": 4.2,
    "sleepQuality": 2.6
  },
  {
    "userID": 34,
    "date": "2019/06/19",
    "hoursSlept": 4.1,
    "sleepQuality": 2.7
  },
  {
    "userID": 35,
    "date": "2019/06/19",
    "hoursSlept": 5,
    "sleepQuality": 2.3
  },
  {
    "userID": 36,
    "date": "2019/06/19",
    "hoursSlept": 8.4,
    "sleepQuality": 1.1
  },
  {
    "userID": 37,
    "date": "2019/06/19",
    "hoursSlept": 9.2,
    "sleepQuality": 1.9
  },
  {
    "userID": 38,
    "date": "2019/06/19",
    "hoursSlept": 4.3,
    "sleepQuality": 3.1
  },
  {
    "userID": 39,
    "date": "2019/06/19",
    "hoursSlept": 4.5,
    "sleepQuality": 3.7
  },
  {
    "userID": 40,
    "date": "2019/06/19",
    "hoursSlept": 10.5,
    "sleepQuality": 2.4
  },
  {
    "userID": 41,
    "date": "2019/06/19",
    "hoursSlept": 7.4,
    "sleepQuality": 4.6
  },
  {
    "userID": 42,
    "date": "2019/06/19",
    "hoursSlept": 9.4,
    "sleepQuality": 1.6
  },
  {
    "userID": 43,
    "date": "2019/06/19",
    "hoursSlept": 4.3,
    "sleepQuality": 4.4
  },
  {
    "userID": 44,
    "date": "2019/06/19",
    "hoursSlept": 9.2,
    "sleepQuality": 3.6
  },
  {
    "userID": 45,
    "date": "2019/06/19",
    "hoursSlept": 7.6,
    "sleepQuality": 2.9
  },
  {
    "userID": 46,
    "date": "2019/06/19",
    "hoursSlept": 10.6,
    "sleepQuality": 3.3
  },
  {
    "userID": 47,
    "date": "2019/06/19",
    "hoursSlept": 10.8,
    "sleepQuality": 4.8
  },
  {
    "userID": 48,
    "date": "2019/06/19",
    "hoursSlept": 8.2,
    "sleepQuality": 3.7
  },
  {
    "userID": 49,
    "date": "2019/06/19",
    "hoursSlept": 8.3,
    "sleepQuality": 4.3
  },
  {
    "userID": 50,
    "date": "2019/06/19",
    "hoursSlept": 9.6,
    "sleepQuality": 1
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
    "userID": 11,
    "date": "2019/06/20",
    "hoursSlept": 6.9,
    "sleepQuality": 2.2
  },
  {
    "userID": 12,
    "date": "2019/06/20",
    "hoursSlept": 9,
    "sleepQuality": 3.8
  },
  {
    "userID": 13,
    "date": "2019/06/20",
    "hoursSlept": 7.5,
    "sleepQuality": 4.1
  },
  {
    "userID": 14,
    "date": "2019/06/20",
    "hoursSlept": 5.4,
    "sleepQuality": 2.5
  },
  {
    "userID": 15,
    "date": "2019/06/20",
    "hoursSlept": 4.4,
    "sleepQuality": 3.7
  },
  {
    "userID": 16,
    "date": "2019/06/20",
    "hoursSlept": 9.4,
    "sleepQuality": 2.6
  },
  {
    "userID": 17,
    "date": "2019/06/20",
    "hoursSlept": 10,
    "sleepQuality": 3.8
  },
  {
    "userID": 18,
    "date": "2019/06/20",
    "hoursSlept": 7.1,
    "sleepQuality": 3
  },
  {
    "userID": 19,
    "date": "2019/06/20",
    "hoursSlept": 11,
    "sleepQuality": 2.8
  },
  {
    "userID": 20,
    "date": "2019/06/20",
    "hoursSlept": 4,
    "sleepQuality": 3.2
  },
  {
    "userID": 21,
    "date": "2019/06/20",
    "hoursSlept": 5.2,
    "sleepQuality": 1.2
  },
  {
    "userID": 22,
    "date": "2019/06/20",
    "hoursSlept": 5.8,
    "sleepQuality": 3.6
  },
  {
    "userID": 23,
    "date": "2019/06/20",
    "hoursSlept": 4.4,
    "sleepQuality": 2.1
  },
  {
    "userID": 24,
    "date": "2019/06/20",
    "hoursSlept": 4.8,
    "sleepQuality": 1.8
  },
  {
    "userID": 25,
    "date": "2019/06/20",
    "hoursSlept": 8,
    "sleepQuality": 1.3
  },
  {
    "userID": 26,
    "date": "2019/06/20",
    "hoursSlept": 8.9,
    "sleepQuality": 4.6
  },
  {
    "userID": 27,
    "date": "2019/06/20",
    "hoursSlept": 8.2,
    "sleepQuality": 1.4
  },
  {
    "userID": 28,
    "date": "2019/06/20",
    "hoursSlept": 6.5,
    "sleepQuality": 1.8
  },
  {
    "userID": 29,
    "date": "2019/06/20",
    "hoursSlept": 8.4,
    "sleepQuality": 1.1
  },
  {
    "userID": 30,
    "date": "2019/06/20",
    "hoursSlept": 10.5,
    "sleepQuality": 2.5
  },
  {
    "userID": 31,
    "date": "2019/06/20",
    "hoursSlept": 10.3,
    "sleepQuality": 2.9
  },
  {
    "userID": 32,
    "date": "2019/06/20",
    "hoursSlept": 11,
    "sleepQuality": 2.3
  },
  {
    "userID": 33,
    "date": "2019/06/20",
    "hoursSlept": 4,
    "sleepQuality": 1.8
  },
  {
    "userID": 34,
    "date": "2019/06/20",
    "hoursSlept": 6.4,
    "sleepQuality": 2.2
  },
  {
    "userID": 35,
    "date": "2019/06/20",
    "hoursSlept": 5,
    "sleepQuality": 1.9
  },
  {
    "userID": 36,
    "date": "2019/06/20",
    "hoursSlept": 7.3,
    "sleepQuality": 3.1
  },
  {
    "userID": 37,
    "date": "2019/06/20",
    "hoursSlept": 4.7,
    "sleepQuality": 3.1
  },
  {
    "userID": 38,
    "date": "2019/06/20",
    "hoursSlept": 4.3,
    "sleepQuality": 2.1
  },
  {
    "userID": 39,
    "date": "2019/06/20",
    "hoursSlept": 10.4,
    "sleepQuality": 4.9
  },
  {
    "userID": 40,
    "date": "2019/06/20",
    "hoursSlept": 6.7,
    "sleepQuality": 3.7
  },
  {
    "userID": 41,
    "date": "2019/06/20",
    "hoursSlept": 7.7,
    "sleepQuality": 4.1
  },
  {
    "userID": 42,
    "date": "2019/06/20",
    "hoursSlept": 10,
    "sleepQuality": 2.3
  },
  {
    "userID": 43,
    "date": "2019/06/20",
    "hoursSlept": 5.5,
    "sleepQuality": 4.9
  },
  {
    "userID": 44,
    "date": "2019/06/20",
    "hoursSlept": 5.1,
    "sleepQuality": 3.7
  },
  {
    "userID": 45,
    "date": "2019/06/20",
    "hoursSlept": 4.3,
    "sleepQuality": 4.2
  },
  {
    "userID": 46,
    "date": "2019/06/20",
    "hoursSlept": 4.3,
    "sleepQuality": 1.1
  },
  {
    "userID": 47,
    "date": "2019/06/20",
    "hoursSlept": 8,
    "sleepQuality": 1.2
  },
  {
    "userID": 48,
    "date": "2019/06/20",
    "hoursSlept": 5.4,
    "sleepQuality": 4
  },
  {
    "userID": 49,
    "date": "2019/06/20",
    "hoursSlept": 9.2,
    "sleepQuality": 3.1
  },
  {
    "userID": 50,
    "date": "2019/06/20",
    "hoursSlept": 7.8,
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
    "userID": 11,
    "date": "2019/06/21",
    "hoursSlept": 10.9,
    "sleepQuality": 4.2
  },
  {
    "userID": 12,
    "date": "2019/06/21",
    "hoursSlept": 4.6,
    "sleepQuality": 2.6
  },
  {
    "userID": 13,
    "date": "2019/06/21",
    "hoursSlept": 10.2,
    "sleepQuality": 3.2
  },
  {
    "userID": 14,
    "date": "2019/06/21",
    "hoursSlept": 4.9,
    "sleepQuality": 1.5
  },
  {
    "userID": 15,
    "date": "2019/06/21",
    "hoursSlept": 9.5,
    "sleepQuality": 2
  },
  {
    "userID": 16,
    "date": "2019/06/21",
    "hoursSlept": 5.2,
    "sleepQuality": 3
  },
  {
    "userID": 17,
    "date": "2019/06/21",
    "hoursSlept": 7.1,
    "sleepQuality": 3.3
  },
  {
    "userID": 18,
    "date": "2019/06/21",
    "hoursSlept": 9.7,
    "sleepQuality": 2.8
  },
  {
    "userID": 19,
    "date": "2019/06/21",
    "hoursSlept": 8,
    "sleepQuality": 4.1
  },
  {
    "userID": 20,
    "date": "2019/06/21",
    "hoursSlept": 4.6,
    "sleepQuality": 2.4
  },
  {
    "userID": 21,
    "date": "2019/06/21",
    "hoursSlept": 8.7,
    "sleepQuality": 4.2
  },
  {
    "userID": 22,
    "date": "2019/06/21",
    "hoursSlept": 8.6,
    "sleepQuality": 1.7
  },
  {
    "userID": 23,
    "date": "2019/06/21",
    "hoursSlept": 9.1,
    "sleepQuality": 4.5
  },
  {
    "userID": 24,
    "date": "2019/06/21",
    "hoursSlept": 9.1,
    "sleepQuality": 3.7
  },
  {
    "userID": 25,
    "date": "2019/06/21",
    "hoursSlept": 9.3,
    "sleepQuality": 3.5
  },
  {
    "userID": 26,
    "date": "2019/06/21",
    "hoursSlept": 4.6,
    "sleepQuality": 1.5
  },
  {
    "userID": 27,
    "date": "2019/06/21",
    "hoursSlept": 7.5,
    "sleepQuality": 4.6
  },
  {
    "userID": 28,
    "date": "2019/06/21",
    "hoursSlept": 6,
    "sleepQuality": 2.8
  },
  {
    "userID": 29,
    "date": "2019/06/21",
    "hoursSlept": 10.6,
    "sleepQuality": 4.2
  },
  {
    "userID": 30,
    "date": "2019/06/21",
    "hoursSlept": 7.1,
    "sleepQuality": 4.4
  },
  {
    "userID": 31,
    "date": "2019/06/21",
    "hoursSlept": 7.6,
    "sleepQuality": 1.7
  },
  {
    "userID": 32,
    "date": "2019/06/21",
    "hoursSlept": 9,
    "sleepQuality": 4.4
  },
  {
    "userID": 33,
    "date": "2019/06/21",
    "hoursSlept": 10.1,
    "sleepQuality": 4.6
  },
  {
    "userID": 34,
    "date": "2019/06/21",
    "hoursSlept": 6.3,
    "sleepQuality": 3.3
  },
  {
    "userID": 35,
    "date": "2019/06/21",
    "hoursSlept": 7.5,
    "sleepQuality": 1.9
  },
  {
    "userID": 36,
    "date": "2019/06/21",
    "hoursSlept": 8,
    "sleepQuality": 3.3
  },
  {
    "userID": 37,
    "date": "2019/06/21",
    "hoursSlept": 8.3,
    "sleepQuality": 3.3
  },
  {
    "userID": 38,
    "date": "2019/06/21",
    "hoursSlept": 4.5,
    "sleepQuality": 1.2
  },
  {
    "userID": 39,
    "date": "2019/06/21",
    "hoursSlept": 4.5,
    "sleepQuality": 2.8
  },
  {
    "userID": 40,
    "date": "2019/06/21",
    "hoursSlept": 5.2,
    "sleepQuality": 4.6
  },
  {
    "userID": 41,
    "date": "2019/06/21",
    "hoursSlept": 5,
    "sleepQuality": 2.4
  },
  {
    "userID": 42,
    "date": "2019/06/21",
    "hoursSlept": 10.9,
    "sleepQuality": 4.1
  },
  {
    "userID": 43,
    "date": "2019/06/21",
    "hoursSlept": 8.5,
    "sleepQuality": 4.8
  },
  {
    "userID": 44,
    "date": "2019/06/21",
    "hoursSlept": 6.2,
    "sleepQuality": 3.9
  },
  {
    "userID": 45,
    "date": "2019/06/21",
    "hoursSlept": 6.9,
    "sleepQuality": 2.2
  },
  {
    "userID": 46,
    "date": "2019/06/21",
    "hoursSlept": 6.9,
    "sleepQuality": 1.5
  },
  {
    "userID": 47,
    "date": "2019/06/21",
    "hoursSlept": 10,
    "sleepQuality": 1
  },
  {
    "userID": 48,
    "date": "2019/06/21",
    "hoursSlept": 4.8,
    "sleepQuality": 3.6
  },
  {
    "userID": 49,
    "date": "2019/06/21",
    "hoursSlept": 10.8,
    "sleepQuality": 1.2
  },
  {
    "userID": 50,
    "date": "2019/06/21",
    "hoursSlept": 9.1,
    "sleepQuality": 1.2
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
    "userID": 11,
    "date": "2019/06/22",
    "hoursSlept": 10.2,
    "sleepQuality": 1.2
  },
  {
    "userID": 12,
    "date": "2019/06/22",
    "hoursSlept": 4.5,
    "sleepQuality": 4.9
  },
  {
    "userID": 13,
    "date": "2019/06/22",
    "hoursSlept": 6,
    "sleepQuality": 1.9
  },
  {
    "userID": 14,
    "date": "2019/06/22",
    "hoursSlept": 4.7,
    "sleepQuality": 3.6
  },
  {
    "userID": 15,
    "date": "2019/06/22",
    "hoursSlept": 9.1,
    "sleepQuality": 2.4
  },
  {
    "userID": 16,
    "date": "2019/06/22",
    "hoursSlept": 4.9,
    "sleepQuality": 1.2
  },
  {
    "userID": 17,
    "date": "2019/06/22",
    "hoursSlept": 9.8,
    "sleepQuality": 3.9
  },
  {
    "userID": 18,
    "date": "2019/06/22",
    "hoursSlept": 8.9,
    "sleepQuality": 4
  },
  {
    "userID": 19,
    "date": "2019/06/22",
    "hoursSlept": 7.6,
    "sleepQuality": 3.9
  },
  {
    "userID": 20,
    "date": "2019/06/22",
    "hoursSlept": 5.1,
    "sleepQuality": 4.3
  },
  {
    "userID": 21,
    "date": "2019/06/22",
    "hoursSlept": 5.2,
    "sleepQuality": 1.1
  },
  {
    "userID": 22,
    "date": "2019/06/22",
    "hoursSlept": 4.3,
    "sleepQuality": 3.5
  },
  {
    "userID": 23,
    "date": "2019/06/22",
    "hoursSlept": 6.1,
    "sleepQuality": 4
  },
  {
    "userID": 24,
    "date": "2019/06/22",
    "hoursSlept": 7.1,
    "sleepQuality": 4.4
  },
  {
    "userID": 25,
    "date": "2019/06/22",
    "hoursSlept": 5.9,
    "sleepQuality": 1.9
  },
  {
    "userID": 26,
    "date": "2019/06/22",
    "hoursSlept": 9.2,
    "sleepQuality": 4
  },
  {
    "userID": 27,
    "date": "2019/06/22",
    "hoursSlept": 10.6,
    "sleepQuality": 1.8
  },
  {
    "userID": 28,
    "date": "2019/06/22",
    "hoursSlept": 8.5,
    "sleepQuality": 4.1
  },
  {
    "userID": 29,
    "date": "2019/06/22",
    "hoursSlept": 10.7,
    "sleepQuality": 3.6
  },
  {
    "userID": 30,
    "date": "2019/06/22",
    "hoursSlept": 4.8,
    "sleepQuality": 3.5
  },
  {
    "userID": 31,
    "date": "2019/06/22",
    "hoursSlept": 6,
    "sleepQuality": 3.4
  },
  {
    "userID": 32,
    "date": "2019/06/22",
    "hoursSlept": 9,
    "sleepQuality": 3.1
  },
  {
    "userID": 33,
    "date": "2019/06/22",
    "hoursSlept": 8,
    "sleepQuality": 1.4
  },
  {
    "userID": 34,
    "date": "2019/06/22",
    "hoursSlept": 4.1,
    "sleepQuality": 3.3
  },
  {
    "userID": 35,
    "date": "2019/06/22",
    "hoursSlept": 8.9,
    "sleepQuality": 4.4
  },
  {
    "userID": 36,
    "date": "2019/06/22",
    "hoursSlept": 6.2,
    "sleepQuality": 3
  },
  {
    "userID": 37,
    "date": "2019/06/22",
    "hoursSlept": 10.8,
    "sleepQuality": 2.5
  },
  {
    "userID": 38,
    "date": "2019/06/22",
    "hoursSlept": 8.2,
    "sleepQuality": 4.2
  },
  {
    "userID": 39,
    "date": "2019/06/22",
    "hoursSlept": 7.9,
    "sleepQuality": 2.6
  },
  {
    "userID": 40,
    "date": "2019/06/22",
    "hoursSlept": 7.8,
    "sleepQuality": 3.8
  },
  {
    "userID": 41,
    "date": "2019/06/22",
    "hoursSlept": 10.9,
    "sleepQuality": 3.8
  },
  {
    "userID": 42,
    "date": "2019/06/22",
    "hoursSlept": 6.5,
    "sleepQuality": 1
  },
  {
    "userID": 43,
    "date": "2019/06/22",
    "hoursSlept": 10,
    "sleepQuality": 2.3
  },
  {
    "userID": 44,
    "date": "2019/06/22",
    "hoursSlept": 4.9,
    "sleepQuality": 1.1
  },
  {
    "userID": 45,
    "date": "2019/06/22",
    "hoursSlept": 10.1,
    "sleepQuality": 2.3
  },
  {
    "userID": 46,
    "date": "2019/06/22",
    "hoursSlept": 9.8,
    "sleepQuality": 1.9
  },
  {
    "userID": 47,
    "date": "2019/06/22",
    "hoursSlept": 4.4,
    "sleepQuality": 4.5
  },
  {
    "userID": 48,
    "date": "2019/06/22",
    "hoursSlept": 10,
    "sleepQuality": 4.1
  },
  {
    "userID": 49,
    "date": "2019/06/22",
    "hoursSlept": 7.7,
    "sleepQuality": 3.8
  },
  {
    "userID": 50,
    "date": "2019/06/22",
    "hoursSlept": 4.7,
    "sleepQuality": 3
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
    "userID": 11,
    "date": "2019/06/23",
    "hoursSlept": 6,
    "sleepQuality": 3.2
  },
  {
    "userID": 12,
    "date": "2019/06/23",
    "hoursSlept": 5.8,
    "sleepQuality": 4.9
  },
  {
    "userID": 13,
    "date": "2019/06/23",
    "hoursSlept": 7.3,
    "sleepQuality": 4.7
  },
  {
    "userID": 14,
    "date": "2019/06/23",
    "hoursSlept": 8.1,
    "sleepQuality": 2
  },
  {
    "userID": 15,
    "date": "2019/06/23",
    "hoursSlept": 6.4,
    "sleepQuality": 2
  },
  {
    "userID": 16,
    "date": "2019/06/23",
    "hoursSlept": 6.9,
    "sleepQuality": 1.7
  },
  {
    "userID": 17,
    "date": "2019/06/23",
    "hoursSlept": 8.9,
    "sleepQuality": 4.7
  },
  {
    "userID": 18,
    "date": "2019/06/23",
    "hoursSlept": 9,
    "sleepQuality": 3.4
  },
  {
    "userID": 19,
    "date": "2019/06/23",
    "hoursSlept": 4.1,
    "sleepQuality": 4.3
  },
  {
    "userID": 20,
    "date": "2019/06/23",
    "hoursSlept": 7.1,
    "sleepQuality": 2.6
  },
  {
    "userID": 21,
    "date": "2019/06/23",
    "hoursSlept": 10.4,
    "sleepQuality": 4.7
  },
  {
    "userID": 22,
    "date": "2019/06/23",
    "hoursSlept": 9.5,
    "sleepQuality": 2.1
  },
  {
    "userID": 23,
    "date": "2019/06/23",
    "hoursSlept": 6.7,
    "sleepQuality": 1
  },
  {
    "userID": 24,
    "date": "2019/06/23",
    "hoursSlept": 6.4,
    "sleepQuality": 1.4
  },
  {
    "userID": 25,
    "date": "2019/06/23",
    "hoursSlept": 9.9,
    "sleepQuality": 2.9
  },
  {
    "userID": 26,
    "date": "2019/06/23",
    "hoursSlept": 8.1,
    "sleepQuality": 1.3
  },
  {
    "userID": 27,
    "date": "2019/06/23",
    "hoursSlept": 9.3,
    "sleepQuality": 2.5
  },
  {
    "userID": 28,
    "date": "2019/06/23",
    "hoursSlept": 10.4,
    "sleepQuality": 1.5
  },
  {
    "userID": 29,
    "date": "2019/06/23",
    "hoursSlept": 8,
    "sleepQuality": 1.3
  },
  {
    "userID": 30,
    "date": "2019/06/23",
    "hoursSlept": 5,
    "sleepQuality": 4.3
  },
  {
    "userID": 31,
    "date": "2019/06/23",
    "hoursSlept": 6.2,
    "sleepQuality": 2.9
  },
  {
    "userID": 32,
    "date": "2019/06/23",
    "hoursSlept": 5.1,
    "sleepQuality": 4
  },
  {
    "userID": 33,
    "date": "2019/06/23",
    "hoursSlept": 10.3,
    "sleepQuality": 1
  },
  {
    "userID": 34,
    "date": "2019/06/23",
    "hoursSlept": 6.4,
    "sleepQuality": 2.8
  },
  {
    "userID": 35,
    "date": "2019/06/23",
    "hoursSlept": 6.1,
    "sleepQuality": 1.5
  },
  {
    "userID": 36,
    "date": "2019/06/23",
    "hoursSlept": 8.8,
    "sleepQuality": 4.9
  },
  {
    "userID": 37,
    "date": "2019/06/23",
    "hoursSlept": 10.7,
    "sleepQuality": 5
  },
  {
    "userID": 38,
    "date": "2019/06/23",
    "hoursSlept": 7.7,
    "sleepQuality": 4
  },
  {
    "userID": 39,
    "date": "2019/06/23",
    "hoursSlept": 10.1,
    "sleepQuality": 1.8
  },
  {
    "userID": 40,
    "date": "2019/06/23",
    "hoursSlept": 5.7,
    "sleepQuality": 1.1
  },
  {
    "userID": 41,
    "date": "2019/06/23",
    "hoursSlept": 7.8,
    "sleepQuality": 2.8
  },
  {
    "userID": 42,
    "date": "2019/06/23",
    "hoursSlept": 10.4,
    "sleepQuality": 2.2
  },
  {
    "userID": 43,
    "date": "2019/06/23",
    "hoursSlept": 10.5,
    "sleepQuality": 3.9
  },
  {
    "userID": 44,
    "date": "2019/06/23",
    "hoursSlept": 7.2,
    "sleepQuality": 4.8
  },
  {
    "userID": 45,
    "date": "2019/06/23",
    "hoursSlept": 9.4,
    "sleepQuality": 2.5
  },
  {
    "userID": 46,
    "date": "2019/06/23",
    "hoursSlept": 7.2,
    "sleepQuality": 4
  },
  {
    "userID": 47,
    "date": "2019/06/23",
    "hoursSlept": 8.5,
    "sleepQuality": 4.6
  },
  {
    "userID": 48,
    "date": "2019/06/23",
    "hoursSlept": 5.1,
    "sleepQuality": 4.7
  },
  {
    "userID": 49,
    "date": "2019/06/23",
    "hoursSlept": 11,
    "sleepQuality": 4.3
  },
  {
    "userID": 50,
    "date": "2019/06/23",
    "hoursSlept": 7,
    "sleepQuality": 2.7
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
    "userID": 11,
    "date": "2019/06/24",
    "hoursSlept": 7.7,
    "sleepQuality": 2.3
  },
  {
    "userID": 12,
    "date": "2019/06/24",
    "hoursSlept": 7.9,
    "sleepQuality": 2
  },
  {
    "userID": 13,
    "date": "2019/06/24",
    "hoursSlept": 7.4,
    "sleepQuality": 2.1
  },
  {
    "userID": 14,
    "date": "2019/06/24",
    "hoursSlept": 4.5,
    "sleepQuality": 1.7
  },
  {
    "userID": 15,
    "date": "2019/06/24",
    "hoursSlept": 6.1,
    "sleepQuality": 3.4
  },
  {
    "userID": 16,
    "date": "2019/06/24",
    "hoursSlept": 7.3,
    "sleepQuality": 1
  },
  {
    "userID": 17,
    "date": "2019/06/24",
    "hoursSlept": 8,
    "sleepQuality": 2.6
  },
  {
    "userID": 18,
    "date": "2019/06/24",
    "hoursSlept": 5.9,
    "sleepQuality": 3.9
  },
  {
    "userID": 19,
    "date": "2019/06/24",
    "hoursSlept": 7.1,
    "sleepQuality": 4.4
  },
  {
    "userID": 20,
    "date": "2019/06/24",
    "hoursSlept": 6,
    "sleepQuality": 2.6
  },
  {
    "userID": 21,
    "date": "2019/06/24",
    "hoursSlept": 6.5,
    "sleepQuality": 4.3
  },
  {
    "userID": 22,
    "date": "2019/06/24",
    "hoursSlept": 5.3,
    "sleepQuality": 1.2
  },
  {
    "userID": 23,
    "date": "2019/06/24",
    "hoursSlept": 8.3,
    "sleepQuality": 3.7
  },
  {
    "userID": 24,
    "date": "2019/06/24",
    "hoursSlept": 7.8,
    "sleepQuality": 2.8
  },
  {
    "userID": 25,
    "date": "2019/06/24",
    "hoursSlept": 5.6,
    "sleepQuality": 2.1
  },
  {
    "userID": 26,
    "date": "2019/06/24",
    "hoursSlept": 5.7,
    "sleepQuality": 1.8
  },
  {
    "userID": 27,
    "date": "2019/06/24",
    "hoursSlept": 4.1,
    "sleepQuality": 1.4
  },
  {
    "userID": 28,
    "date": "2019/06/24",
    "hoursSlept": 6.2,
    "sleepQuality": 1.8
  },
  {
    "userID": 29,
    "date": "2019/06/24",
    "hoursSlept": 6.5,
    "sleepQuality": 4.6
  },
  {
    "userID": 30,
    "date": "2019/06/24",
    "hoursSlept": 6.3,
    "sleepQuality": 1.7
  },
  {
    "userID": 31,
    "date": "2019/06/24",
    "hoursSlept": 4.1,
    "sleepQuality": 3.1
  },
  {
    "userID": 32,
    "date": "2019/06/24",
    "hoursSlept": 8.7,
    "sleepQuality": 4.5
  },
  {
    "userID": 33,
    "date": "2019/06/24",
    "hoursSlept": 5,
    "sleepQuality": 1.9
  },
  {
    "userID": 34,
    "date": "2019/06/24",
    "hoursSlept": 8.7,
    "sleepQuality": 1.1
  },
  {
    "userID": 35,
    "date": "2019/06/24",
    "hoursSlept": 5.9,
    "sleepQuality": 4
  },
  {
    "userID": 36,
    "date": "2019/06/24",
    "hoursSlept": 6.2,
    "sleepQuality": 1.3
  },
  {
    "userID": 37,
    "date": "2019/06/24",
    "hoursSlept": 8,
    "sleepQuality": 4.9
  },
  {
    "userID": 38,
    "date": "2019/06/24",
    "hoursSlept": 8.3,
    "sleepQuality": 2.5
  },
  {
    "userID": 39,
    "date": "2019/06/24",
    "hoursSlept": 4.7,
    "sleepQuality": 4.4
  },
  {
    "userID": 40,
    "date": "2019/06/24",
    "hoursSlept": 10.4,
    "sleepQuality": 2.1
  },
  {
    "userID": 41,
    "date": "2019/06/24",
    "hoursSlept": 9.3,
    "sleepQuality": 1.4
  },
  {
    "userID": 42,
    "date": "2019/06/24",
    "hoursSlept": 6.2,
    "sleepQuality": 1.2
  },
  {
    "userID": 43,
    "date": "2019/06/24",
    "hoursSlept": 5.9,
    "sleepQuality": 4.9
  },
  {
    "userID": 44,
    "date": "2019/06/24",
    "hoursSlept": 10.7,
    "sleepQuality": 4.8
  },
  {
    "userID": 45,
    "date": "2019/06/24",
    "hoursSlept": 5,
    "sleepQuality": 3.9
  },
  {
    "userID": 46,
    "date": "2019/06/24",
    "hoursSlept": 9.1,
    "sleepQuality": 1.5
  },
  {
    "userID": 47,
    "date": "2019/06/24",
    "hoursSlept": 8.3,
    "sleepQuality": 3
  },
  {
    "userID": 48,
    "date": "2019/06/24",
    "hoursSlept": 8,
    "sleepQuality": 3.9
  },
  {
    "userID": 49,
    "date": "2019/06/24",
    "hoursSlept": 7.3,
    "sleepQuality": 3.8
  },
  {
    "userID": 50,
    "date": "2019/06/24",
    "hoursSlept": 7.7,
    "sleepQuality": 3
  }];

  if (typeof module !== 'undefined') {
  module.exports = sleepDataSample;
}
