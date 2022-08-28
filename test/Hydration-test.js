import { expect } from 'chai';
import User from '../src/User';
import Hydration from '../src/Hydration';
import { hydrationData, singleUserData} from '../src/data/hydrationData';

describe('Hydration', () => {
  let user1, user2, user3, hydration1, hydration2, hydration3;

  beforeEach(() => {

    user1 = new User(singleUserData);
    user2 = new User(singleUserData);
    hydration1 = new Hydration(singleUserData);
    hydration2 = new Hydration(singleUserData);


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
