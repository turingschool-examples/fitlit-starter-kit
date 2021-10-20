import { expect } from 'chai';
import Sleep from '../src/Sleep';
import User from '../src/User';

describe('Sleep', () => {
  let userData, sleepData, user1, user2, sleep;
  beforeEach(function() {
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
    }]
    user1 = new User(userData[0]);
    user2 = new User(userData[1]);
    sleep = new Sleep(sleepData);
  })

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });
})
