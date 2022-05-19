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
      {
        "userID":1,
        "date":"2019/06/16",
        "hoursSlept":4.1,
        "sleepQuality":3.8
      },
      {
        "userID":2,
        "date":"2019/06/16",
        "hoursSlept":7.5,
        "sleepQuality":3.8
      },
      {
        "userID":3,
      "date":"2019/06/16",
      "hoursSlept":10.7,
      "sleepQuality":3.4
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
  it('should return all user data entries when given id', function () {
    expect(sleepRepo.getAllUserData(1)).to.deep.equal([{
        "userID":1,
        "date":"2019/06/15",
        "hoursSlept":6.1,
        "sleepQuality":2.2
      }, {
        "userID":1,
        "date":"2019/06/16",
        "hoursSlept":4.1,
        "sleepQuality":3.8
      }]);
  });
  it('should calculate average hours slept among all users', function () {
    expect(sleepRepo.calculateAvgHoursSlept()).to.equal(7.7);
  });
});
