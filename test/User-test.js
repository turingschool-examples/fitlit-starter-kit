import { expect } from 'chai';
import { userSleepData } from '../src/fetch';
import User from '../src/User';
import UserRepository from '../src/UserRepository';

describe('User', () => {
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should store user data', function () {
    const userData = {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [ 16, 4, 8 ]
    };
    const user = new User(userData)
    expect(user.id).to.equal(userData.id);
    expect(user.name).to.equal(userData.name);
    expect(user.address).to.equal(userData.address);
    expect(user.email).to.equal(userData.email);
    expect(user.strideLength).to.equal(userData.strideLength);
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
    expect(user.friends).to.equal(userData.friends);
  });

  it('should be able to show User first name', function () {
    const userData = {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [ 16, 4, 8 ]
    };
    const user = new User(userData)
    expect(user.displayFirstName()).to.equal('Luisa');
  });

  let userData, hydrationData, sleepData, user1, user2;

  beforeEach(function(){
    userData = [{
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [ 16, 4, 8 ]
    },
    {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [9, 18, 24, 19]
    }];

    hydrationData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 69
    },
    {
      "userID": 1,
      "date":"2019/06/17",
      "numOunces":96
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 69
    },
    {
      "userID": 1,
      "date":"2019/06/20",
      "numOunces":96
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 69
    },
    {
      "userID": 1,
      "date":"2019/06/22",
      "numOunces":96
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 91
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 96
    }
  ];

    sleepData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 37,
      "sleepQuality": 3.8
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 34,
      "sleepQuality": 4.3
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 41,
      "sleepQuality": 2.6
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 33,
      "sleepQuality": 3.1
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 35,
      "sleepQuality": 1.8
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 44,
      "sleepQuality": 3.0
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 37,
      "sleepQuality": 2.2
    },
    {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 40,
      "sleepQuality": 2.9
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 35,
      "sleepQuality": 3.9
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 39,
      "sleepQuality": 3.1
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 41,
      "sleepQuality": 2.2
    }
  ];

    user1 = new User(userData[0]);
    user2 = new User(userData[1]);

});

  it('should calculate the average daily ounces consumed', function () {
    expect(user1.calculateAvgOunces(hydrationData)).to.equal(71.13)
    expect(user2.calculateAvgOunces(hydrationData)).to.equal(87.33)
  })

  it('should calculate fluid ounces consumed for a specific date', function () {
    expect(user1.findOuncesByDate(hydrationData,"2019/06/15")).to.equal(37)
    expect(user2.findOuncesByDate(hydrationData,"2019/06/15")).to.equal(75)
  })

  it('should return ounces consumed per day for selected week', function () {
    expect(user1.findOuncesByWeek(hydrationData,"2019/06/21")).to.deep.equal([37,69,96,37,69,96,69])
  })

  it('should calculate the average number of hours slept per day', function () {
    expect(user1.calculateAvgDailySleep(sleepData)).to.equal(37.63)
    expect(user2.calculateAvgDailySleep(sleepData)).to.equal(38.33)
  })

  it('should calculate the average sleep quality', function () {
    expect(user1.calculateAvgSleepQuality(sleepData)).to.equal(2.96)
    expect(user2.calculateAvgSleepQuality(sleepData)).to.equal(3.07)
  })

  it('should return hours slept for a specific date', function () {
    expect(user1.findHoursSleptByDate(sleepData,"2019/06/16")).to.equal(34)
    expect(user2.findHoursSleptByDate(sleepData,"2019/06/16")).to.equal(39)
  })

  it('should return sleep quality for a specific date', function () {
    expect(user1.findSleepQualityByDate(sleepData,"2019/06/16")).to.equal(4.3)
    expect(user2.findSleepQualityByDate(sleepData,"2019/06/16")).to.equal(3.1)
  })
  it('should return sleep quality for a specific date', function() {
    expect(user1.findSleepQualityByDate(sleepData, "2019/06/17")).to.equal(2.6);
    expect(user2.findSleepQualityByDate(sleepData, "2019/06/16")).to.equal(3.1);
  });

  it('shoud return hours slept per day for selected week', function() {
    expect(user1.findHoursSleptByWeek(sleepData, "2019/06/16")).to.deep.equal([34, 41, 33, 35, 44, 37, 40]);
    expect(user1.findHoursSleptByWeek(sleepData, "2019/06/15")).to.deep.equal([37, 34, 41, 33, 35, 44, 37]);
  });

  it('shoud return sleep quality per day for selected week', function() {
    expect(user1.findSleepQualityByWeek(sleepData, "2019/06/15")).to.deep.equal([3.8, 4.3, 2.6, 3.1, 1.8, 3.0, 2.2]);
    expect(user1.findSleepQualityByWeek(sleepData, "2019/06/16")).to.deep.equal([4.3, 2.6, 3.1, 1.8, 3.0, 2.2, 2.9]);
  });

  it('should return the average sleep quality for all users', function() {
    const userRepository = new UserRepository(userData);
    expect(userRepository.calculateAvgSleepQuality(sleepData)).to.equal(2.99)
  })
});
