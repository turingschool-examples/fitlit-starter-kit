import { expect } from 'chai';
import Activity from '../src/Activity';


describe('Activity', () => {
    let userActivityData, singleUserActivity;

    beforeEach(() => {
        userActivityData = [{
            userID: 1,
            date: "2019/06/15",
            numSteps: 3577,
            minutesActive: 140,
            flightsOfStairs: 16
            },
            {
            userID: 1,
            date: "2019/06/16",
            numSteps: 6637,
            minutesActive: 175,
            flightsOfStairs: 36
            },
            {
            userID: 1,
            date: "2019/06/17",
            numSteps: 14329,
            minutesActive: 168,
            flightsOfStairs: 18
            }]

        singleUserActivity = new Activity(userActivityData);
    
    })
    it('should be a function',  () => {
        expect(Activity).to.be.a('function')
    });

    it('should instantiate Sleep',() => {
        expect(singleUserActivity).to.be.an.instanceOf(Activity);
    });

    it('should be able to identify a user by their ID', () => {
        expect(singleUserActivity.findUserDataID(1)).to.deep.equal(userActivityData);
    });

    it('should return a user\s number of steps', () => {
        expect(userActivityData[0].numSteps).to.equal(3577)
    });

    it('should return a user\s minutes active', () => {
        expect(userActivityData[0].minutesActive).to.equal(140) 
    });

    it('should return a user\s flights of stairs climbed', () => {
        expect(userActivityData[0].flightsOfStairs).to.equal(16)
    });

    it('should return the miles a user has walked based on their number of steps') {

    };

    it('should return how many minutes were they active for a given day') {

    };

    it('should return the average minutes active for a given week') {

    };

    it('should return the miles a user has walked based on their number of steps') {

    };
    
    it('should return true if a user achieved their daily step goal') {

    };

    it('should return false if a user did not achieve their daily step goal') {

    };

    it('should return all the days where they exceeded their step goal') {

    };

    it('should return their all-time stair climbing record') {

    };

    it('should return the average stairs climbed for a specified date') {

    };

    it('should return the average steps taken for a specific date') {

    };

    it('should return the average minutes active for a specific date') {

    };
})

