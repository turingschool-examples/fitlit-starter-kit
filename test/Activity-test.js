const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const User = require('../src/User');

const mockActivityData = require('../mock/mockActivityData');
const mockCurrentUserActivityData = require('../mock/mockCurrentUserActivity.js');


let user;
let activity

describe('Activity', () => {

    beforeEach( () => {
        activity = new Activity(mockActivityData,2,mockCurrentUserActivityData);
    });

    it('should return true', () => {
        expect(true).to.equal(true);
    });

    it('should be a function', () => {
        expect(Activity).to.be.a('function');
    });

    it('should have a userId', () => {
        expect(activity.userID).to.equal(2);
    });

    it('should find all Activity data for a specific user', () => {
        activity.findCurrentUserActivityData();
        expect(activity.currentUserActivityData.length).to.equal(7);
    });
    
    it('should find for a specific day the return for miles a user has walked', () => {
        activity.findCurrentUserActivityData();
        expect(activity.calculateMilesUserWalkedOnSpecificDate("2019/06/15")).to.equal(3.66);
    });

    it('should find for a specific day the activity level for a certain user', () => {
        activity.findCurrentUserActivityData();
        expect(activity.returnMinutesActiveByUserOnSpecificDate("2019/06/15")).to.equal(138);
    });

    it('should find for a specific day the activity level for a certain user', () => {
        activity.findCurrentUserActivityData();
        expect(activity.calculateAvgMinutesActiveForUserOnSpecificWeek()).to.equal(156);
    });
});