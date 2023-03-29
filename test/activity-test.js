import {
  expect
} from 'chai';
import Activity from '../src/classes/Activity';
import activityTestData from './activity-test-data';
import userTestData from './user-test-data';
import User from '../src/classes/User';


describe("Activity", () => {
  let activity;

  beforeEach(() => {
    activity = new Activity(activityTestData);
  });
  
  it("should be a function", () => {
    expect(Activity).to.be.a("function");
  });

  it("should be an instance of activity", () => {
    expect(activity).to.be.an.instanceOf(Activity);
  })

  it("should have a property that holds the activity data object", () => {
    activity = new Activity(activityTestData[0]);
    expect(activity.data).to.deep.equal({
      userID: 1,
      date: "2023/03/24",
      numSteps: 7362,
      minutesActive: 261,
      flightsOfStairs: 26
    }, );
  });

  it("should calculate the miles walked given a date", () => {
   const user = new User(userTestData[0]);
   expect(activity.calculateMilesWalked("2023/03/24", user)).to.equal(6);
  })
});