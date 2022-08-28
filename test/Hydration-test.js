import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';
import { hydrationData, singleUserData1, singleUserData2, singleUserData3 } from '../src/data/hydrationData';

describe('Hydration', () => {
  let user1, user2, user3, hydration1, hydration2, hydration3;

  beforeEach(() => {

    user1 = new User(singleUserData1);
    user2 = new User(singleUserData2);
    user3 = new user(singleUserData3);

    hydration1 = new Hydration(hydrationData1);
    hydration2 = new Hydration(hydrationData2);
    hydration3 = new Hydration(hydrationData3);

  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  });

  it.skip('should be an instance of hydration', () => {
    expect(hydration1).to.be.an.instanceof(Hydration);
  });

  it.skip('should be able to identify a user by their ID', () => {
    expect(hydration.userID).to.equal(1);
  });

  it.skip('should be able to identify how many fluid ounces a specific user consumed per day(by date)', () => {
    expect();
  });

  it.skip('should be able to identfy how many fluid ounces a specific user consumed over the course of a week', () => {
    expect();
  });

  it.skip('should be able to identify how many fluid ounces a specific user consumed perday for all time', () => {
    expect();
  })
})
