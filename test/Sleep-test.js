import { expect } from "chai";
import Sleep from "../src/Sleep";

describe('User Sleep', () => {
  let userSleep;

  beforeEach(() => {
    let currentUser = {
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8],
    };

    let allSleepInfo = {
      sleepData: [
        {
          userID: 1,
          date: "2019/06/15",
          hoursSlept: 6.1,
          sleepQuality: 2.2
        },
        {
          userID: 2,
          date: "2019/06/15",
          hoursSlept: 7,
          sleepQuality: 4.7
        },
        {
          userID: 3,
          date: "2019/06/15",
          hoursSlept: 10.8,
          sleepQuality: 4.7
        },
        {
          userID: 1, 
          date: '2019/06/16', 
          hoursSlept: 4.1, 
          sleepQuality: 3.8
        },
        {
          userID: 1, 
          date: '2019/06/17', 
          hoursSlept: 8, 
          sleepQuality: 2.6
        },
        {
          userID: 1, 
          date: '2019/06/18', 
          hoursSlept: 10.4, 
          sleepQuality: 3.1
        },
        {
          userID: 1, 
          date: '2019/06/19', 
          hoursSlept: 10.7, 
          sleepQuality: 1.2
        },
        {
          userID: 1, 
          date: '2019/06/20', 
          hoursSlept: 9.3, 
          sleepQuality: 1.2
        },
        {
          userID: 1, 
          date: '2019/06/21', 
          hoursSlept: 7.8, 
          sleepQuality: 4.2
        }
      ]
    };

    userSleep = new Sleep(currentUser, allSleepInfo);
  });
  
  it('Should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('Should be an instance of the Sleep class', () => {
    expect(userSleep).to.be.an.instanceOf(Sleep);
  });

  it('Should store all sleep data', () => {
    expect(userSleep.sleepData).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/15",
        hoursSlept: 6.1,
        sleepQuality: 2.2
      },
      {
        userID: 2,
        date: "2019/06/15",
        hoursSlept: 7,
        sleepQuality: 4.7
      },
      {
        userID: 3,
        date: "2019/06/15",
        hoursSlept: 10.8,
        sleepQuality: 4.7
      },
      {
        userID: 1, 
        date: '2019/06/16', 
        hoursSlept: 4.1, 
        sleepQuality: 3.8
      },
      {
        userID: 1, 
        date: '2019/06/17', 
        hoursSlept: 8, 
        sleepQuality: 2.6
      },
      {
        userID: 1, 
        date: '2019/06/18', 
        hoursSlept: 10.4, 
        sleepQuality: 3.1
      },
      {
        userID: 1, 
        date: '2019/06/19', 
        hoursSlept: 10.7, 
        sleepQuality: 1.2
      },
      {
        userID: 1, 
        date: '2019/06/20', 
        hoursSlept: 9.3, 
        sleepQuality: 1.2
      },
      {
        userID: 1, 
        date: '2019/06/21', 
        hoursSlept: 7.8, 
        sleepQuality: 4.2
      }
    ]);
  });

  it('Should store a user', () => {
    expect(userSleep.currentUser).to.deep.equal({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8],
    });
  });

  it('Should store user specific sleep info', () => {
    expect(userSleep.userSleepInfo).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/15",
        hoursSlept: 6.1,
        sleepQuality: 2.2
      },
      {
        userID: 1, 
        date: '2019/06/16', 
        hoursSlept: 4.1, 
        sleepQuality: 3.8
      },
      {
        userID: 1, 
        date: '2019/06/17', 
        hoursSlept: 8, 
        sleepQuality: 2.6
      },
      {
        userID: 1, 
        date: '2019/06/18', 
        hoursSlept: 10.4, 
        sleepQuality: 3.1
      },
      {
        userID: 1, 
        date: '2019/06/19', 
        hoursSlept: 10.7, 
        sleepQuality: 1.2
      },
      {
        userID: 1, 
        date: '2019/06/20', 
        hoursSlept: 9.3, 
        sleepQuality: 1.2
      },
      {
        userID: 1, 
        date: '2019/06/21', 
        hoursSlept: 7.8, 
        sleepQuality: 4.2
      }
    ]);
  });

  it.skip('Should have a method that returns the average hours slept per user', () => {
    expect(userSleep.averageHoursSlept()).to.equal('8.1');
  });

  it.skip('Should have a method that returns a user\'s average sleep quality per day', () => {
    expect(userSleep.averageSleepQuality()).to.equal('2.6');
  });

  it.skip('Should have a method that returns the hours slept for a given date', () => {
    expect(userSleep.getHoursSlept('2019/06/18')).to.equal(10.4);
  });

  it.skip('Should have a method that returns the sleep quality for a given date', () => {
    expect(userSleep.getSleepQuality('2019/06/21')).to.equal(4.2);
  });

  it.skip('Should have a method that returns how many hours a user slept over the course of a given week', () => {
    expect(userSleep.getWeeklyHoursSlept('2019/06/21')).to.deep.equal([
      {
        date: "2019/06/15",
        hoursSlept: 6.1,
      },
      {
        date: '2019/06/16', 
        hoursSlept: 4.1, 
      },
      {
        date: '2019/06/17', 
        hoursSlept: 8, 
      },
      {
        date: '2019/06/18', 
        hoursSlept: 10.4, 
      },
      {
        date: '2019/06/19', 
        hoursSlept: 10.7, 
      },
      {
        date: '2019/06/20', 
        hoursSlept: 9.3, 
      },
      {
        date: '2019/06/21', 
        hoursSlept: 7.8, 
      }
    ]);
  });

  it.skip('Should have a method that returns the sleep quality of a user over the course of a given week', () => {
    expect(userSleep.getWeeklySleepQuality('2019/06/21')).to.deep.equal([
      {
        date: "2019/06/15",
        sleepQuality: 2.2
      },
      {
        date: '2019/06/16', 
        sleepQuality: 3.8
      },
      {
        date: '2019/06/17', 
        sleepQuality: 2.6
      },
      {
        date: '2019/06/18', 
        sleepQuality: 3.1
      },
      {
        date: '2019/06/19', 
        sleepQuality: 1.2
      },
      {
        date: '2019/06/20', 
        sleepQuality: 1.2
      },
      {
        date: '2019/06/21', 
        sleepQuality: 4.2
      }
    ])
  });

  it.skip('Should have a method that returns the average sleep quality of all users', () => {
    expect(userSleep.averageAllSleepQuality()).to.equal('3.1')
  });
})