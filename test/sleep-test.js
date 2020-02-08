const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const UsersRepository = require('../src/UsersRepository');


describe('Sleep', function() {
  let sleepData;
  let usersRepository;
  let sleep;

    beforeEach(function() {
      sleepData = [{
          "userID": 1,
          "date": "2019/06/15",
          "hoursSlept": 6.1,
          "sleepQuality": 2.2
        },
        {
          "userID": 2,
          "date": "2019/06/15",
          "hoursSlept": 7,
          "sleepQuality": 4.7
        },
        {
          "userID": 1,
          "date": "2019/06/16",
          "hoursSlept": 4.1,
          "sleepQuality": 3.8
        },
        {
          "userID": 2,
          "date": "2019/06/16",
          "hoursSlept": 7.5,
          "sleepQuality": 3.8
        }
      ]
      usersRepository = new UsersRepository(1);
      sleep = new Sleep(usersRepository);

    })

  it('should be a function', function() {
    // const sleep = new Sleep();

    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    // const sleep = new Sleep();

    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should return average number of hours slept per day for a user for all time', function() {
    expect(sleep.calculateAverageSleepTimeOverall(sleepData)).to.equal(5.1);
  });
  it('should return average sleep quality per day for a user for all time', function() {
    expect(sleep.calculateAverageSleepQualityOverall(sleepData)).to.equal(3);
  });
  it('should return hours slept for a selected date', function() {
    expect(sleep.findSleepTimeByDate(sleepData, '2019/06/16')).to.equal(4.1);
  });
  it('should return sleep quality for a selected date', function() {
    expect(sleep.findSleepQualityByDate(sleepData, '2019/06/16')).to.equal(3.8);
  });
  it('should return daily sleep hours for a week', function() {
    const sleepData1 = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 2.6
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 5.7,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.4,
        "sleepQuality": 3.1
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 10.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 10.7,
        "sleepQuality": 1.2
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 9.6,
        "sleepQuality": 2.5
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 9.3,
        "sleepQuality": 1.2
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 10.1,
        "sleepQuality": 2.4
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 7.8,
        "sleepQuality": 4.2
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 4.3,
        "sleepQuality": 4.8
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 7,
        "sleepQuality": 3
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "hoursSlept": 4.8,
        "sleepQuality": 3.3
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "hoursSlept": 7.8,
        "sleepQuality": 1.5
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "hoursSlept": 8,
        "sleepQuality": 4.9
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "hoursSlept": 8,
        "sleepQuality": 1.3
      },
      {
        "userID": 2,
        "date": "2019/06/24",
        "hoursSlept": 10.8,
        "sleepQuality": 1
      }]
      const userDateRange = ["2019/06/16","2019/06/17","2019/06/18","2019/06/19","2019/06/20","2019/06/21","2019/06/22"];
    expect(sleep.findAverageSleepHourByWeek(sleepData1, userDateRange)).to.deep.equal([{date: "2019/06/16", sleepHours: 4.1}, {date: "2019/06/17", sleepHours: 8}, {date: "2019/06/18", sleepHours: 10.4}, {date: "2019/06/19", sleepHours: 10.7}, {date: "2019/06/20", sleepHours: 9.3}, {date: "2019/06/21", sleepHours: 7.8}, {date: "2019/06/22", sleepHours: 7}]);
  });
  it('should return daily sleep quality for a week', function() {
    const sleepData1 = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 2.6
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 5.7,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.4,
        "sleepQuality": 3.1
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 10.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 10.7,
        "sleepQuality": 1.2
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 9.6,
        "sleepQuality": 2.5
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 9.3,
        "sleepQuality": 1.2
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 10.1,
        "sleepQuality": 2.4
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 7.8,
        "sleepQuality": 4.2
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 4.3,
        "sleepQuality": 4.8
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 7,
        "sleepQuality": 3
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "hoursSlept": 4.8,
        "sleepQuality": 3.3
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "hoursSlept": 7.8,
        "sleepQuality": 1.5
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "hoursSlept": 8,
        "sleepQuality": 4.9
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "hoursSlept": 8,
        "sleepQuality": 1.3
      },
      {
        "userID": 2,
        "date": "2019/06/24",
        "hoursSlept": 10.8,
        "sleepQuality": 1
      }]
      const userDateRange = ["2019/06/16","2019/06/17","2019/06/18","2019/06/19","2019/06/20","2019/06/21","2019/06/22"];
    expect(sleep.findAverageSleepQualityByWeek(sleepData1, userDateRange)).to.deep.equal([{date: "2019/06/16", sleepQuality: 3.8}, {date: "2019/06/17", sleepQuality: 2.6}, {date: "2019/06/18", sleepQuality: 3.1}, {date: "2019/06/19", sleepQuality: 1.2}, {date: "2019/06/20", sleepQuality: 1.2}, {date: "2019/06/21", sleepQuality: 4.2}, {date: "2019/06/22", sleepQuality: 3}]);
  })

});
