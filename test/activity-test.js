const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/activityUser')
const activitySampleData = require('../test/activity-sample-data.js')
const userSampleData = require('../test/sample-data.js')
const UserRepository = require('../src/user-repository.js')

describe('Activity', function() {
    it('should be a function', function() {
        expect(Activity).to.be.a('function');
    })
    it('should calculate the miles a user has walked for a day', function() {
        const userRepo = new UserRepository(userSampleData) 
        const user = userRepo.returnUserData(1);
        // console.log("user", user)
        const activity = new Activity(activitySampleData)
        expect(activity.getMilesWalked(1, '2019/06/16')).to.equal(5.41);
    })
    it('should return a users active minutes for a specific date', function() {
        const userRepo = new UserRepository(userSampleData) 
        const user = userRepo.returnUserData(1);
        const activity = new Activity(activitySampleData)
        expect(activity.getMinutesActive(1, '2019/06/16', 'minutesActive')).to.equal(175)
    })
    it('should return a users average minutes active for a week', function() {
        const userRepo = new UserRepository(userSampleData) 
        const user = userRepo.returnUserData(1);
        const activity = new Activity(activitySampleData)
        expect(activity.getAverageActivityForWeek(1, '2019/06/25', 'minutesActive')).to.equal(156.71)
    })
    it('should tell whether a user has met their step goal for a certain day', function() {
        const userRepo = new UserRepository(userSampleData) 
        const user = userRepo.returnUserData(1);
        const activity = new Activity(activitySampleData)
        expect(activity.returnStepGoalMet(1, '2019/06/25')).to.equal(false)
    })
    it('should give the days the user has exceeded their step goal', function() {
        const userRepo = new UserRepository(userSampleData) 
        const user = userRepo.returnUserData(1);
        const activity = new Activity(activitySampleData)
        expect(activity.getDaysStepGoalExceeded(1)).to.deep.equal(['2019/06/17', '2019/06/20', '2019/06/22', '2019/06/23'])
    })

    it('should return when the user climbed the most stairs', function() {
        const userRepo = new UserRepository(userSampleData) 
        const user = userRepo.returnUserData(1);
        const activity = new Activity(activitySampleData)
        expect(activity.getStairClimbingRecord(1)).to.deep.equal(['2019/06/16'])
    })

    it('should return the steps a user has walked for today', function () {
        const userRepo = new UserRepository(userSampleData)
        const user = userRepo.returnUserData(1);
        const activity = new Activity(activitySampleData)
        expect(activity.getStepsToday(1, '2019/06/25')).to.equal(3093)
    })

    it('should return when a user has an increasing step trend for 3 days', function() {
        const userRepo = new UserRepository(userSampleData)
        const user = userRepo.returnUserData(1);
        const activity = new Activity(activitySampleData)
        expect(activity.getIncreasingSteps(1)).to.deep.equal(['2019/06/17', '2019/06/20', '2019/06/23'])
    })

    it('should return week activity', function () {
        const userRepo = new UserRepository(userSampleData)
        const user = userRepo.returnUserData(1);
        const activity = new Activity(activitySampleData)
        expect(activity.getActivityForWeek(1, '2019/06/25', 'numSteps'))

    

    })

})