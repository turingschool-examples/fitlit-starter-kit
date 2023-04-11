import chai from "chai";
const expect = chai.expect;

import User from "../src/user";
import UserHydration from "../src/userHydration"
import {hydrationLogs, testUserInfo} from './hydration-test-data'

describe('userHydration', () => {
  let testUser;
  beforeEach('data creation', () => {
    

    testUser = new UserHydration(testUserInfo.id, hydrationLogs)
  });

  it('should be a function', function () {
    expect(UserHydration).to.be.a('function');
  });

  it('should be an instance of UserHydration', function () {
    expect(testUser).to.be.an.instanceof(UserHydration);
  });

  it('should store a users id', function () {
    expect(testUser.userId).to.equal(1);
  });

  it('should find the most recent day of hydration logs', function () {
    expect(testUser.findMostRecentDay()).to.equal('2023/04/02');
  });


  it('should calculate the all time average daily ounces', () => {
    const average = testUser.calculateAllTimeAvgOunces();

    expect(average).to.equal(52);
  });

  it('should find how many ounces were recorded for a specific day', () => {
    const specificDayOz = testUser.findSingleDayOunces('2023/03/25');

    expect(specificDayOz).to.equal(50);
  });

  it('should find how many fluid ounces of water were recorded over the past 7 days', () => {
    const weekOfOz = testUser.findOuncesLastSevenDays();

    expect(weekOfOz).to.deep.equal([63, 97, 20, 76, 51, 88, 22])

  });
})