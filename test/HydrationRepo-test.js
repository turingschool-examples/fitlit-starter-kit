const chai = require('chai');
const expect = chai.expect;

const HydrationRepo = require('../src/HydrationRepo');

describe('HydrationRepo', () => {
  let hydrationRepo;
  beforeEach(() => {
    const hydrationData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 5
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 5
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 10
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 15
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 20
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 25
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 30
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numOunces": 35
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numOunces": 40
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "numOunces": 45
      },
      {
        "userID": 42,
        "date": "2019/06/15",
        "numOunces": 48
      },
      {
        "userID": 43,
        "date": "2019/06/15",
        "numOunces": 47
      },
      {
        "userID": 44,
        "date": "2019/06/15",
        "numOunces": 44
      },
      {
        "userID": 45,
        "date": "2019/06/15",
        "numOunces": 24
      },
      {
        "userID": 46,
        "date": "2019/06/15",
        "numOunces": 89
      }
    ]
    hydrationRepo = new HydrationRepo(hydrationData);
  });

  it('should be a function', () => {
    expect(HydrationRepo).to.be.a('function');
  })

  it('should instantiate a class of Hydration', () => {
    expect(hydrationRepo).to.be.an.instanceof(HydrationRepo);
  })

  it('should calculate average all water ever imbibed by specific user', () => {
    expect(hydrationRepo.findUserAvgDailyHydration(1)).to.equal(23);
  })

  it('should return daily hyration stat by the day', () => {
    expect(hydrationRepo.findDailyHydration(1, '2019/06/15')).to.equal(5);
  })
  it('should return a full week\'s worth of hydration data from starting date onwards', () => {
    expect(hydrationRepo.findWeeklyHydration(1, '2019/06/23')).to.deep.equal([{
          "userID": 1,
          "date": "2019/06/17",
          "numOunces": 10
        },
        {
          "userID": 1,
          "date": "2019/06/18",
          "numOunces": 15
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "numOunces": 20
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "numOunces": 25
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "numOunces": 30
        },
        {
          "userID": 1,
          "date": "2019/06/22",
          "numOunces": 35
        },
        {
          "userID": 1,
          "date": "2019/06/23",
          "numOunces": 40
        }])
  })









})
