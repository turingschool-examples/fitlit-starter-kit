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

  it.skip('should return user data when given user ID', function() {
    const user1 = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    const users = [user1];
    const userRepo = new UserRepo(users, user1.name);

    expect(user1.name).to.equal("Alex Roth");
  })
})
