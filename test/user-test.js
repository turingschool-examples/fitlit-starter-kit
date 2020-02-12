const chai = require('chai');
const expect = chai.expect;

const UsersRepository = require('../src/UsersRepository');
const User = require('../src/User');

describe('User', function() {
  let user1;
  let userData;
  let user;

  beforeEach(function() {
    user1 = {
      "id": 4,
      "name": "Mae Connelly",
      "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
      "email": "Marcos_Pollich@hotmail.com",
      "strideLength": 3.1,
      "dailyStepGoal": 4000,
      "friends": [
       48,
       7,
       44,
       8
     ]
    }

    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }
    ];

    user = new User(user1);

  })

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should return a user\'s first name', function() {
    expect(user.returnUserFirstName()).to.equal("Mae");
  });

  it('should return different user\'s first name',
    function() {

    const usersRepository = new UsersRepository(2);
    const userInfo = usersRepository.getUserDataById(userData);
    const user = new User(userInfo);

    expect(user.returnUserFirstName()).to.equal('Jarvis');
  });
  
});
