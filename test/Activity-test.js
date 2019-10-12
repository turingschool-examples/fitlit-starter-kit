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

    it('should find if a user has reached their Daily Step Goal for a given date', () => {
        activity.findCurrentUserActivityData();
        expect(activity.hasUserStepGoalBeenReachedOnSpecificDate("2019/06/15")).to.equal(false);
        expect(activity.hasUserStepGoalBeenReachedOnSpecificDate("2019/06/17")).to.equal(true);
    });

    it('should return all the days a user has exceeded their daily stepgoal', () => {
        activity.findCurrentUserActivityData();
        expect(activity.filterAllDatesUserCompletedStepGoal()).to.eql(["2019/06/17","2019/06/19","2019/06/20","2019/06/21"]);
    });

    it('should find a users all time stair climbing record output', () => {
        activity.findCurrentUserActivityData();
        expect(activity.findMostStairsClimbedForUserAllTime()).to.equal(44);
    });

    it('should find based on date the average number of stairs all users climbed', () => {
        activity.findCurrentUserActivityData();
        expect(activity.calculateAvgStairsClimbedOnSpecificDateAllUsers("2019/06/15")).to.equal(19.7);
    });

    it('should find based on date the average number of steps taken for all users', () => {
        activity.findCurrentUserActivityData();
        expect(activity.calculateAvgStepsTakenOnSpecificDateAllUsers("2019/06/15")).to.equal(5091);
    });


    it('should find based on date the average number of minutes active for all users', () => {
        activity.findCurrentUserActivityData();
        expect(activity.calculateAvgMinutesActiveOnSpecificDateAllUsers("2019/06/15")).to.equal(131);
    });
});