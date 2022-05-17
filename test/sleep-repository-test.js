import { expect } from 'chai';
import SleepRepository from '../src/sleep-repository';
// import Sleep from '../src/Sleep';

describe('Sleep Repository', () => {

  let sleepData
  let sleepRepo

  beforeEach( () => {
    let sleepData = [
      {
        "userID":1,
        "date":"2019/06/15",
        "hoursSlept":6.1,
        "sleepQuality":2.2
      },
      {
        "userID":2,
        "date":"2019/06/15",
        "hoursSlept":7,
        "sleepQuality":4.7
      },
      {
        "userID":3,
        "date":"2019/06/15",
        "hoursSlept":10.8,
        "sleepQuality":4.7
      },
    ]

    sleepRepo = new SleepRepository(sleepData);

  });

  it('should be a function', function () {
    expect(SleepRepository).to.be.a('function');
  });
  it('should instantiate a sleep repository', function () {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepository)
  });
  it('should return user data when given id', function () {
    expect(sleepRepo.getUserData(1)).to.deep.equal(sleepRepo.dataObjects[0]);
  });
  it('should calculate average hours slept among all users', function () {
    expect(sleepRepo.calculateAvgHoursSlept()).to.equal(8);
  });
});
