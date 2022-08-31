import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';
import { users } from '../src/data/users';

describe('Hydration', () => {
  let userData;
  let userHydrationData;
  let hydrationData;

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
    expect(userHydrationData.findUserDataID(hydrationData,1)).to.equal(1);
  });

  it('should be able to identify how many fluid ounces a specific user consumed per day(by date)', () => {
    expect(hydrationData[0].numOunces).to.equal(41);
  });

  it.skip('should be able to identfy how many fluid ounces a specific user consumed over the course of a week', () => {
    expect();
  });

  it.skip('should be able to identify how many fluid ounces a specific user consumed perday for all time', () => {
    expect();
  })
})
