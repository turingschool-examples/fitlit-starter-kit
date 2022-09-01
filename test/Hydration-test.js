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
  ]

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

  it.skip('should be able to identify how many fluid ounces a specific user consumed per day(by date)', () => {
    expect(hydrationData[0].numOunces).to.equal(41);
  });

  it.skip('should be able to identfy how many fluid ounces a specific user consumed over the course of a week', () => {
  const sevenDayHydration = [ 
    {userID: 1,
      date : "2020/01/14",
        numOunces: 41},
    {
      userID: 1,
      date: "2020/01/12",
      numOunces: 40
    },
    {
      userID: 1,
      date: "2020/01/10",
      numOunces: 76
    },
    {
      userID: 1,
      date: "2020/01/09",
      numOunces: 78
    },
    {
      userID: 1,
      date: "2020/01/07",
      numOunces: 73
    },
    {
      userID: 1,
      date: "2020/01/06",
      numOunces: 62
    },
    {
      userID: 1,
      date: "2020/01/05",
      numOunces: 42
    },  
  ]
    const weeklyOunceData = new Hydration(sevenDayHydration)
    expect(weeklyOunceData.weeklyOunces(sevenDayHydration)).to.equal();
  });

  it.skip('should be able to identify how many fluid ounces a specific user consumed perday for all time', () => {
    expect(weeklyOunceData.weeklyOunces()).to.equal(58.85);
  })
})
