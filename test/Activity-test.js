import { expect } from "chai";
import Activity from "../src/Activity";
import UserRepository from "../src/UserRepository";
import activityData from "../src/data/activityData";
import userData from "../src/data/users"

describe("Activity Repository", () => {
  let activity = new Activity(activityData);
  let userRepo = new UserRepository(userData)

  it('should be a instance of Activity', () => {
    expect(activity).to.be.an.instanceOf(Activity);
  });

//   it.skip('should do this' () => {
//     expect().to.();
//   });


});