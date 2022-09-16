import { expect } from 'chai';
import Activity from '../src/Activity';
import activityData from '../src/data/sample-activityData';
import User from '../src/User'

describe('Activity', () => {
  let user1;
  let user2;
  let user3;
  let activity1;
  let activity2;
  let activity3;


  beforeEach( () => {
    user1 = new User({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, friends: [16, 4, 8]});
    user2 = new User({id: 2, name: 'Jarvis Considine', address: '30086 Kathryn Port, Ciceroland NE 07273', email: 'Dimitri.Bechtelar11@gmail.com', strideLength: 4.5, dailyStepGoal: 5000, friends: [9, 18, 24, 19]});
    user3 = new User({id: 3, name: 'Herminia Witting', address: '85823 Bosco Fork, East Oscarstad MI 85126-5660', email: 'Elwin.Tromp@yahoo.com', strideLength: 4.4, dailyStepGoal: 5000, friends: [19, 11, 42, 33]});

    activity1 = new Activity(user3, activityData);
    activity2 = new Activity(user2, activityData);
    activity3 = new Activity(user1, activityData);
  })

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity1).to.be.an.instanceOf(Activity);
    expect(activity2).to.be.an.instanceOf(Activity);
    expect(activity3).to.be.an.instanceOf(Activity);
  });

  it('should take in a user id', () => {
    expect(activity1.currentUser.id).to.equal(3);
    expect(activity2.currentUser.id).to.equal(2);
    expect(activity3.currentUser.id).to.equal(1);
  });

  it('should return the activity data for a given user', () => {
    expect(activity1.usersActivity[0]).to.deep.equal(
      {
        userID: 3,
        date: '2019/06/15',
        numSteps: 7402,
        minutesActive: 116,
        flightsOfStairs: 33
      }
    );
    expect(activity2.usersActivity[3]).to.deep.equal(
      {
        userID: 2,
        date: '2019/06/18',
        numSteps: 4662,
        minutesActive: 181,
        flightsOfStairs: 31
      }
    );
    expect(activity3.usersActivity[6]).to.deep.equal(
      {
        userID: 1,
        date: '2019/06/21',
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6
      }
    );
  });

  it('should return the activity data for all user\'s', () => {
    expect(activity1.activityData).to.deep.equal(activityData);
    expect(activity2.activityData).to.deep.equal(activityData);
    expect(activity3.activityData).to.deep.equal(activityData);

    expect(activity1.activityData.length).to.equal(28);
    expect(activity2.activityData.length).to.equal(28);
    expect(activity3.activityData.length).to.equal(28);
  });

  it('should return a user\'s minutes active for a given date', () => {
    expect(activity1.getMinutesActiveByDate('2019/06/15')).to.equal(116);
    expect(activity2.getMinutesActiveByDate('2019/06/21')).to.equal(174);
    expect(activity3.getMinutesActiveByDate('2019/06/18')).to.equal(165);
  });

  it('should return a user\'s average minutes active for a given week', () => {
    expect(activity1.getAvgMinutesActivePerWeek('2019/06/15')).to.equal(165);
    expect(activity2.getAvgMinutesActivePerWeek('2019/06/15')).to.equal(156);
    expect(activity3.getAvgMinutesActivePerWeek('2019/06/15')).to.equal(171);
  });

  it('should show a user if they reached their daily step goal for a given day', () => {
    expect(activity1.getStepGoalByDay('2019/06/15')).to.equal('Your steps for today are 7402. You have exceeded your step goal of 5000 steps for today!!');

    expect(activity2.getStepGoalByDay('2019/06/16')).to.equal('Your steps for today are 4112. You have not yet reached your step goal of 5000 steps for today.');

    expect(activity3.getStepGoalByDay('2019/06/17')).to.equal('Your steps for today are 10000. You have reached your step goal of 10000 steps for today!');
  });

  it('should return all the days that a user exceeded their step goal', () => {
    expect(activity1.getDaysThatExceedStepGoal()).to.deep.equal([
      '{date: 2019/06/15, steps: 7402}',
      '{date: 2019/06/16, steps: 12304}',
      '{date: 2019/06/19, steps: 10961}',
      '{date: 2019/06/20, steps: 5369}',
      '{date: 2019/06/21, steps: 7498}'
    ]);

    expect(activity2.getDaysThatExceedStepGoal()).to.deep.equal([
      '{date: 2019/06/17, steps: 13750}',
      '{date: 2019/06/19, steps: 9858}',
      '{date: 2019/06/20, steps: 8153}',
      '{date: 2019/06/21, steps: 10225}'
    ]);

    expect(activity3.getDaysThatExceedStepGoal()).to.deep.equal([ 
      '{date: 2019/06/20, steps: 14478}' 
    ]);
  });

  it('should return a user\'s highest stairs climbed record', () => {
    expect(activity1.getHighestFlightsClimbed()).to.deep.equal('{date: 2019/06/20, flights: 46}');
    expect(activity2.getHighestFlightsClimbed()).to.deep.equal('{date: 2019/06/19, flights: 44}');
    expect(activity3.getHighestFlightsClimbed()).to.deep.equal('{date: 2019/06/16, flights: 36}');
  });

  it('should return the averages for all user\'s', () => {
    expect(activity1.getAllUsersAverages('numSteps', '2019/06/15')).to.equal(3612);
    expect(activity2.getAllUsersAverages('minutesActive', '2019/06/16')).to.equal(51);
    expect(activity3.getAllUsersAverages('flightsOfStairs', '2019/06/17')).to.equal(13);
  });
});