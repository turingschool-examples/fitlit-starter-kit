const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const mockSleep = require('../mock-data/mock-sleep');

let sleep;


describe('Sleep', () => {

  beforeEach( () => {
    sleep = new Sleep(mockSleep, 1);
    sleep.findCurrentUserData();
  });

  it('should return true', () => {
    expect(true).to.equal(true);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should have a parameter to take in sleep data', () => {
    expect(sleep.allSleepData).to.eql(mockSleep);
  });

  it('should have a parameter to take in current User id', () => {
    expect(sleep.currentUserId).to.eql(1);
  });

  describe('findCurrentUserData', () => {
    it('should be able to find the current user data', () => {
      expect(sleep.findCurrentUserData()).to.eql([
        {
          "userID": 1,
          "date": "2019/06/15",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 1,
          "date": "2019/06/16",
          "hoursSlept": 4.1,
          "sleepQuality": 3.8
        },
        {
          "userID": 1,
          "date": "2019/06/17",
          "hoursSlept": 8,
          "sleepQuality": 2.6
        },
        {
          "userID": 1,
          "date": "2019/06/18",
          "hoursSlept": 10.4,
          "sleepQuality": 3.1
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "hoursSlept": 10.7,
          "sleepQuality": 1.2
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "hoursSlept": 9.3,
          "sleepQuality": 1.2
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "hoursSlept": 7.8,
          "sleepQuality": 4.2
        },
        {
          "userID": 1,
          "date": "2019/06/22",
          "hoursSlept": 7,
          "sleepQuality": 3
        },
        {
          "userID": 1,
          "date": "2019/06/23",
          "hoursSlept": 7.8,
          "sleepQuality": 1.5
        },
        {
          "userID": 1,
          "date": "2019/06/24",
          "hoursSlept": 8,
          "sleepQuality": 1.3
        },
      ]);
    });
  });
    

  describe('findUserAverageHoursSleptEachDayById', () => {
    it.only('should be able to find the average hours slept each day by id', () => {
      expect(sleep.findUserAverageHoursSleptEachDayById()).to.equal(7.92);
    });
  });

  // describe('fetchUserHoursSleptByDate', () => {
  //     it('should be able to find the number of hours a user slept based on date', () => {
  //     expect;
  //     });
  // });

  // describe('fetchSleepQualityByDate', () => {
  //     it('should be able to find the quality of sleep based on date', () => {
  //     expect;
  //     });
  // });

  // describe('fetchHoursSleptEachDayOverWeek', () => {
  //     it('should be able to find the the hours of sleep each day over a given week', () => {
  //     expect;
  //     });
  // });

  // describe('fetchQualityOfSleepOverWeek', () => {
  //     it('should be able to find the quality of sleep over a given week', () => {
  //     expect;
  //     });
  // });

  // describe('fetchAverageQualityOfSleepAllUsers', () => {
  //     it('should be able to find the average quality of sleep for all users', () => {
  //     expect;
  //     });
  // });

  // describe('fetchQualityOfSleepBasedOnDate', () => {
  //     it('should be able to find the quality of sleep based on date', () => {
  //     expect;
  //     });
  // });

  // describe('fetchAllUsersOverThreeSleepQualityForWeek', () => {
  //     it('should be able to find all user/s who average a sleep quality greater than 3 for a given week', () => {
  //     expect;
  //     });
  // });

  // describe('fetchUsersSleptMostHoursBasedOnDate', () => {
  //      it('should be able to find the user/s who slept the most number of hours based on a date', () => {
  //     expect;
  //      });
  // });

});