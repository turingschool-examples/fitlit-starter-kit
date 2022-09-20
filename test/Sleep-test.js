import { expect } from 'chai';
import Sleep from '../src/Sleep';
import sleepData from '../src/data/sample-sleepData';

describe('Sleep', () => {
  let sleep1;
  let sleep2;
  let sleep3;

  beforeEach(() => {
    sleep1 = new Sleep(1, sleepData);
    sleep2 = new Sleep(2, sleepData);
    sleep3 = new Sleep(3, sleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should return sleep data that corresponds with given user id', () => {
    expect(sleep3.sleepDataPerUser).to.be.an('array');
    expect(sleep3.sleepDataPerUser).to.deep.equal([
      {
        userID: 3,
        date: '2019/06/15',
        hoursSlept: 10.8,
        sleepQuality: 4.7,
      },
    ]);
  });

  it("should check that given date exists in the user's data set", () => {
    expect(sleep1.getSleepDataByGivenDay('2018/06/15', 'hoursSlept')).to.equal(
      'This date could not be found.'
    );
  });

  it('should return sleep data for a given day', () => {
    expect(sleep1.getSleepDataByGivenDay('2019/06/15', 'hoursSlept')).to.equal(
      6.1
    );
  });

  it("should give user's average number of hours slept per day", () => {
    expect(sleep1.getAvgSleepData('hoursSlept', true)).to.equal(8);
  });

  it('should give number of sleep quality for given day', () => {
    expect(
      sleep1.getSleepDataByGivenDay('2019/06/15', 'sleepQuality')
    ).to.equal(2.2);
  });

  it("should give user's average sleep quality per day over all time", () => {
    expect(sleep1.getAvgSleepData('sleepQuality', false)).to.equal(3);
  });

  it('should give overview of sleep over a week', () => {
    expect(sleep1.getDailySleepByWeek('2019/06/15')).to.deep.equal([
      { date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
      { date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
      { date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
      { date: '2019/06/18', hoursSlept: 10.4, sleepQuality: 3.1 },
      { date: '2019/06/19', hoursSlept: 10.7, sleepQuality: 1.2 },
      { date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 },
      { date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 },
    ]);
  });

  it('should give average sleep quality for all users', () => {
    expect(sleep1.getAvgSleepData('sleepQuality', false)).to.equal(3);
  });

  it('should check that given date exists', () => {
    expect(sleep1.getSleepDataByGivenDay('sleepQuality','2018/06/15')).to.equal('This date could not be found.');
  });

  it('should check each day of the week and filter non-consecutive entry', () => {
    expect(sleep2.getDailySleepByWeek('2020/01/16')).to.deep.equal([
      { date: '2020/01/16', hoursSlept: 9.1, sleepQuality: 2.6 },
      { date: '2020/01/17', hoursSlept: 7.3, sleepQuality: 2.3 },
      { date: '2020/01/18', hoursSlept: 5.3, sleepQuality: 1.3 },
      { date: '2020/01/19', hoursSlept: 6.6, sleepQuality: 4.6 },
      { date: '2020/01/20', hoursSlept: 6.4, sleepQuality: 1.8 },
    ]);
  });
});
