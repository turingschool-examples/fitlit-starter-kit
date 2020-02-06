const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');


describe('Sleep', function() {

  let sleepData, sleep;

  beforeEach(() => {
    sleepData = [{
        "userID": 1,
        "date": "2019/06/14",
        "hoursSlept": 3,
        "sleepQuality": 2.6
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 3,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 3,
        "sleepQuality": 4.7
      },
      {
        "userID": 4,
        "date": "2019/06/15",
        "hoursSlept": 5.4,
        "sleepQuality": 3
      }
    ];
    sleep = new Sleep(sleepData);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should calculate average num of hours slepts per day', function() {
    expect(sleep.calcAvgSleepHrTotalDays(1)).to.equal(3);
  });

  it('should calculate the average sleep quality per day', function() {
    expect(sleep.calcAvgSleepQualityTotalDays(1)).to.equal(4);
  });

  it('should return hours of sleep of day', function() {
    expect(sleep.getDailySleep(1, "2019/06/15")).to.equal(3);
  });

  it('should return qualty of sleep of day', function() {
    expect(sleep.getDailySleepQuality(1, "2019/06/15")).to.equal(4.7);
  });
  describe('Sleep', function() {
    beforeEach(() => {
      sleepData = [{
          "userID": 1,
          "date": "2019/06/11",
          "hoursSlept": 3,
          "sleepQuality": 4.7
        },
        {
          "userID": 1,
          "date": "2019/06/12",
          "hoursSlept": 3,
          "sleepQuality": 4.7
        },
        {
          "userID": 1,
          "date": "2019/06/13",
          "hoursSlept": 3,
          "sleepQuality": 4.7
        }, {
          "userID": 1,
          "date": "2019/06/14",
          "hoursSlept": 3,
          "sleepQuality": 4.7
        }, {
          "userID": 1,
          "date": "2019/06/15",
          "hoursSlept": 3,
          "sleepQuality": 4.7
        }, {
          "userID": 1,
          "date": "2019/06/16",
          "hoursSlept": 3,
          "sleepQuality": 4.7
        }, {
          "userID": 1,
          "date": "2019/06/17",
          "hoursSlept": 3,
          "sleepQuality": 4.7
        },
        {
          "userID": 4,
          "date": "2019/06/15",
          "hoursSlept": 5.4,
          "sleepQuality": 3
        }
      ];
      sleep = new Sleep(sleepData);
    });
    it('should be able to return an array of the previous 7 days sleep', function() {
      expect(sleep.getPrevDaysSleepHrs(1, "2019/06/17")).to.deep.equal([3, 3, 3, 3, 3, 3, 3])
    });

    it('should be able to return an array of the previous 7 days sleepQuality', function() {
      expect(sleep.getPrevDaysSleepQuality(1, "2019/06/17")).to.deep.equal([4.7, 4.7, 4.7, 4.7, 4.7, 4.7, 4.7])
    });

    it('should be able to calculate the average sleep across all users', function() {
      expect(sleep.calcAverageSleepQuality()).to.equal(4.4875);
    });

    it('should be able to find all the good sleepers last week', function() {
      expect(sleep.findAllGreatSleepers("2019/06/17")).to.deep.equal(
        [{
            "userID": 1,
            "date": "2019/06/11",
            "hoursSlept": 3,
            "sleepQuality": 4.7
          },
          {
            "userID": 1,
            "date": "2019/06/12",
            "hoursSlept": 3,
            "sleepQuality": 4.7
          },
          {
            "userID": 1,
            "date": "2019/06/13",
            "hoursSlept": 3,
            "sleepQuality": 4.7
          }, {
            "userID": 1,
            "date": "2019/06/14",
            "hoursSlept": 3,
            "sleepQuality": 4.7
          }, {
            "userID": 1,
            "date": "2019/06/15",
            "hoursSlept": 3,
            "sleepQuality": 4.7
          }, {
            "userID": 1,
            "date": "2019/06/16",
            "hoursSlept": 3,
            "sleepQuality": 4.7
          }, {
            "userID": 1,
            "date": "2019/06/17",
            "hoursSlept": 3,
            "sleepQuality": 4.7
          }
        ]
      );
    });


    it('should be able to find the longestSleeper',function(){
      expect(sleep.findLongestSleepers("2019/06/15")).to.deep.equal([{
              "userID": 4,
              "date": "2019/06/15",
              "hoursSlept": 5.4,
              "sleepQuality": 3
            }]);
    })
  });

});
