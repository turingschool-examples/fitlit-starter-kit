const expect = require('chai').expect;
const Hydration = require('../src/Hydration');
// const userData = require('../subData.js/usersSubData');
const userHydrationData = require('../subData.js/hydrationSubData')

describe.only('Hydration', () => {
  let hydration;
  let userhydrationData;

  beforeEach(() => {
    hydration = new Hydration(userHydrationData, 5);
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
    expect(hydration.avgWaterIntake(5)).to.equal(69)
  });

  it('should return how many ounces were consumed for a given date', () => {
    expect(hydration.dailyIntake('2019/06/24', 5)).to.equal(30);
  })
    
})