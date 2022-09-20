import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';
import { users } from '../src/data/users';

describe('Hydration', () => {
  let userData;
  let userHydrationData;
  let hydrationData;
  let user1Hydro;

  beforeEach(() => {

    hydrationData = [
      {
      "userID": 1,
      "date": "2020/01/14",
      "numOunces": 41
      },
      {
      "userID": 2,
      "date": "2020/01/14",
      "numOunces": 88
      },
      {
        "userID": 1,
        "date": "2020/01/15",
        "numOunces": 46
      },
      {
        "userID": 1,
        "date": "2020/01/16",
        "numOunces": 42
      }
    ];
     user1Hydro = [
      { "userID": 1,
        "date": "2020/01/14",
        "numOunces": 41
    },
      {
        "userID": 1,
        "date": "2020/01/15",
        "numOunces": 46
      },
      {
        "userID": 1,
        "date": "2020/01/16",
        "numOunces": 42
      }
  ];

    userHydrationData = new Hydration(hydrationData);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  });

  it('should be an instance of hydration', () => {
    expect(userHydrationData).to.be.an.instanceof(Hydration);
  });

  it('should be able to identify a user by their ID', () => {
    expect(userHydrationData.findUserDataID(1)).to.deep.equal(user1Hydro);
  });

  it('should be able to identify how many fluid ounces a specific user consumed per day(by date)', () => {
    expect(userHydrationData.usersDailyOunces(1)).to.equal(42);
  });

  it('should be able to identfy how many fluid ounces a specific user consumed over the course of a week', () => {
  const sevenDayHydration = [
    {userID: 1,
      date : "2020/01/14",
        numOunces: 41},
    {
      userID: 1,
      date: "2020/01/15",
      numOunces: 40
    },
    {
      userID: 1,
      date: "2020/01/16",
      numOunces: 76
    },
    {
      userID: 1,
      date: "2020/01/17",
      numOunces: 78
    },
    {
      userID: 1,
      date: "2020/01/18",
      numOunces: 73
    },
    {
      userID: 1,
      date: "2020/01/19",
      numOunces: 62
    },
    {
      userID: 1,
      date: "2020/01/20",
      numOunces: 39
    },
    {
      userID: 1,
      date: "2020/01/21",
      numOunces: 41
    },
    {
      userID: 1,
      date: "2020/01/22",
      numOunces: 36
    },
  ]
    const weeklyOunceData = new Hydration(sevenDayHydration)
    expect(weeklyOunceData.getOuncesPerWeek(1, "2020/01/22")).to.equal('57.9');
  });

  it('should be able to identify how many fluid ounces a specific user consumed perday for all time', () => {
    const sevenDayHydration = [
      {
        userID: 1,
        date: "2020/01/14",
        numOunces: 41
      },
      {
        userID: 1,
        date: "2020/01/15",
        numOunces: 40
      },
      {
        userID: 1,
        date: "2020/01/16",
        numOunces: 76
      },
      {
        userID: 1,
        date: "2020/01/17",
        numOunces: 78
      },
      {
        userID: 1,
        date: "2020/01/18",
        numOunces: 73
      },
      {
        userID: 1,
        date: "2020/01/19",
        numOunces: 62
      },
      {
        userID: 1,
        date: "2020/01/20",
        numOunces: 39
      },
      {
        userID: 1,
        date: "2020/01/21",
        numOunces: 41
      },
      {
        userID: 1,
        date: "2020/01/22",
        numOunces: 36
      },
    ]
    const weeklyOunceData = new Hydration(sevenDayHydration)
    expect(weeklyOunceData.getLifeTimeOunces()).to.deep.equal('54.0');
  });
});
