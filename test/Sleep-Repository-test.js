import { expect } from 'chai';
import { sleepTestData } from '../src/data/sleep-test-data';
import SleepRepo from '../src/SleepRepository';
import Sleep from '../src/Sleep';

describe('Sleep Repo', () => {
  let sleepRepo, sleepData;

  beforeEach(() => {
    sleepData = sleepTestData.map(object => new Sleep(object));
    sleepRepo = new SleepRepo(sleepData);
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should be an instance of sleep', () => {
    expect(sleepData[0]).to.be.an('object');
    expect(sleepData[0]).to.be.an.instanceof(Sleep);
  });

  it('should hold all sleep objects', () => {
    expect(sleepRepo.sleepData[0]).to.be.an('object');
    expect(sleepRepo.sleepData[0]).to.deep.equal({"userID":1,"date":"2019/06/15","hoursSlept":6.1,"sleepQuality":2.2});
    expect(sleepRepo.sleepData[2].userID).to.equal(3);
  });

  it('should be able to find stats for a specific user', () => {
    let userSleepStats = sleepRepo.getSleepById(5);

    expect(userSleepStats).to.be.an('array');
    expect(userSleepStats[0]).to.deep.equal({
      userID: 5,
      date: '2019/06/15',
      hoursSlept: 4.1,
      sleepQuality: 3.6
    });
  })

  // it('should be able to find average ounces consumed per day for any user', () => {
  //   let avgOunces = hydrationRepo.calculateAvgOuncesPerDay(5);
  //
  //   expect(avgOunces).to.be.a('number');
  //   expect(avgOunces).to.equal(66);
  // });

});
