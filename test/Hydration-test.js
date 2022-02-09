import { expect } from 'chai';
import UserRepository from '../src/js/UserRepository';
import userTestData from '../src/data/user-test-data';
import hydrationTestData from '../src/data/hydration-test-data';
import User from '../src/js/User';
import Hydration from '../src/js/Hydration';

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
    expect(user1.hydration).to.be.an.instanceof(Hydration);
  });

  it('should hold an array of hydration info', () => {
    expect(user1.hydration.days).to.be.an('array');
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

  it('should be able to populate hydrationInfo with different ID', () => {
    expect(user2.hydration.days.length).to.eql(2);
    expect(user2.hydration.days[0]).to.eql(
      {
        userID: 2,
        date: "2019/06/15",
        numOunces: 75
      }
    );
  });

  it('should be able to calculate average hydration for all time', () => {
    expect(user1.hydration.getAverage()).to.eql(62); //Math.floor
    expect(user2.hydration.getAverage()).to.eql(83);
  });

  it('should be able to return the amount of water drank on a given day', () => {
    expect(user1.hydration.getDailyIntake("2019/06/16")).to.eql(69);
  });

  it('should be able to calculate the total fluid intake for the past 7 days', () => {
    expect(user1.hydration.getWeeklyIntake()).to.eql([
      {
        userID: 1,
        date: "2019/06/16",
        numOunces: 69
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
      }
    ]);
  });

});
