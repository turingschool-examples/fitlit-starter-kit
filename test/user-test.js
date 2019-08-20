const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

const testUsers = [
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

var user1, user2, user3
beforeEach(() => {
  user1 = new User(testUsers[0]);
  user2 = new User(testUsers[1]);
  user3 = new User(testUsers[2]);

})

describe('User', function() {
  
  it('should be a function', function() {
    expect(User).to.be.a('function');
  });
  
  it('should have an id', function() {
    expect(user2.id).to.be.equal(2);
  });

  it('should have a name', function() {
    expect(user1.name).to.be.equal('Luisa Hane')
  });

  it('should have an address', function() {
    expect(user3.address).to.be.equal('85823 Bosco Fork, East Oscarstad MI 85126-5660');
  });

  it('should have an email', function() {
    expect(user1.email).to.be.equal('Diana.Hayes1@hotmail.com');
  })

  it('should have a stride length', function() {
    expect(user2.strideLength).to.be.equal(4.5);
  });

  it('should have a daily step goal', function() {
    expect(user3.dailyStepGoal).to.be.equal(5000);
  });

  it('should have friends', function() {
    expect(user3.friends).to.deep.equal([
      19,
      11,
      42,
      33
    ]);
  });

  it('should return the first name', function() {
    expect(user1.returnFirstName()).to.equal('Luisa')
  });

});

  