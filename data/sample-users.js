const sampleUsers = [
  {
    "id": 1,
    "name": "Nyasia Weber",
    "address": "270 August Meadows, Maribelside SD 36129",
    "email": "Jordane_Schultz@yahoo.com",
    "strideLength": 4.7,
    "dailyStepGoal": 8000
  },
  {
    "id": 2,
    "name": "Shayne Swift",
    "address": "747 Dickinson Gardens, South Helga OH 88484-2240",
    "email": "Lawson74@yahoo.com",
    "strideLength": 4.5,
    "dailyStepGoal": 11000
  },
  {
    "id": 3,
    "name": "Cleo Lindgren",
    "address": "744 Josephine Parkway, Hellerside OH 17625",
    "email": "Zachery.Von49@gmail.com",
    "strideLength": 5.1,
    "dailyStepGoal": 4000
  }

]

const sampleHydration = [
{
  "userID": 1,
    "hydrationData": [
      {
        "date": "06/05/2019",
        "numOunces": 64
      },
      {
        "date": "07/05/2019",
        "numOunces": 80
      },
      {
        "date": "08/05/2019",
        "numOunces": 39
      },
      {
        "date": "09/05/2019",
        "numOunces": 40
      },
      {
        "date": "10/05/2019",
        "numOunces": 65
      },
      {
        "date": "11/05/2019",
        "numOunces": 84
      },
      {
        "date": "12/05/2019",
        "numOunces": 33
      },
      {
        "date": "13/05/2019",
        "numOunces": 60
      },
      {
        "date": "14/05/2019",
        "numOunces": 30
      },
      {
        "date": "15/05/2019",
        "numOunces": 59
      }
    ]
},

{
    "userID": 2,
    "hydrationData": [
      {
        "date": "06/05/2019",
        "numOunces": 67
      },
      {
        "date": "07/05/2019",
        "numOunces": 89
      },
      {
        "date": "08/05/2019",
        "numOunces": 82
      },
      {
        "date": "09/05/2019",
        "numOunces": 37
      },
      {
        "date": "10/05/2019",
        "numOunces": 80
      },
      {
        "date": "11/05/2019",
        "numOunces": 22
      },
      {
        "date": "12/05/2019",
        "numOunces": 97
      },
      {
        "date": "13/05/2019",
        "numOunces": 69
      },
      {
        "date": "14/05/2019",
        "numOunces": 48
      },
      {
        "date": "15/05/2019",
        "numOunces": 20
      }
    ]
  },
    {
    "userID": 3,
    "hydrationData": [
      {
        "date": "06/05/2019",
        "numOunces": 16
      },
      {
        "date": "07/05/2019",
        "numOunces": 85
      },
      {
        "date": "08/05/2019",
        "numOunces": 28
      },
      {
        "date": "09/05/2019",
        "numOunces": 52
      },
      {
        "date": "10/05/2019",
        "numOunces": 11
      },
      {
        "date": "11/05/2019",
        "numOunces": 65
      },
      {
        "date": "12/05/2019",
        "numOunces": 66
      },
      {
        "date": "13/05/2019",
        "numOunces": 26
      },
      {
        "date": "14/05/2019",
        "numOunces": 84
      },
      {
        "date": "15/05/2019",
        "numOunces": 16
      }
    ]
  }
]

const sampleSleep = [
 {
    "userID": 1,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 8,
        "sleepQuality": 4.8
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 10.7,
        "sleepQuality": 4.8
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 8.1,
        "sleepQuality": 1.9
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 4.5,
        "sleepQuality": 3.4
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 10.7,
        "sleepQuality": 4.3
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 5.6,
        "sleepQuality": 3.5
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 10.1,
        "sleepQuality": 1.7
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 10.1,
        "sleepQuality": 3.2
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 10.5,
        "sleepQuality": 2
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 6.1,
        "sleepQuality": 2.9
      }
    ]
  },

  {
    "userID": 2,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 6.3,
        "sleepQuality": 2.2
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 9.2,
        "sleepQuality": 4.8
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 6.6,
        "sleepQuality": 4.5
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 6.8,
        "sleepQuality": 1.4
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 9.3,
        "sleepQuality": 4.8
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 8.5,
        "sleepQuality": 1.7
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 5.9,
        "sleepQuality": 3.2
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 4.1,
        "sleepQuality": 2.1
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 4.3,
        "sleepQuality": 4.2
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 9.6,
        "sleepQuality": 3.8
      }
    ]

  },
  {
    "userID": 3,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 7.2,
        "sleepQuality": 5
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 5.4,
        "sleepQuality": 4.1
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 4.7,
        "sleepQuality": 1.2
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 10.2,
        "sleepQuality": 1.7
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 7.9,
        "sleepQuality": 2.7
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 5.6,
        "sleepQuality": 3.7
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 10.2,
        "sleepQuality": 2.4
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 6.4,
        "sleepQuality": 1.7
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 4.5,
        "sleepQuality": 4
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 7.8,
        "sleepQuality": 2.4
      }
    ]
  }
]

if(typeof module !== 'undefined') {
  module.exports = sampleUsers;
}