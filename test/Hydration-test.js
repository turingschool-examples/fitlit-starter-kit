import { expect } from 'chai';
import UserRepository from '../src/js/UserRepository';
import userTestData from '../src/data/user-test-data';
import hydrationTestData from '../src/data/user-test-data';
import User from '../src/js/User';

describe('Hydration', () => {
  let userRepository;
  let user1;
  let user2;
  let hydration;

  beforeEach(() => {
    userRepository = new UserRepository(userTestData)
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
    user1.hydration = new Hydration(hydrationTestData, user1.id);
    user2.hydration = new Hydration(hydrationTestData, user2.id);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should hold an array of hydration info', () => {
    expect(hydration.days).to.be.an('array');
  });

  it('should be able to populate hydrationInfo array based on ID', () => {
    expect(user1.hydration.days.length).to.eql(8);
    expect(user1.hydration.days[0]).to.eql(
      {
        userID: 1,
        date: "2019/06/15",
        numOunces: 37
      },
    );
  });

  it('should be able to calculate average hydration for all time', () => {
    expect(user1.hydration.getAverage()).to.eql(53);
  });

  it('should be able to return the amount of water drank on a given day', () => {
    expect(user1.hydration.getDailyIntake("2019/06/16")).to.eql(69);
  });

  it('should be able to calculate the total fluid intake for the past 7 days', () => {
    expect();
  });

});
