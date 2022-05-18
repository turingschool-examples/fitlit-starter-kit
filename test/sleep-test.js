import { expect } from 'chai';
import SleepRepository from '../src/sleep-repository';
import Sleep from '../src/Sleep';

describe('Sleep', () => {

let sleepData;
let sleepRepo;
let sleep;

beforeEach( () => {
  sleepData = [
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
  ];

    sleepRepo = new SleepRepository(sleepData);
    sleep = new Sleep(1, sleepRepo.getAllUserData(1));

  });
  it('should be a function', function () {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it('should hold all user occurrences', () => {
    expect(sleep.allUserInstances).to.deep.equal([
      { "userID": 1, "date": '2019/06/15', "hoursSlept": 6.1, "sleepQuality": 2.2 },
      { "userID": 1, "date": '2019/06/16', "hoursSlept": 4.1, "sleepQuality": 3.8 }
    ]);
  });

  it('should return the average hours slept per day when given a userID', () => {
    expect(sleep.avgSleepQuality).to.equal(5.1);
  });

  it('should return the average hours slept per day when given a userID', () => {
    expect(sleep.avgSleepQuality).to.equal(5.1);
  });

  it('should return the amount of hours slept for a specified day', () => {
    expect(sleep.returnHoursSlept("2019/06/15")).to.equal(6.1);
  });

  it('should return the quality of sleep for a specified day', () => {
    expect(sleep.returnSleepQuality("2019/06/15")).to.equal(2.2);
  });
  it('should return any object', () => {
    expect(sleep.returnObjectByDate("2019/06/15", "hoursSlept")).to.equal(6.1);
    expect(sleep.returnObjectByDate("2019/06/16", "sleepQuality")).to.equal(3.8);
  });

});
