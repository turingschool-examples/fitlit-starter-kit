const chai = require('chai');
const expect = chai.expect;

const UserRepo = require('../src/User-repo');
const User = require('../src/User');


describe('UserRepo', function() {

  it('should be a function', function() {
    const userRepo = new UserRepo();

    expect(UserRepo).to.be.a('function');
  });

  it('takes an array of user data', function() {
    const user1 = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    const user2 = new User({id: 2,
      name: "Allie McCarthy",
      address: "1235 Turing Street, Denver CO 80301-1697",
      email: "allie.mcc1@hotmail.com",
      strideLength: 3.3,
      dailyStepGoal: 9000,
      friends: [1, 3, 4]
    });
    const users = [user1, user2];
    const userRepo = new UserRepo(users);

    expect(userRepo.users).to.include(user2);
  });

  it('should have a parameter to take in user data', function() {
    const user1 = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    const users = [user1];
    const userRepo = new UserRepo(users);

    console.log('here: ',userRepo.users[0]);

    expect(userRepo.users[0].id).to.equal(1);
  });

  it('should return user data when given user ID', function() {
    const user1 = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    const user2 = new User({id: 2,
      name: "Allie McCarthy",
      address: "1235 Turing Street, Denver CO 80301-1697",
      email: "allie.mcc1@hotmail.com",
      strideLength: 3.3,
      dailyStepGoal: 9000,
      friends: [1, 3, 4]
    });
    const users = [user1, user2];
    const userRepo = new UserRepo(users);

    userRepo.getDataFromID(1);

    expect(userRepo.getDataFromID(1)).to.eql(user1);
  })

  it('should return the average of all users step goals', function() {
    const user1 = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    const user2 = new User({id: 2,
      name: "Allie McCarthy",
      address: "1235 Turing Street, Denver CO 80301-1697",
      email: "allie.mcc1@hotmail.com",
      strideLength: 3.3,
      dailyStepGoal: 9000,
      friends: [1, 3, 4]
    });
    const users = [user1, user2];
    const userRepo = new UserRepo(users);

    userRepo.calculateAverageStepGoal();

    expect(userRepo.calculateAverageStepGoal()).to.eql(9500);
  })

  // it('should return the week from a given date', function() {
  //   const user1 = new User({id: 1,
  //     name: "Alex Roth",
  //     address: "1234 Turing Street, Denver CO 80301-1697",
  //     email: "alex.roth1@hotmail.com",
  //     strideLength: 4.3,
  //     dailyStepGoal: 10000,
  //     friends: [2, 3, 4]
  //   });
  //   const user2 = new User({id: 2,
  //     name: "Allie McCarthy",
  //     address: "1235 Turing Street, Denver CO 80301-1697",
  //     email: "allie.mcc1@hotmail.com",
  //     strideLength: 3.3,
  //     dailyStepGoal: 9000,
  //     friends: [1, 3, 4]
  //   });
  //   const users = [user1, user2];
  //   const userRepo = new UserRepo(users);
  //
  //   // userRepo.getWeekFromDate('2018/10/23');
  //
  //   console.log(userRepo.getWeekFromDate('2018/10/23'));
  //
  //   expect(userRepo.getWeekFromDate('2018/10/23')[6]).to.equal('2018-10-29T06:00:00.000Z');
  // })

  it('should sort data by date and extract the first week', function() {
    const user1 = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    const user2 = new User({id: 2,
      name: "Allie McCarthy",
      address: "1235 Turing Street, Denver CO 80301-1697",
      email: "allie.mcc1@hotmail.com",
      strideLength: 3.3,
      dailyStepGoal: 9000,
      friends: [1, 3, 4]
    });
    const users = [user1, user2];
    const userRepo = new UserRepo(users);
    const hydrationData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 38
    },
    {
      "userID": 3,
      "date": "2019/05/09",
      "numOunces": 1
    },
    {
      "userID": 4,
      "date": "2019/04/15",
      "numOunces": 36
    },
    {
      "userID": 2,
      "date": "2018/10/23",
      "numOunces": 34
    },
    {
      "userID": 1,
      "date": "2018/06/16",
      "numOunces": 39
    },
    {
      "userID": 3,
      "date": "2018/03/30",
      "numOunces": 2
    },
    {
      "userID": 4,
      "date": "2018/02/01",
      "numOunces": 28
    },
    {
      "userID": 1,
      "date": "2016/08/22",
      "numOunces": 30
    },
    {
      "userID": 3,
      "date": "2016/05/14",
      "numOunces": 3
    },
    {
      "userID": 2,
      "date": "2016/04/27",
      "numOunces": 40
    },
    {
      "userID": 4,
      "date": "2019/03/15",
      "numOunces": 35
    },
    {
      "userID": 4,
      "date": "2019/09/20",
      "numOunces": 40
    },
    {
      "userID": 4,
      "date": "2019/09/19",
      "numOunces": 30
    },
    {
      "userID": 4,
      "date": "2019/09/18",
      "numOunces": 40
    },
    {
      "userID": 4,
      "date": "2019/09/17",
      "numOunces": 40
    },
    {
      "userID": 4,
      "date": "2019/09/16",
      "numOunces": 30
    },
    {
      "userID": 4,
      "date": "2019/09/15",
      "numOunces": 30
    },]
    console.log(userRepo.getFirstWeek(4, hydrationData));
    expect(userRepo.getFirstWeek(4, hydrationData)[3].date).to.eql("2019/09/17");
  })
})
