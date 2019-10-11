const expect = require('chai').expect;
const Hydration = require('../src/Hydration');
const userHydrationData = require('../subData.js/hydrationSubData')

describe('Hydration', () => {
  let hydration;

  beforeEach(() => {
    hydration = new Hydration(userHydrationData);
  });
  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should return matching user with ID', () => {
    const user5 = [
      {
        userID: 5,
        date: '2019/06/15',
        numOunces: 42
      },
      {
        userID: 5,
        date: '2019/06/16',
        numOunces: 79
      },
      {
        userID: 5,
        date: '2019/06/17',
        numOunces: 99
      },
      {
        userID: 5,
        date: '2019/06/18',
        numOunces: 39
      },
      {
        userID: 5,
        date: '2019/06/19',
        numOunces: 69
      },
      {
        userID: 5,
        date: '2019/06/20',
        numOunces: 89
      },
      {
        userID: 5,
        date: '2019/06/21',
        numOunces: 73
      },
      {
        userID: 5,
        date: '2019/06/22',
        numOunces: 97
      },
      {
        userID: 5,
        date: '2019/06/23',
        numOunces: 73
      },
      {
        userID: 5,
        date: '2019/06/24',
        numOunces: 30
      }
    ]
    expect(hydration.findUser(5)).to.eql(user5)
  });

  it('should find the average of water consumed', () => {
    expect(hydration.calculateAvgWaterIntake(5)).to.equal(69)
  });

  it('should return how many ounces were consumed for a given date', () => {
    expect(hydration.calculateDailyIntake('2019/06/24', 5)).to.equal(30);
  });

  it('should return 7 days', () => {
    const week = 
    [{
      userID: 5,
      date: '2019/06/18',
      numOunces: 39
    }, {
      userID: 5,
      date: '2019/06/19',
      numOunces: 69
    }, {
      userID: 5,
      date: '2019/06/20',
      numOunces: 89
    }, {
      userID: 5,
      date: '2019/06/21',
      numOunces: 73
    }, {
      userID: 5,
      date: '2019/06/22',
      numOunces: 97
    }, {
      userID: 5,
      date: '2019/06/23',
      numOunces: 73
    }, {
      userID: 5,
      date: '2019/06/24',
      numOunces: 30
    }]
    expect(hydration.findAWeek(5)).to.eql(week)
  });

  it('should return number of ounces for each day', () => {
    const weeklyOz = [ 39, 69, 89, 73, 97, 73, 30]
    expect(hydration.getWeeklyOunces(5)).to.eql(weeklyOz);
  });
    
})