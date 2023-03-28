import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationTestData from '../src/data/hydration-test-data';
import User from '../src/User';

describe('Hydration', () => {
  let hydrationData = hydrationTestData.hydrationTestData;
  let hydration;
  let testUser = new User({
    "id": 1,
    "name": "Trystan Gorczany",
    "address": "9484 Lucas Flat, West Kittymouth WA 67504",
    "email": "Taurean_Pollich31@gmail.com",
    "strideLength": 4,
    "dailyStepGoal": 7000,
    "friends": [
      5,
      43,
      46,
      11
    ]
  });

  beforeEach(() => {
    hydration = new Hydration(hydrationData);
  });

  it.skip('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it.skip('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it.skip('should have a user id, number of ounces, and date', () => {
    const hydrationData = {
      "userID": 1,
      "date": "2023/03/02",
      "numOunces": 28
    };
    expect(hydrationData.userID).to.equal(1);
    expect(hydrationData.date).to.equal("2023/03/02")
    expect(hydrationData.numOunces).to.equal(28);
  });

  it.skip('should store hydration data', () => {
    expect(hydration.data).to.deep.equal(hydrationData);
  });

  it('should be have a userID that relates to the id from the User class', () => {
    expect(hydration.userID).to.equal(testUser.id);
  });

  it('should return undefined if the userID does not retrieve a matching user id', () => {
    expect(testUser.id).to.equal(undefined);
  });

  it.skip('should calculate the user\'s average fluid ounces consumed per day for all time', () => {
    expect(hydration.findAvgDailyHydration()).to.equal(475);
  });

  it.skip('should return the a specfic days water consumption', () => {
    expect(hydration.findSpecificDay('2023/03/02')).to.equal(28);
  });

  it.skip('should return the undefined if nothing logged that specfic day', () => {
    expect(hydration.findSpecificDay('2023/03/03')).to.equal(undefined);
  });

  it.skip('should return the user\'s total amount of water for 7 consecutive days', () => {
    expect(hydration.findWeeklyHydration('2023/03/02')).to.deep.equal(
      [28, 95, 74, 47, 86, 74]
    );
  });

  it.skip('should return message if user\'s doesnt have 7 consecutive days logged', () => {
    expect(hydration.calculateWeeklyHydration('2023/03/02')).to.equal('You have not yet reached 7 days!');
  });
});

