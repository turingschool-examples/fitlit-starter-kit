import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let hydration;
  let userData;
  let user1;
  let user2;

  beforeEach(() => {
    userData = [
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

    hydration = new Hydration(userData)

    user1 = new User({
          id: 1,
          name: "Luisa Hane",
          address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
          email: "Diana.Hayes1@hotmail.com",
          strideLength: 4.3,
          dailyStepGoal: 10000,
          friends: [
          16,
          4,
          8
          ]
        })

    user2 = new User({
          id: 2,
          name: "Jarvis Considine",
          address: "30086 Kathryn Port, Ciceroland NE 07273",
          email: "Dimitri.Bechtelar11@gmail.com",
          strideLength: 4.5,
          dailyStepGoal: 5000,
          friends: [
          9,
          18,
          24,
          19
          ]
      })

  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  });

  it('should be an instance of hydration', () => {

    expect(hydration).to.be.an.instanceof(Hydration)
  });

  it('should return ounces water consumed on a specific day by user', () => {
      expect(hydration.findWaterConsumedByDate(1, "2019/06/26")).to.equal(52)

  });

  it.skip('should average the ounces water consumed forever by a user', () => {

    hydration.averageOuncesWaterConsumedForever(1)
    hydration.averageOuncesWaterConsumedForever(2)

    expect(hydration.userData.numOunces).to.equal()
    expect(hydration.userData.numOunces).to.equal()
  });

  it.skip('should return a list containing the ounces water consumed each day over a seven day period by a user', () => {

    hydration.calculateOuncesWaterConsumedWeek(1)
    hydration.calculateOuncesWaterConsumedWeek(2)

    expect(hydration.userData.numOunces).to.deep.equal()
    expect(hydration.userData.numOunces).to.deep.equal()
  });
})
