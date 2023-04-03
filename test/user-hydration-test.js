import chai from "chai";
const expect = chai.expect;

import User from "../src/user";
import UserHydration from "../src/userHydration"

describe('userHydration', () => {
  let testUser;
  let hydrationLogs;
  let testUserInfo;
  ///fix ---- add non user 1
  beforeEach('data creation', () => {
    hydrationLogs = {
      hydrationData: [
        { "userID": 1, "date": "2023/03/24", "numOunces": 28 },
        { "userID": 7, "date": "2023/03/24", "numOunces": 107 },
        { "userID": 1, "date": "2023/03/25", "numOunces": 50 },
        { "userID": 1, "date": "2023/03/26", "numOunces": 21 },
        { "userID": 14, "date": "2023/03/26", "numOunces": 48 },
        { "userID": 1, "date": "2023/03/27", "numOunces": 63 },
        { "userID": 1, "date": "2023/03/28", "numOunces": 97 },
        { "userID": 1, "date": "2023/03/29", "numOunces": 20 },
        { "userID": 1, "date": "2023/03/30", "numOunces": 76 },
        { "userID": 27, "date": "2023/03/30", "numOunces": 88 },
        { "userID": 1, "date": "2023/03/31", "numOunces": 51 },
        { "userID": 1, "date": "2023/04/01", "numOunces": 88 },
        { "userID": 1, "date": "2023/04/02", "numOunces": 22 }]
    };

    testUserInfo = {
      "id": 1,
      "name": "Trystan Gorczany",
      "address": "9484 Lucas Flat, West Kittymouth WA 67504",
      "email": "Taurean_Pollich31@gmail.com",
      "strideLength": 4,
      "dailyStepGoal": 7000,
      "friends": [5, 43, 46, 11]
    };

    testUser = new UserHydration(1, hydrationLogs)
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

  it('should store a users activity logs', function () {
    expect(testUser.hydrationInfo).to.deep.equal([
      { "userID": 1, "date": "2023/03/24", "numOunces": 28 },
      { "userID": 1, "date": "2023/03/25", "numOunces": 50 },
      { "userID": 1, "date": "2023/03/26", "numOunces": 21 },
      { "userID": 1, "date": "2023/03/27", "numOunces": 63 },
      { "userID": 1, "date": "2023/03/28", "numOunces": 97 },
      { "userID": 1, "date": "2023/03/29", "numOunces": 20 },
      { "userID": 1, "date": "2023/03/30", "numOunces": 76 },
      { "userID": 1, "date": "2023/03/31", "numOunces": 51 },
      { "userID": 1, "date": "2023/04/01", "numOunces": 88 },
      { "userID": 1, "date": "2023/04/02", "numOunces": 22 }]
    );
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