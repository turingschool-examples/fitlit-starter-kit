import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let hydration;
  let userRepository;
  let users;

  beforeEach(() => {
    hydration = new Hydration(users)
    userRepository = new UserRepository(users)
    users = [
      {
      userID: 1,
      date: "2019/06/15",
      numOunces: 37
      },
      {
      userID: 1,
      date: "2019/06/17",
      numOunces: 96
      },
      {
      userID: 1,
      date: "2019/06/18",
      numOunces: 61
      },
      {
      userID: 1,
      date: "2019/06/19",
      numOunces: 91
      },
      {
      userID: 1,
      date: "2019/06/20",
      numOunces: 50
      },
      {
      userID: 1,
      date: "2019/06/21",
      numOunces: 50
      },
      {
      userID: 1,
      date: "2019/06/22",
      numOunces: 43
      },
      {
      userID: 1,
      date: "2019/06/23",
      numOunces: 39
      },
      {
      userID: 1,
      date: "2019/06/24",
      numOunces: 61
      },
      {
      userID: 1,
      date: "2019/06/25",
      numOunces: 51
      },
      {
      userID: 1,
      date: "2019/06/26",
      numOunces: 52
      },

      {
      userID: 2,
      date: "2019/06/15",
      numOunces: 75
      },
      {
      userID: 2,
      date: "2019/06/16",
      numOunces: 91
      },
      {
      userID: 2,
      date: "2019/06/17",
      numOunces: 96
      },
      {
      userID: 2,
      date: "2019/06/18",
      numOunces: 70
      },
      {
      userID: 2,
      date: "2019/06/19",
      numOunces: 76
      },
      {
      userID: 2,
      date: "2019/06/20",
      numOunces: 71
      },
      {
      userID: 2,
      date: "2019/06/21",
      numOunces: 27
      },
      {
      userID: 2,
      date: "2019/06/22",
      numOunces: 58
      },
      {
      userID: 2,
      date: "2019/06/23",
      numOunces: 44
      },
      {
      userID: 2,
      date: "2019/06/24",
      numOunces: 33
      },
    ]
  })

  it('should be a function', () => {

    expect(Hydration).to.be.a('function')
  });

  it.skip('should have an id', () => {

    expect(hydration.id).to.equal(1)
  });

  it.skip('should have a date', () => {

    expect(hydration.date).to.equal(/*mm/dd/yy*/)
  });

  it.skip('should keep track of number of ounces
    water consumed', () => {

    expect(hydration.numOunces).to.equal()
  });

  it.skip('should return ounces water consumed
    on a specific day by user', () => {


    hydration.calculateOuncesWaterConsumedSpecificDay(1)
    hydration.calculateOuncesWaterConsumedSpecificDay(2)

    expect(hydration.numOunces).to.equal(/*ounces consumed by id 1*/)
    expect(hydration.numOunces).to.equal(/*ounces consumed by id 2*/)
  });

  it.skip('should average the ounces of water consumed
    forever by a user', () => {

    hydration.averageOuncesWaterConsumedForever(1)
    hydration.averageOuncesWaterConsumedForever(2)

    expect(hydration.numOunces).to.equal()
    expect(hydration.numOunces).to.equal()
  });

  it.skip('should return a list containing the ounces
    water consumed each day over a seven day period by a
    user', () => {

    hydration.calculateOuncesWaterConsumedWeek(1)
    hydration.calculateOuncesWaterConsumedWeek(1)

    expect(hydration.numOunces).to.equal()
    expect(hydration.numOunces).to.equal()
  });
});
