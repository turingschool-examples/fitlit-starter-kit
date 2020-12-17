const chai = require('chai');
const expect = chai.expect;

const UserRepo = require('../src/UserRepo');
const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', () => {
  let userDataset, userRepo, dataset, activityRepo;

  beforeEach(() => {
    userDataset = [
      {
        "id": 11,
        "name": "Brian Forbes",
        "address": "123 Blah St, Denver CO, 66666",
        "email": "stuffandthings@gmail.com",
        "strideLength": 2.4,
        "dailyStepGoal": 10000,
        "friends": [
          22,
          33,
          44
        ]
      },
      {
        "id": 22,
        "name": "Eric Campbell",
        "address": "123 SomeOther St, Denver CO, 66666",
        "email": "mainlyetcetera@gmail.com",
        "strideLength": 2.3,
        "dailyStepGoal": 5,
        "friends": [
          11,
          33
        ]
      },
      {
        "id": 33,
        "name": "David Whitaker",
        "address": "124 Random Lane, Denver CO, 66666",
        "email": "damwhitmaybeidontknow@gmail.com",
        "strideLength": 2.6,
        "dailyStepGoal": 10000,
        "friends": [
          11,
          44
        ]
      },
      {
        "id": 44,
        "name": "Travis Rollins",
        "address": "234 Very Random Street, Denver CO, 66666",
        "email": "laskdjfaslkdj@gmail.com",
        "strideLength": 2.1,
        "dailyStepGoal": 10000,
        "friends": [
          11,
          33
        ]
      }
    ]

    userRepo = new UserRepo(userDataset);

    dataset = [
      {
        "date": "2019/08/28"
      },     
      {
        "date": "2019/08/29"
      },     
      {
        "date": "2019/08/30"
      },     
      {
        "date": "2019/08/31"
      },     
      {
        "date": "2019/09/01"
      },     
      {
        "date": "2019/09/02"
      },     
      {
        "date": "2019/09/03"
      },  
      {
        "date": "2019/09/04"
      },
      {
        "date": "2019/09/05"
      },
      {
        "date": "2019/09/06"
      },   
      {
        "userID": 11,
        "date": "2019/09/14",
        "numSteps": 14541,
        "minutesActive": 193,
        "flightsOfStairs": 10
      },      
      {
        "userID": 22,
        "date": "2019/09/14",
        "numSteps": 14022,
        "minutesActive": 177,
        "flightsOfStairs": 5
      },      
      {
        "userID": 33,
        "date": "2019/09/14",
        "numSteps": 5286,
        "minutesActive": 250,
        "flightsOfStairs": 29
      },      
      {
        "userID": 44,
        "date": "2019/09/14",
        "numSteps": 11369,
        "minutesActive": 211,
        "flightsOfStairs": 49
      },      
      {
        "userID": 11,
        "date": "2019/09/15",
        "numSteps": 2074,
        "minutesActive": 264,
        "flightsOfStairs": 44
      },      
      {
        "userID": 22,
        "date": "2019/09/15",
        "numSteps": 6085,
        "minutesActive": 228,
        "flightsOfStairs": 44
      },      
      {
        "userID": 33,
        "date": "2019/09/15",
        "numSteps": 2752,
        "minutesActive": 273,
        "flightsOfStairs": 44
      },      
      {
        "userID": 44,
        "date": "2019/09/15",
        "numSteps": 13367,
        "minutesActive": 169,
        "flightsOfStairs": 0
      },      
      {
        "userID": 11,
        "date": "2019/09/16",
        "numSteps": 12109,
        "minutesActive": 219,
        "flightsOfStairs": 13
      },      
      {
        "userID": 22,
        "date": "2019/09/16",
        "numSteps": 11988,
        "minutesActive": 248,
        "flightsOfStairs": 18
      },      
      {
        "userID": 33,
        "date": "2019/09/16",
        "numSteps": 4435,
        "minutesActive": 198,
        "flightsOfStairs": 28
      },      
      {
        "userID": 44,
        "date": "2019/09/16",
        "numSteps": 2495,
        "minutesActive": 38,
        "flightsOfStairs": 25
      },      
      {
        "userID": 11,
        "date": "2019/09/17",
        "numSteps": 3484,
        "minutesActive": 104,
        "flightsOfStairs": 15
      },      
      {
        "userID": 22,
        "date": "2019/09/17",
        "numSteps": 2882,
        "minutesActive": 227,
        "flightsOfStairs": 36
      },      
      {
        "userID": 33,
        "date": "2019/09/17",
        "numSteps": 6891,
        "minutesActive": 146,
        "flightsOfStairs": 6
      },      
      {
        "userID": 44,
        "date": "2019/09/17",
        "numSteps": 7701,
        "minutesActive": 41,
        "flightsOfStairs": 44
      },      
      {
        "userID": 11,
        "date": "2019/09/18",
        "numSteps": 2879,
        "minutesActive": 278,
        "flightsOfStairs": 34
      },      
      {
        "userID": 22,
        "date": "2019/09/18",
        "numSteps": 4288,
        "minutesActive": 94,
        "flightsOfStairs": 16
      },      
      {
        "userID": 33,
        "date": "2019/09/18",
        "numSteps": 7279,
        "minutesActive": 225,
        "flightsOfStairs": 45
      },      
      {
        "userID": 44,
        "date": "2019/09/18",
        "numSteps": 3696,
        "minutesActive": 40,
        "flightsOfStairs": 21
      },      
      {
        "userID": 11,
        "date": "2019/09/19",
        "numSteps": 14038,
        "minutesActive": 253,
        "flightsOfStairs": 18
      },      
      {
        "userID": 22,
        "date": "2019/09/19",
        "numSteps": 3950,
        "minutesActive": 261,
        "flightsOfStairs": 32
      },      
      {
        "userID": 33,
        "date": "2019/09/19",
        "numSteps": 12902,
        "minutesActive": 70,
        "flightsOfStairs": 5
      },      
      {
        "userID": 44,
        "date": "2019/09/19",
        "numSteps": 12209,
        "minutesActive": 217,
        "flightsOfStairs": 36
      },      
      {
        "userID": 11,
        "date": "2019/09/20",
        "numSteps": 8294,
        "minutesActive": 193,
        "flightsOfStairs": 29
      },      
      {
        "userID": 22,
        "date": "2019/09/20",
        "numSteps": 6332,
        "minutesActive": 117,
        "flightsOfStairs": 34
      },      
      {
        "userID": 33,
        "date": "2019/09/20",
        "numSteps": 6641,
        "minutesActive": 232,
        "flightsOfStairs": 19
      },      
      {
        "userID": 44,
        "date": "2019/09/20",
        "numSteps": 12646,
        "minutesActive": 170,
        "flightsOfStairs": 18
      },      
      {
        "userID": 11,
        "date": "2019/09/21",
        "numSteps": 11656,
        "minutesActive": 76,
        "flightsOfStairs": 17
      },    
      {
        "userID": 22,
        "date": "2019/09/21",
        "numSteps": 4483,
        "minutesActive": 157,
        "flightsOfStairs": 40
      },      
      {
        "userID": 33,
        "date": "2019/09/21",
        "numSteps": 4070,
        "minutesActive": 168,
        "flightsOfStairs": 3
      },      
      {
        "userID": 44,
        "date": "2019/09/21",
        "numSteps": 5953,
        "minutesActive": 233,
        "flightsOfStairs": 39
      },      
      {
        "userID": 11,
        "date": "2019/09/22",
        "numSteps": 9314,
        "minutesActive": 264,
        "flightsOfStairs": 17
      },      
      {
        "userID": 22,
        "date": "2019/09/22",
        "numSteps": 7346,
        "minutesActive": 192,
        "flightsOfStairs": 47
      },      
      {
        "userID": 33,
        "date": "2019/09/22",
        "numSteps": 11953,
        "minutesActive": 184,
        "flightsOfStairs": 21
      },      
      {
        "userID": 44,
        "date": "2019/09/22",
        "numSteps": 10581,
        "minutesActive": 165,
        "flightsOfStairs": 28
      }      
    ];

    activityRepo = new ActivityRepo(dataset, userDataset);
  });

  it('should return the miles walked by a user based on steps', () => {    
    const miles1 = activityRepo.calculateMiles(33, '2019/09/21');

    expect(miles1).to.equal(2);

    const miles2 = activityRepo.calculateMiles(11, '2019/09/22');

    expect(miles2).to.equal(4.23);    
  });

  it('should be able to generate a properly-formatted week', () => {    
    const week = activityRepo.findWeekDates('2019/09/01');

    expect(week).to.be.an('array');
    expect(week).to.have.a.lengthOf(7);
    expect(week).to.deep.equal([
      '2019/08/26',
      '2019/08/27',
      '2019/08/28',
      '2019/08/29',
      '2019/08/30',
      '2019/08/31',
      '2019/09/01'
    ]);    
  });

  it.skip('should return avg minutes active for a given week', () => {
    const endDate = '2019/09/05';
    console.log(activityRepo.findWeekDates(endDate));
    
    // const avgMinutes = activityRepo.calculateMinutesActive(33, endDate);

    // expect(avgMinutes).to.equal(6424);
  });

  it.skip('should return all days a user exceeded their step goal', () => {
    const daysExceededGoal = activityRepo.calculateDaysExceededGoal(33);

    expect(daysExceededGoal).to.deep.equal(['2019/09/19', '2019/09/22']);
  });

  it.skip('should return user\'s all-time stair-climbing record', () => {
    const record = activityRepo.calculateStairRecord(22);

    expect(record).to.equal(47);
  });

  it.skip('should save avg stairs, steps, minutes for a date for all users', () => {
    expect(activityRepo.averages).to.be.an('object');

    const date1 = '2019/09/15';
    activityRepo.calculateDailyAverages(date1);

    expect(activityRepo.dailyAverages[date1]).to.deep.equal({      
      stairs: 132,
      steps: 6070,
      minutesActive: 234
    });

    const date2 = '2019/09/16';
    activityRepo.calculateDailyAverages(date2);

    expect(activityRepo.dailyAverages[date2]).to.deep.equal({      
      stairs: 21,
      steps: 7757,
      minutesActive: 176
    });

    expect(activityRepo.dailyAverages).to.deep.equal({
      '2019/09/15': {        
        stairs: 132,
        steps: 6070,
        minutesActive: 234
      },
      '2019/09/16': {        
        stairs: 21,
        steps: 7757,
        minutesActive: 176
      }
    });
  });

  it.skip('should save avg stairs, steps, minutes for a week for all users', () => {
    const endDate = '2019/09/22';
    activityRepo.calculateWeeklyAverages(endDate);
    // the expectation is calling calculateDailyAverages 7 times to properly generate the data

    expect(activityRepo.weeklyAverages).to.be.an('object');
    expect(activityRepo.weeklyAverages[endDate]).to.be.an('object');
    expect(activityRepo.weeklyAverages[endDate]).to.deep.equal({
      stairs: 40,
      steps: 7057,
      minutesActive: 177
    });
  });
});