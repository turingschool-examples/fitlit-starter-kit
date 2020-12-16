'use strict'
const chai = require('chai')
const expect = chai.expect
const UserRepo = require('../src/userRepo')
const User = require('../src/user')
const UserSleep = require('../src/userSleep')
const UserHydration = require('../src/userHydration');
const UserActivity = require('../src/userActivity');
const moment = require('../src/moment');

describe('UserRepo', () => {
  let userSleep,
    userSleepAll,
    userSleep1,
    userSleep2,
    userSleep3,
    userSleep4,
    userSleep5,
    userSleep6,
    userSleep7,
    userSleep8,
    user2Sleep1,
    user2Sleep2,
    user2Sleep3,
    user2Sleep4,
    user2Sleep5,
    user2Sleep6,
    user2Sleep7,
    user2Sleep8,
    userHydrationDataAll,
    userHydrationData1,
    userHydrationData2,
    userHydrationData3,
    userHydrationData4,
    userHydrationData5,
    userHydrationData6,
    userHydrationData7,
    userHydrationData8,
    user2HydrationData,
    userActivity,
    userActivityAll,
    userRepo,
    userActivity1,
    userActivity2,
    userActivity3,
    userActivity4,
    userActivity5,
    userActivity6,
    userActivity7,
    userActivity8,
    user2Activity,
    user1,
    user2;

  beforeEach(() => {

    (userHydrationData1 = {
      userID: 1,
      date: "2019/06/12",
      numOunces: 38,
    }),
      (userHydrationData2 = {
        userID: 1,
        date: "2019/06/13",
        numOunces: 60,
      }),
      (userHydrationData3 = {
        userID: 1,
        date: "2019/06/14",
        numOunces: 40,
      }),
      (userHydrationData4 = {
        userID: 1,
        date: "2019/06/15",
        numOunces: 50,
      }),
      (userHydrationData5 = {
        userID: 1,
        date: "2019/06/16",
        numOunces: 51,
      }),
      (userHydrationData6 = {
        userID: 1,
        date: "2019/06/17",
        numOunces: 65,
      }),
      (userHydrationData7 = {
        userID: 1,
        date: "2019/06/18",
        numOunces: 60,
      }),
      (userHydrationData8 = {
        userID: 1,
        date: "2019/06/19",
        numOunces: 60,
      }),
      (user2HydrationData = {
        userID: 2,
        date: "2019/06/12",
        numOunces: 20,
      }),
      (userHydrationDataAll = new UserHydration([
        userHydrationData1,
        userHydrationData2,
        userHydrationData3,
        userHydrationData4,
        userHydrationData5,
        userHydrationData6,
        userHydrationData7,
        userHydrationData8,
        user2HydrationData,
      ])),
      (userSleep1 = {
        userID: 1,
        date: "2019/06/15",
        hoursSlept: 6.1,
        sleepQuality: 2.2,
      }),
      (user2Sleep1 = {
        userID: 2,
        date: "2019/06/15",
        hoursSlept: 10.2,
        sleepQuality: 5.2,
      }),
      (userSleep2 = {
        userID: 1,
        date: "2019/06/16",
        hoursSlept: 10.5,
        sleepQuality: 3.8,
      }),
      (user2Sleep2 = {
        userID: 2,
        date: "2019/06/16",
        hoursSlept: 10.5,
        sleepQuality: 3.2,
      }),
      (userSleep3 = {
        userID: 1,
        date: "2019/06/17",
        hoursSlept: 7,
        sleepQuality: 3,
      }),
      (user2Sleep3 = {
        userID: 2,
        date: "2019/06/17",
        hoursSlept: 10.2,
        sleepQuality: 3.9,
      }),
      (userSleep4 = {
        userID: 1,
        date: "2019/06/18",
        hoursSlept: 7.8,
        sleepQuality: 1.5,
      }),
      (user2Sleep4 = {
        userID: 2,
        date: "2019/06/18",
        hoursSlept: 10.2,
        sleepQuality: 2.2,
      }),
      (userSleep5 = {
        userID: 1,
        date: "2019/06/19",
        hoursSlept: 8,
        sleepQuality: 1.3,
      }),
      (user2Sleep5 = {
        userID: 2,
        date: "2019/06/19",
        hoursSlept: 10.2,
        sleepQuality: 3.8,
      }),
      (userSleep6 = {
        userID: 1,
        date: "2019/06/20",
        hoursSlept: 5.1,
        sleepQuality: 3.7,
      }),
      (user2Sleep6 = {
        userID: 2,
        date: "2019/06/20",
        hoursSlept: 10.2,
        sleepQuality: 4.0,
      }),
      (userSleep7 = {
        userID: 1,
        date: "2019/06/21",
        hoursSlept: 5.1,
        sleepQuality: 3.7,
      }),
      (user2Sleep7 = {
        userID: 2,
        date: "2019/06/21",
        hoursSlept: 10.2,
        sleepQuality: 3,
      }),
      (userSleep8 = {
        userID: 1,
        date: "2019/06/22",
        hoursSlept: 5.1,
        sleepQuality: 3.7,
      }),
      (user2Sleep8 = {
        userID: 2,
        date: "2019/06/22",
        hoursSlept: 10.2,
        sleepQuality: 5.2,
      }),
      (userSleep = new UserSleep([
        userSleep1,
        userSleep2,
        userSleep3,
        userSleep4,
        userSleep5,
        userSleep6,
        userSleep7,
        userSleep8,
      ])),
      (userSleepAll = new UserSleep([
        userSleep1,
        userSleep2,
        userSleep3,
        userSleep4,
        userSleep5,
        userSleep6,
        userSleep7,
        userSleep8,
        user2Sleep1,
        user2Sleep2,
        user2Sleep3,
        user2Sleep4,
        user2Sleep5,
        user2Sleep6,
        user2Sleep7,
        user2Sleep8,
      ])),
      (userActivity1 = {
        userID: 1,
        date: "2019/06/12",
        numSteps: 3577,
        minutesActive: 70,
        flightsOfStairs: 16,
      }),
      (userActivity2 = {
        userID: 1,
        date: "2019/06/13",
        numSteps: 2500,
        minutesActive: 60,
        flightsOfStairs: 14,
      }),
      (userActivity3 = {
        userID: 1,
        date: "2019/06/14",
        numSteps: 4004,
        minutesActive: 200,
        flightsOfStairs: 12,
      }),
      (userActivity4 = {
        userID: 1,
        date: "2019/06/15",
        numSteps: 6900,
        minutesActive: 85,
        flightsOfStairs: 20,
      }),
      (userActivity5 = {
        userID: 1,
        date: "2019/06/16",
        numSteps: 4200,
        minutesActive: 69,
        flightsOfStairs: 15,
      }),
      (userActivity6 = {
        userID: 1,
        date: "2019/06/17",
        numSteps: 7070,
        minutesActive: 85,
        flightsOfStairs: 13,
      }),
      (userActivity7 = {
        userID: 1,
        date: "2019/06/18",
        numSteps: 6969,
        minutesActive: 69,
        flightsOfStairs: 17,
      }),
      (userActivity8 = {
        userID: 1,
        date: "2019/06/19",
        numSteps: 2030,
        minutesActive: 100,
        flightsOfStairs: 9,
      }),
      (user2Activity = {
        userID: 2,
        date: "2019/06/12",
        numSteps: 2040,
        minutesActive: 90,
        flightsOfStairs: 10,
      }),
      (userActivity = new UserActivity([
        userActivity1,
        userActivity2,
        userActivity3,
        userActivity4,
        userActivity5,
        userActivity6,
        userActivity7,
        userActivity8,
      ])),
      (userActivityAll = new UserActivity([
        userActivity1,
        userActivity2,
        userActivity3,
        userActivity4,
        userActivity5,
        userActivity6,
        userActivity7,
        userActivity8,
        user2Activity,
      ])),
      (userRepo = new UserRepo(
        [user1, user2],
        [
          userSleep1,
          user2Sleep1,
          userSleep2,
          user2Sleep2,
          userSleep3,
          user2Sleep3,
          userSleep4,
          user2Sleep4,
          userSleep5,
          user2Sleep5,
          userSleep6,
          user2Sleep6,
          userSleep7,
          user2Sleep7,
          userSleep8,
          user2Sleep8,
        ],
        [
          userHydrationData1,
          userHydrationData2,
          userHydrationData3,
          userHydrationData4,
          userHydrationData5,
          userHydrationData6,
          userHydrationData7,
          userHydrationData8,
          user2HydrationData,
        ],
        [
          userActivity1,
          userActivity2,
          userActivity3,
          userActivity4,
          userActivity5,
          userActivity6,
          userActivity7,
          userActivity8,
        ]
      )),
      (user1 = new User(
        {
          id: 1,
          name: "Testy User",
          address: "123 Main St, Hometown CO 80123-1234",
          email: "my.email.address@hotmail.com",
          strideLength: 4.3,
          dailyStepGoal: 12340,
        },
        [
          userSleep1,
          userSleep2,
          userSleep3,
          userSleep4,
          userSleep5,
          userSleep6,
          userSleep7,
          userSleep8,
        ],
        [
          userHydrationData1,
          userHydrationData2,
          userHydrationData3,
          userHydrationData4,
          userHydrationData5,
          userHydrationData6,
          userHydrationData7,
          userHydrationData8,
        ],
        [
          userActivity1,
          userActivity2,
          userActivity3,
          userActivity4,
          userActivity5,
          userActivity6,
          userActivity7,
          userActivity8,
        ]
      )),
      (user2 = new User({
        id: 2,
        name: "Great Person",
        address: "678 Second St, This Place IL 60188-1234",
        email: "thisismyemail@aol.com",
        strideLength: 3.8,
        dailyStepGoal: 15000,
      }));
  })

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function')
  })

  it('should be an instance of User', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo)
  })

  it('should return all users average numOunces', () => {
    const testArray = [
      userHydrationData1,
      userHydrationData2,
      userHydrationData3,
      userHydrationData4,
      userHydrationData5,
      userHydrationData6,
      userHydrationData7,
      userHydrationData8,
      user2HydrationData,
    ]
    expect(userRepo.getAllUserAvgItem(testArray, '2019/06/12', 'numOunces')).to.equal(29);
  })

  it("should return all users average sleepQuality and hoursSlept", () => {
    const testArray = [
      userSleep1,
      userSleep2,
      userSleep3,
      userSleep4,
      userSleep5,
      userSleep6,
      userSleep7,
      userSleep8,
      user2Sleep1,
    ];
    expect(
      userRepo.getAllUserAvgItem(testArray, "2019/06/15", "sleepQuality")
    ).to.equal(3.7)
    expect(
      userRepo.getAllUserAvgItem(testArray, "2019/06/15", "hoursSlept")
    ).to.equal(8.149999999999999);
  });

  it("should return all users average steps, minutes active and flights of stairs", () => {
    const testArray = [
      userActivity1,
      userActivity2,
      userActivity3,
      userActivity4,
      userActivity5,
      userActivity6,
      userActivity7,
      userActivity8,
      user2Activity,
    ];
    expect(
      userRepo.getAllUserAvgItem(testArray, "2019/06/12", "numSteps")
    ).to.equal(2808.5);
    expect(
      userRepo.getAllUserAvgItem(testArray, "2019/06/12", "minutesActive")
    ).to.equal(80);
    expect(
      userRepo.getAllUserAvgItem(testArray, "2019/06/12", "flightsOfStairs")
    ).to.equal(13);
  });


  it("should return a user object", () => {
    expect(userRepo.getAUser(1)).to.deep.equal({
      id: 1,
      name: "Testy User",
      address: "123 Main St, Hometown CO 80123-1234",
      email: "my.email.address@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 12340,
      userActivity: {
        dailyStepGoal: 12340,
        strideLength: 4.3,
        userActivityData: [
          {
            userID: 1,
            date: "2019/06/12",
            numSteps: 3577,
            minutesActive: 70,
            flightsOfStairs: 16,
          },
          {
            userID: 1,
            date: "2019/06/13",
            numSteps: 2500,
            minutesActive: 60,
            flightsOfStairs: 14,
          },
          {
            userID: 1,
            date: "2019/06/14",
            numSteps: 4004,
            minutesActive: 200,
            flightsOfStairs: 12,
          },
          {
            userID: 1,
            date: "2019/06/15",
            numSteps: 6900,
            minutesActive: 85,
            flightsOfStairs: 20,
          },
          {
            userID: 1,
            date: "2019/06/16",
            numSteps: 4200,
            minutesActive: 69,
            flightsOfStairs: 15,
          },
          {
            userID: 1,
            date: "2019/06/17",
            numSteps: 7070,
            minutesActive: 85,
            flightsOfStairs: 13,
          },
          {
            userID: 1,
            date: "2019/06/18",
            numSteps: 6969,
            minutesActive: 69,
            flightsOfStairs: 17,
          },
          {
            userID: 1,
            date: "2019/06/19",
            numSteps: 2030,
            minutesActive: 100,
            flightsOfStairs: 9,
          },
        ],
      },
      userSleep: {
        userSleepData: [
          {
            userID: 1,
            date: "2019/06/15",
            hoursSlept: 6.1,
            sleepQuality: 2.2,
          },
          {
            userID: 1,
            date: "2019/06/16",
            hoursSlept: 10.5,
            sleepQuality: 3.8,
          },
          {
            userID: 1,
            date: "2019/06/17",
            hoursSlept: 7,
            sleepQuality: 3,
          },
          {
            userID: 1,
            date: "2019/06/18",
            hoursSlept: 7.8,
            sleepQuality: 1.5,
          },
          {
            userID: 1,
            date: "2019/06/19",
            hoursSlept: 8,
            sleepQuality: 1.3,
          },
          {
            userID: 1,
            date: "2019/06/20",
            hoursSlept: 5.1,
            sleepQuality: 3.7,
          },
          {
            userID: 1,
            date: "2019/06/21",
            hoursSlept: 5.1,
            sleepQuality: 3.7,
          },
          {
            userID: 1,
            date: "2019/06/22",
            hoursSlept: 5.1,
            sleepQuality: 3.7,
          },
        ],
      },
      userHydration: {
        userHydrationData: [
          {
            userID: 1,
            date: "2019/06/12",
            numOunces: 38,
          },
          {
            userID: 1,
            date: "2019/06/13",
            numOunces: 60,
          },
          {
            userID: 1,
            date: "2019/06/14",
            numOunces: 40,
          },
          {
            userID: 1,
            date: "2019/06/15",
            numOunces: 50,
          },
          {
            userID: 1,
            date: "2019/06/16",
            numOunces: 51,
          },
          {
            userID: 1,
            date: "2019/06/17",
            numOunces: 65,
          },
          {
            userID: 1,
            date: "2019/06/18",
            numOunces: 60,
          },
          {
            userID: 1,
            date: "2019/06/19",
            numOunces: 60,
          },
        ],
      },
    });
  });

  it("should return a hydration data for all data for one user", () => {

    expect(userRepo.filterHydrationData(1)).to.deep.equal(
      [({
          userID: 1,
          date: "2019/06/12",
          numOunces: 38,
        }),
        (userHydrationData2 = {
          userID: 1,
          date: "2019/06/13",
          numOunces: 60,
        }),
        (userHydrationData3 = {
          userID: 1,
          date: "2019/06/14",
          numOunces: 40,
        }),
        (userHydrationData4 = {
          userID: 1,
          date: "2019/06/15",
          numOunces: 50,
        }),
        (userHydrationData5 = {
          userID: 1,
          date: "2019/06/16",
          numOunces: 51,
        }),
        (userHydrationData6 = {
          userID: 1,
          date: "2019/06/17",
          numOunces: 65,
        }),
        (userHydrationData7 = {
          userID: 1,
          date: "2019/06/18",
          numOunces: 60,
        }),
        (userHydrationData8 = {
          userID: 1,
          date: "2019/06/19",
          numOunces: 60,
        })
      ],
    );
  });

  it("should return a sleep data for all data for one user", () => {
    expect(userRepo.filterSleepData(1)).to.deep.equal([
      (userSleep1 = {
        userID: 1,
        date: "2019/06/15",
        hoursSlept: 6.1,
        sleepQuality: 2.2,
      }),
      (userSleep2 = {
        userID: 1,
        date: "2019/06/16",
        hoursSlept: 10.5,
        sleepQuality: 3.8,
      }),
      (userSleep3 = {
        userID: 1,
        date: "2019/06/17",
        hoursSlept: 7,
        sleepQuality: 3,
      }),
      (userSleep4 = {
        userID: 1,
        date: "2019/06/18",
        hoursSlept: 7.8,
        sleepQuality: 1.5,
      }),
      (userSleep5 = {
        userID: 1,
        date: "2019/06/19",
        hoursSlept: 8,
        sleepQuality: 1.3,
      }),
      (userSleep6 = {
        userID: 1,
        date: "2019/06/20",
        hoursSlept: 5.1,
        sleepQuality: 3.7,
      }),
      (userSleep7 = {
        userID: 1,
        date: "2019/06/21",
        hoursSlept: 5.1,
        sleepQuality: 3.7,
      }),
      (userSleep8 = {
        userID: 1,
        date: "2019/06/22",
        hoursSlept: 5.1,
        sleepQuality: 3.7,
      }),
    ]);
  });

  it("should return activity data for all data for one user", () => {
    expect(userRepo.filterActivityData(1)).to.deep.equal([
      (userActivity1 = {
        userID: 1,
        date: "2019/06/12",
        numSteps: 3577,
        minutesActive: 70,
        flightsOfStairs: 16,
      }),
      (userActivity2 = {
        userID: 1,
        date: "2019/06/13",
        numSteps: 2500,
        minutesActive: 60,
        flightsOfStairs: 14,
      }),
      (userActivity3 = {
        userID: 1,
        date: "2019/06/14",
        numSteps: 4004,
        minutesActive: 200,
        flightsOfStairs: 12,
      }),
      (userActivity4 = {
        userID: 1,
        date: "2019/06/15",
        numSteps: 6900,
        minutesActive: 85,
        flightsOfStairs: 20,
      }),
      (userActivity5 = {
        userID: 1,
        date: "2019/06/16",
        numSteps: 4200,
        minutesActive: 69,
        flightsOfStairs: 15,
      }),
      (userActivity6 = {
        userID: 1,
        date: "2019/06/17",
        numSteps: 7070,
        minutesActive: 85,
        flightsOfStairs: 13,
      }),
      (userActivity7 = {
        userID: 1,
        date: "2019/06/18",
        numSteps: 6969,
        minutesActive: 69,
        flightsOfStairs: 17,
      }),
      (userActivity8 = {
        userID: 1,
        date: "2019/06/19",
        numSteps: 2030,
        minutesActive: 100,
        flightsOfStairs: 9,
      }),
    ]);
  });

  it("should return all sleepers with a sleepQuality over 3 for a given week", () => {
    expect(userRepo.findGoodSleepers('2019/06/15')).to.deep.equal([2]);
  });

  it("should return user(s) who slept the most number of hours for a given day", () => {
    expect(userRepo.findLongSleepers('2019/06/15')).to.deep.equal([2])
    expect(userRepo.findLongSleepers("2019/06/16")).to.deep.equal([1, 2]);
  })
})