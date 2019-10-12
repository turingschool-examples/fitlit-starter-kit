const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/activity.js')
const ActivityRepository = require('../src/activityRepository.js')
const data = require('../data/activity.js')
const data2 = require('../data/users.js');
const UserRepository = require('../src/userRepository.js');
const User = require('../src/user.js')

describe('Activity', function() {
  it('Should be a function', function() {
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    let activity = new Activity(activityRepository.currentUser)
    expect(activity.data.length).to.equal(100);
  })
  it('Should have a method that returns miles walked for a given day', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.milesWalked("2019/09/15")).to.equal('5.5')
  });

  it('should have a method that returns minutes active for a given day', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.minutesActiveGivenDay("2019/09/15")).to.equal(174)
  });

  it('should have a method that returns average minutes active for a given week', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.avgMinActiveWeek("2019/09/15")).to.equal('175')
  });

  it('should have a method that returns average minutes active for a given week', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.avgMinActiveWeek("2019/09/15")).to.equal('175')
  });

  it('should have a method that returns a users minutes active for a given week', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.minActiveWeek("2019/09/15")).to.eql([
      174, 166, 144,
       92, 270, 165,
      212
    ])
  });

  it('should have a method that returns whether the users daily step goal has been met', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.stepGoalReached("2019/09/15")).to.equal("You\'ve walked: 9289 steps, Step Goal Reached!")
  });

  it('should have a method that the users steps each day over a week', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.stepsWeek("2019/09/15")).to.eql([9289,  4503, 12457, 13546, 10889,  5259, 7144])
  });

  it('should have a method that returns all the days the users exceed their daily step goal', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.findDaysGoalExceeded()).to.eql([
      '2019/06/16', '2019/06/17', '2019/06/18', '2019/06/19',
      '2019/06/21', '2019/06/23', '2019/06/25', '2019/06/26',
      '2019/06/27', '2019/06/28', '2019/06/29', '2019/06/30',
      '2019/07/02', '2019/07/03', '2019/07/04', '2019/07/06',
      '2019/07/07', '2019/07/08', '2019/07/10', '2019/07/11',
      '2019/07/12', '2019/07/13', '2019/07/15', '2019/07/16',
      '2019/07/17', '2019/07/18', '2019/07/19', '2019/07/21',
      '2019/07/22', '2019/07/23', '2019/07/24', '2019/07/25',
      '2019/07/26', '2019/07/27', '2019/07/29', '2019/07/30',
      '2019/07/31', '2019/08/01', '2019/08/02', '2019/08/03',
      '2019/08/04', '2019/08/05', '2019/08/06', '2019/08/07',
      '2019/08/08', '2019/08/09', '2019/08/10', '2019/08/11',
      '2019/08/12', '2019/08/13', '2019/08/14', '2019/08/15',
      '2019/08/16', '2019/08/17', '2019/08/18', '2019/08/19',
      '2019/08/23', '2019/08/24', '2019/08/25', '2019/08/26',
      '2019/08/27', '2019/08/29', '2019/08/30', '2019/08/31',
      '2019/09/01', '2019/09/02', '2019/09/04', '2019/09/05',
      '2019/09/06', '2019/09/07', '2019/09/08', '2019/09/09',
      '2019/09/10', '2019/09/11', '2019/09/12', '2019/09/13',
      '2019/09/14', '2019/09/15', '2019/09/16', '2019/09/17',
      '2019/09/18', '2019/09/19', '2019/09/20', '2019/09/21'
    ])
  });

  it('should have a method that returns the users all time stairs', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.allTimeStairs()).to.equal(50)
  });

  it('should have a method that returns the users flights of stairs for a week', function() {
    const userRepository = new UserRepository(data2)
    userRepository.findUser(4);
    const user = new User (userRepository.currentUser)
    const activityRepository = new ActivityRepository(data)
    activityRepository.findUserId(4);
    const activity = new Activity(activityRepository.currentUser, user)
    expect(activity.stairsWeek('2019/09/15')).to.eql([
      19, 46, 30, 40,
      44, 15,  9
    ])
  });
});