const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', function() {

  it('should be a function', function() {
    const user = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    const user = new User({id: 1,
      name: "Alex Roth",
      address: "1234 Turing Street, Denver CO 80301-1697",
      email: "alex.roth1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
    expect(user).to.be.an.instanceof(User);
  });

  it('should take a user data object', function() {
      const user = new User({id: 1,
        name: "Alex Roth",
        address: "1234 Turing Street, Denver CO 80301-1697",
        email: "alex.roth1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [2, 3, 4]
      });

    expect(user.id).to.equal(1);
    expect(user.name).to.equal("Alex Roth");
  });

  it('should take a different user data object', function() {
      const user2 = new User({id: 2,
        name: "Allie McCarthy",
        address: "1235 Turing Street, Denver CO 80301-1697",
        email: "allie.mcc1@hotmail.com",
        strideLength: 3.3,
        dailyStepGoal: 9000,
        friends: [1, 3, 4]
      });

    expect(user2.id).to.equal(2);
    expect(user2.name).to.equal("Allie McCarthy");
  });

  it('should return user first name', function() {
      const user2 = new User({id: 2,
        name: "Allie Kennedy Holly McCarthy",
        address: "1235 Turing Street, Denver CO 80301-1697",
        email: "allie.mcc1@hotmail.com",
        strideLength: 3.3,
        dailyStepGoal: 9000,
        friends: [1, 3, 4]
      });

    expect(user2.getFirstName()).to.equal("Allie");
  });

});
