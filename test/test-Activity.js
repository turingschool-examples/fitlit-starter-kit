const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/ActivityRepository');
const Activity = require('../src/Activity');
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const sampleActivity = require('./sampleActivity');
const sampleData = require('./sampleData');
const sampleDate = '2019/06/19';

var userRepo, user, activeRepo, activePerson;
beforeEach(() => {
  userRepo = new UserRepository(sampleData);
  user = new User(userRepo.getUserData(5))
  activeRepo = new ActivityRepository(sampleActivity);
  activePerson = new Activity(activeRepo.getUserData(5), user);
});

describe('Activity', () => {


  it('should calculate miles for a user on a specific date based on stride', () => {
    expect(activePerson.getMiles(sampleDate, 'numSteps')).to.equal(5.23)
  }) 

  it('should return the minutes active for a specific day', () => {
    expect(activePerson.getStatsFromDay(sampleDate, 'minutesActive')).to.equal(191)
  })

  it('should return the average active minutes for a specific week', () => {
    expect(activePerson.getWeeklyAvg(sampleDate, 'minutesActive')).to.equal(108)
  })

  it('should show whether the user reached their step goal for the day', () => {
    expect(activePerson.checkStepGoal(sampleDate)).to.equal(`"Way to go! You reached your setp goal of 8000 steps!" - Coach Scott`)
    expect(activePerson.checkStepGoal('2019/06/20')).to.equal(`"You can do it, you're 3240 steps away from your goal!" - Coach Matt`)
  })

  it('should return days where the user exceeded their step goal', () => {
    expect(activePerson.findDaysOverStepGoal()).to.eql([
      {
        "date": "Sat Jun 15",
        "steps": 11374
      },
      {
        "date": "Sun Jun 16",
        "steps": 9350
      },
      {
        "date": "Mon Jun 17",
        "steps": 13120
      },
      {
        "date": "Wed Jun 19",
        "steps": 8914
      },
      {
        "date": "Sat Jun 22",
        "steps": 10643
      },
      {
        "date": "Wed Jun 26",
        "steps": 11076
      },
      {
        "date": "Thu Jun 27",
        "steps": 10039
      }
    ])
  })

  it('should all time stairs climbing record', () => {
    expect(activePerson.everest()).to.eql({
      userID: 5,
      date: 1561615200000,
      numSteps: 10039,
      minutesActive: 122,
      flightsOfStairs: 49
    })
  })

  it('should return the days where the user increased their step count for 3 days or more', () => {
    let user2 = new User(userRepo.getUserData(4));
    let activePerson2 = new Activity(activeRepo.getUserData(4), user2);
    expect(console.log(activePerson2.returnIncreasedStepDays(sampleDate))).to.equal(5)
  })
})