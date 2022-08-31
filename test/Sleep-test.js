import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/user';

describe.only('Sleep', () => {
  let currentUser;
  let userSleep;

  beforeEach(() => {
    currentUser = new User({id: 1, name: 'Luisa Hane', address: '15195 Nakia Tunnel, Erdmanport VA 19901-1697', email: 'Diana.Hayes1@hotmail.com', strideLength: 4.3, dailyStepGoal: 10000, "friends": [16, 4,8]});
    userSleep = new Sleep(currentUser.id,[{userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 }, {userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7}, {userID: 3, date: '2019/06/15', hoursSlept: 10.8, sleepQuality: 4.7},{userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8}]);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should return sleep data that corresponds with given user id', () => {
    expect(userSleep.sleepDataPerUser).to.be.an('array');
    expect(userSleep.sleepDataPerUser).to.deep.equal([{userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2}, {userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8}]);
  });
  
  it('should give number of hours slept for given day', () => {
    expect(userSleep.getSleepDataByGivenDay('2019/06/15', 'hoursSlept')).to.equal(6.1);
  });

  it('should give average number of hours slept per day', () => {
    expect(userSleep.getAvgSleepData('hoursSlept', userSleep.sleepDataPerUser)).to.equal(5.1);
  });

  it('should give number of sleep quality for given day', () => {
    expect(userSleep.getSleepDataByGivenDay('2019/06/15', 'sleepQuality')).to.equal(2.2);
  });

  it('should give average sleep quality per day over all time', () => {
    expect(userSleep.getAvgSleepData('sleepQuality', userSleep.sleepDataPerUser)).to.equal(3);
  });

  it('should give overview of hours slept over a week', () => {
    expect(userSleep.getDailySleepByWeek('2019/06/15','2019/06/16', 'hoursSlept')).to.deep.equal([6.1, 4.1]);
  });

  it('should give overview of sleep quality over a week', () => {
    expect(userSleep.getDailySleepByWeek('2019/06/15','2019/06/16', 'sleepQuality')).to.deep.equal([2.2, 3.8]);
  });

  it('should give average sleep quality for all users', () => {
    expect(userSleep.getAvgSleepData('sleepQuality', userSleep.sleepData)).to.equal(3.9);
  });
})
