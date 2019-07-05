const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const activitySub = require('../data/activitySub');

describe("Activity", function() {
    it("should be a function", function() {
      expect(Activity).to.be.a("function");
    });

    it("should be an instance of Activity", function() {
      const activity = new Activity();
      expect(activity).to.be.an.instanceof(Activity);
    });

    it("should return the miles a user has walked", function() {
        const activity = new Activity(1);
        expect(activity.returnMilesWalked("2019/06/15")).to.equal(2.91);
      });

    it("should return the minutes active on a given day", function() {
        const activity = new Activity(1);
        expect(activity.returnMinutesActive("2019/06/15")).to.equal(140);
    });

    it("should return the active minutes for a given week", function() {
        const activity = new Activity(1);
        expect(activity.returnMinutesActiveForWeek()).to.equal(125.57);
    });

    it("should let the user know if they reached their step goal on a specific day", function() {
        const activity = new Activity(1);
        expect(activity.metStepGoalForDay("2019/06/15")).to.equal(false);
    });

    it("return all days the user exceeded their step goal", function() {
        const activity = new Activity(1);
        expect(activity.daysExceededStepGoal()).to.eql(["2019/06/16", "2019/06/17"]);
    });

    it("return their all-time stair climbing record", function() {
        const activity = new Activity(1);
        expect(activity.allTimeClimbRecord()).to.eql(34);
    });
});