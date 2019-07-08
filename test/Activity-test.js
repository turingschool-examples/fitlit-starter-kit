const chai = require("chai");
const expect = chai.expect;

// var userRepo = require('../src/UserRepo');
const Activity = require('../src/Activity');

describe('activity', () => {
  	let activity;
  	let user;
  	let userRepo;

	beforeEach(() => {
			activity = new Activity();
			user = new User(1); //is user doing soemthing?
			userRepo = new UserRepo();
        });
        
        it.skip('should be a function', () => {
			expect(Activity).to.be.a('function');
		});

		it.skip('should be an instance of Activity', () => {
			expect(activity).to.be.a.instanceOf(Activity);
        });

        it.skip('should find the user\'s activity data', () => {
        	activity.findActivityData(1)
			expect(activity.specificUserActivityData.length).to.equal(12);
        });

        it.skip('should find the user\'s identity data', () => {
        	activity.findUserData(1)
			expect(activity.specificUserIdentityData.length).to.equal(1);
        });

        it.skip('should find the user\'s active minutes for a specified date', () => {
			expect(activity.findActiveMinutesForDay(1, "2019/06/23")).to.equal(218);
        });

        it.skip('should find the user\'s active minutes for a specified week', () => {
			expect(activity.findActiveMinutesForWeek(1, "2019/06/23")).to.equal(174);
        });

        it.skip('should let a user know when they have achieved their step goal', () => {
			expect(activity.compareNumStepsToStepGoal(1, "2019/06/23")).to.equal('Great job at meeting your Daily Step Goal!');
        });

        it.skip('should let a user know when they have not achieved their step goal', () => {
			expect(activity.compareNumStepsToStepGoal(1, "2019/06/15")).to.equal('Keep twerking!');
        });

         it.skip('should let a user know all days they have achieved their step goal', () => {
			expect(activity.daysExceedStepGoal(1).length).to.equal(4);
        });

         it.skip('should return all time stair record ', () => {
			expect(activity.allTimeStairRecord(1)).to.equal(36);
        });
        
    });

